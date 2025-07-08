import fs from "node:fs/promises"
import path from "path"
import sizeOf from "image-size"
import { ProjectImageSchema, type ProjectImage } from "./images"
import { unstable_cache } from "next/cache"

export const getCachedImages = unstable_cache(
  async (dir: string) => getImages(dir),
  ["images"],
  { revalidate: 3600 }
)

export async function getImages(dir: string): Promise<ProjectImage[]> {
  const images = await fs.readdir(
    path.join(process.cwd(), "public", `/${dir}`),
    {
      withFileTypes: true,
    }
  )

  const imageFiles = images.filter((item) => item.isFile())

  const imagesWithDimensions = (
    await Promise.all(
      imageFiles.map(async (file) => {
        try {
          const imagePath = path.join(
            process.cwd(),
            "public",
            `/${dir}`,
            file.name
          )
          const imageBuffer = await fs.readFile(imagePath)
          const dimensions = sizeOf(imageBuffer)

          // Skip files that don't have valid dimensions
          if (!dimensions.width || !dimensions.height || !dimensions.type) {
            return null
          }

          return {
            name: file.name,
            width: dimensions.width,
            height: dimensions.height,
            type: dimensions.type,
            path: `/${dir}/${file.name}`,
          }
        } catch (error) {
          // Skip unsupported file types or corrupted files
          console.warn(`Skipping unsupported file: ${file.name}`, error)
          return null
        }
      })
    )
  ).filter(Boolean) as ProjectImage[]

  const validatedImages =
    ProjectImageSchema.array().safeParse(imagesWithDimensions)

  if (!validatedImages.success) {
    throw new Error(
      `Invalid images for ${dir}: ${validatedImages.error.message}`
    )
  }

  return validatedImages.data
}
