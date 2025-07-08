import { z } from "zod"

export const ProjectImageSchema = z.object({
  name: z.string(),
  width: z.number(),
  height: z.number(),
  type: z.string(),
  path: z.string(),
})

export type ProjectImage = z.infer<typeof ProjectImageSchema>
