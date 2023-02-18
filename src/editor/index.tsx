import { Plate } from "@udecode/plate";
import { FC, useState, useEffect } from "react";
import { ComponentToolBar } from "./common/componentToolBar";
// import { plugins } from "./core/setting/plugins";
import { plugins } from "./core/setting/plugins";
import Style from "./style/index.module.scss";

const Editor: FC = () => {
  const [reportValue, setReportValue] = useState<any>([
    { type: "p", children: [{ text: "" }] }
  ]);
  const [a, setA] = useState<string>("1");
  useEffect(() => {
    console.log("1");
  }, []);
  return (
    <div className={Style.main}>
      <ComponentToolBar />
      {/* value: {JSON.stringify(reportValue)} */}
      <div id="reportEditor">
        <Plate
          id="editor"
          editableProps={{
            autoFocus: false,
            spellCheck: false,
            readOnly: false,
            style: {
              textAlign: "left",
              minHeight: "29.7cm",
              height: "auto",
              width: "21cm",
              backgroundColor: "#fff",
              margin: "auto",
              border: "1px solid #000",
              padding: "5px"
            }
          }}
          plugins={plugins}
          onChange={(newValue: any) => {
            setReportValue(newValue);
          }}
          initialValue={reportValue}
        />
      </div>
    </div>
  );
};
export default Editor;
