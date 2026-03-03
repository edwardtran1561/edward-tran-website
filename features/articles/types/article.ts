import * as z from "zod";

export const articleSchema = z.object({
  title: z.string().min(1, { message: "Title field is required" }),
  content: z.string(),
  slug: z.string(),
  date_published: z.date(),
  date_modify: z.date().optional(),
});

export type ArticleProps = z.infer<typeof articleSchema>;
