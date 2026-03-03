"use client";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/item";
import { TypographyH1 } from "@/components/ui/typography";
import ArticleActions from "./article-new-actions";

const ArticleAdminHeader: React.FC = () => {
  return (
    <Item variant="outline">
      <ItemContent>
        <ItemTitle>
          <TypographyH1>Add new article</TypographyH1>
        </ItemTitle>
        <ItemDescription>
          Enter all article needed info to publish.
        </ItemDescription>
      </ItemContent>
      <ItemActions>
        <ArticleActions />
      </ItemActions>
    </Item>
  );
};

export default ArticleAdminHeader;
