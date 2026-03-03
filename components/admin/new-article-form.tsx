"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  articleSchema,
  type ArticleProps,
} from "@/features/articles/types/article";

import ArticleAdminHeader from "@/features/articles/components/admin/article-new-header";
import ArticleFieldTitle from "@/features/articles/components/admin/article-field-title";
import ArticleFieldContent from "@/features/articles/components/admin/article-field-content";

const NewArticleForm: React.FC = () => {
  const form = useForm<ArticleProps>({
    resolver: zodResolver(articleSchema),
    defaultValues: {
      title: "",
      content: "",
      slug: "",
    },
  });

  const onSubmit = (data: ArticleProps) => {
    console.log(data);
  };

  return (
    <form
      id="new-article-form"
      className="flex flex-col gap-3"
      onSubmit={form.handleSubmit(onSubmit)}
    >
      <ArticleAdminHeader />
      <ArticleFieldTitle control={form.control} />
      <ArticleFieldContent />
    </form>
  );
};

export default NewArticleForm;
