import {
  StyledElementProps,
  Value,
  TElement,
  TDescendant,
  Plate,
  findNodePath,
  setNodes,
  usePlateEditorRef
} from "@udecode/plate";
import {
  ChangeEventHandler,
  CSSProperties,
  useCallback,
  useState
} from "react";
import { plugins } from "../core/setting/cusplugin";
import { MyValue, MyEditor } from "../core/types/plateType";
import Style from "../style/textAreaElement.module.scss";

export interface TextAreaElementType extends TElement {
  caption?: TDescendant[];
}
const styles: Record<string, CSSProperties> = {
  box: { boxShadow: "0 0 0 3px #ddd", padding: "8px" },
  input: { margin: "8px 0" },
  radio: { width: "unset" }
};
export const TextAreaElement = <V extends Value>({
  ...props
}: StyledElementProps<V>) => {
  const { children, element, attributes } = props;
  const editor: any = usePlateEditorRef("editor")!;
  const [values, setValues] = useState<any>([
    { type: "p", children: [{ text: "" }] }
  ]);
  const onChangeValue: ChangeEventHandler<HTMLTextAreaElement> = useCallback(
    (e) => {
      setValues(e);
      const path = findNodePath(editor, element);
      path &&
        setNodes<TextAreaElementType>(
          editor,
          { value: [{ text: e }] },
          { at: path }
        );
    },
    [editor, element]
  );
  return (
    <div className={Style.main}>
      <div {...attributes} contentEditable={false}>
        <div className={Style.main_label}>{`${element.label}:`}</div>
        <div style={styles.editor}>
          <Plate<MyValue, MyEditor>
            id="editable-void-basic-elements"
            plugins={plugins}
            editableProps={{
              readOnly: false,
              style: {
                height: "100px",
                border: "1px solid #000"
              }
            }}
            onChange={(newValue: any) => {
              onChangeValue(newValue);
            }}
            value={values}
          />
        </div>
        {children}
      </div>
    </div>
  );
};
