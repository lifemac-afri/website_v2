import GalleryHero from '@/components/GalleryHero';
import GalleryGrid from '@/components/GalleryGrid';
import { getPayload } from 'payload'
import config from '@/payload.config'

export default async function GalleryPage() {
  const payload = await getPayload({ config })
  const galleryData = await payload.find({
    collection: 'gallery',
    limit: 100,
    sort: '-createdAt',
  })
  const galleryEntries = galleryData.docs

  return (
    <main>
      <GalleryHero />
      <GalleryGrid galleryEntries={galleryEntries} />
    </main>
  );
}
