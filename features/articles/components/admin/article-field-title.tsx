import { Controller } from "react-hook-form";
import { Field, FieldLabel, FieldError } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import type { ArticleProps } from "../../types/article";
import type { Control } from "react-hook-form";
import { Item, ItemTitle, ItemContent } from "@/components/ui/item";

type ArticleTitleFieldProps = {
  control: Control<ArticleProps>;
};

const ArticleFieldTitle: React.FC<ArticleTitleFieldProps> = ({ control }) => {
  return (
    <Item variant="outline">
      <Controller
        name="title"
        control={control}
        render={({ field, fieldState }) => (
          <Field aria-invalid={fieldState.invalid}>
            <FieldLabel htmlFor="article-field-title">
              <ItemTitle>Article Title</ItemTitle>
            </FieldLabel>
            <ItemContent>
              <Input
                id="article-field-title"
                placeholder="Enter article title..."
                size={24}
                {...field}
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </ItemContent>
          </Field>
        )}
      />
    </Item>
  );
};

export default ArticleFieldTitle;
