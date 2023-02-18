import { FC } from "react";
import { HandleButton } from "../../common/handleButton";
import ArticleIcon from "@mui/icons-material/Article";
import { usePlateEditorRef } from "@udecode/plate";
import { insertTextAreaElement } from "../../core/utils/InserttextAreaElement";
export const TextAreaButton: FC = () => {
  const editor = usePlateEditorRef("editor")!;
  const handleClick = () => {
    insertTextAreaElement(editor, Math.random().toString(), "issue");
  };
  return (
    <>
      <HandleButton
        title="Textarea"
        onClick={handleClick}
        icon={<ArticleIcon />}
      />
    </>
  );
};
