import type { Adapter, GeneratedAdapter } from '@payloadcms/plugin-cloud-storage/types'
import { v2 as cloudinary } from 'cloudinary'
import path from 'path'

interface CloudinaryAdapterConfig {
  cloud_name: string
  api_key: string
  api_secret: string
  folder?: string
}

export const cloudinaryAdapter = (config: CloudinaryAdapterConfig): Adapter => {
  return ({ collection, prefix }): GeneratedAdapter => {
    cloudinary.config({
      cloud_name: config.cloud_name,
      api_key: config.api_key,
      api_secret: config.api_secret,
    })

    return {
      name: 'cloudinary',
      generateURL: ({ filename }) => {
        const url = cloudinary.url(path.posix.join(config.folder || '', prefix || '', filename), {
          secure: true,
        })
        console.log(`[CloudinaryAdapter] Generated URL for ${filename}: ${url}`)
        return url
      },
      handleUpload: async ({ file }) => {
        await new Promise((resolve, reject) => {
          const uploadStream = cloudinary.uploader.upload_stream(
            {
              public_id: path.posix.join(config.folder || '', prefix || '', file.filename).replace(/\.[^/.]+$/, ''), // Remove extension for public_id
              resource_type: 'auto',
              folder: config.folder,
              use_filename: true,
              unique_filename: false,
            },
            (error, result) => {
              if (error) reject(error)
              else resolve(result)
            },
          )
          uploadStream.end(file.buffer)
        })
      },
      handleDelete: async ({ filename }) => {
        const publicId = path.posix.join(config.folder || '', prefix || '', filename).replace(/\.[^/.]+$/, '')
        await cloudinary.uploader.destroy(publicId)
      },
      staticHandler: async (req, { params }) => {
        // Cloudinary handles serving files, so we can redirect or let the generateURL handle it
        // But for staticHandler, we might need to fetch and stream if we want to mask the URL
        // For now, we'll just return a redirect or 404 since generateURL is preferred
        return new Response(null, { status: 404 })
      },
    }
  }
}
