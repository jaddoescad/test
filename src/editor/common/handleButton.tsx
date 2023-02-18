import { FC } from "react";
import { Button, Tooltip } from "antd";
import { HandleType } from "../core/types/handleButtonType";

export const HandleButton: FC<HandleType> = (props: HandleType) => {
  const { icon, title, onClick } = props;
  return (
    <Tooltip placement="bottom" title={title} arrowPointAtCenter>
      <Button icon={icon} onClick={onClick} />
    </Tooltip>
  );
};
