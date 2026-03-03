import { PlusSquare, Save, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";

const ArticleActions: React.FC = () => {
  return (
    <ButtonGroup>
      <Button variant="default" type="submit">
        <PlusSquare />
        Publish
      </Button>
      <Button variant="secondary" type="button">
        <Save />
        Save
      </Button>
      <Button variant="destructive" type="button">
        <X />
        Discard
      </Button>
    </ButtonGroup>
  );
};

export default ArticleActions;
