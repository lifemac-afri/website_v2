import type { CollectionAfterChangeHook } from 'payload'
import AdmZip from 'adm-zip'
import path from 'path'

export const processBulkUpload: CollectionAfterChangeHook = async ({
  doc, // full document data
  req: { payload }, // payload local API
  operation, // create or update
}) => {
  // Only proceed if there is a bulkUpload file and we are on the server
  if (!doc.bulkUpload) {
    return doc
  }

  try {
    // 1. Fetch the ZIP file Media document to get the URL
    const zipMedia = await payload.findByID({
      collection: 'media',
      id: doc.bulkUpload,
    })

    if (!zipMedia || !zipMedia.url) {
      console.error('Bulk upload: ZIP media not found or has no URL')
      return doc
    }

    console.log(`Starting bulk upload processing for Gallery: ${doc.title}`)

    // 2. Download the ZIP file
    const response = await fetch(zipMedia.url)
    const arrayBuffer = await response.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)

    // 3. Extract contents
    const zip = new AdmZip(buffer)
    const zipEntries = zip.getEntries()

    const newImageIds: string[] = []

    // 4. Process each file
    for (const entry of zipEntries) {
      if (entry.isDirectory) continue

      const fileName = entry.entryName
      const fileExt = path.extname(fileName).toLowerCase()
      
      // Simple check for image extensions
      if (!['.jpg', '.jpeg', '.png', '.webp', '.gif'].includes(fileExt)) {
        continue
      }

      const fileBuffer = entry.getData()
      const mimeType = fileExt === '.jpg' || fileExt === '.jpeg' ? 'image/jpeg' : 
                       fileExt === '.png' ? 'image/png' :
                       fileExt === '.webp' ? 'image/webp' :
                       fileExt === '.gif' ? 'image/gif' : 'application/octet-stream'

      try {
        // 5. Upload image to Media collection
        const uploadedImage = await payload.create({
          collection: 'media',
          data: {
            alt: `${doc.title} - ${path.basename(fileName, fileExt)}`,
          },
          file: {
            data: fileBuffer,
            mimetype: mimeType,
            name: path.basename(fileName),
            size: fileBuffer.length,
          },
        })

        if (uploadedImage && uploadedImage.id) {
            newImageIds.push(String(uploadedImage.id))
        }
      } catch (err) {
        console.error(`Failed to upload image ${fileName}:`, err)
      }
    }

    // 6. Update the Gallery document with new images
    if (newImageIds.length > 0) {
      const existingImages = doc.images ? doc.images.map((img: any) => (typeof img === 'object' ? img.id : img)) : []
      
      await payload.update({
        collection: 'gallery',
        id: doc.id,
        data: {
          images: [...existingImages, ...newImageIds],
          bulkUpload: null, // Clear the bulk upload field so it doesn't re-process
        },
      })
      console.log(`Bulk upload complete. Added ${newImageIds.length} images.`)
    }

  } catch (error) {
    console.error('Error processing bulk upload:', error)
  }

  return doc
}
