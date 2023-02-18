import { FC } from "react";
import Style from "../style/componentBar.module.scss";
import { TextAreaButton } from "../components/Button/textAreaButton";

export const ComponentToolBar: FC = () => {
  return (
    <div className={Style.main}>
      <TextAreaButton />
    </div>
  );
};
