import {
  getPluginType,
  insertElements,
  PlateEditor,
  Value,
  withoutNormalizing
} from "@udecode/plate";
import { ElEMENT_TEXTEREA } from "../customPlugins/createTextAreaPlugin";

export const insertTextAreaElement = <V extends Value>(
  editor: PlateEditor<V>,
  id: string,
  label: string,
  value?: string
) => {
  const textAreaElement = [
    {
      type: getPluginType(editor, ElEMENT_TEXTEREA),
      id: id,
      label: label,
      value: value,
      children: [{ text: "" }]
    }
  ];

  withoutNormalizing(editor, () => {
    insertElements(editor, textAreaElement);
  });
};
