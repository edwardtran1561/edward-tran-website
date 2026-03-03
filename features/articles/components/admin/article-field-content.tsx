"use client";
import { Plate, usePlateEditor } from "platejs/react";

const ArticleContentEditer: React.FC = () => {
  const editor = usePlateEditor();
  return <Plate editor={editor}>Test</Plate>;
};

export default ArticleContentEditer;
