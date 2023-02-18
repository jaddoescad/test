import { ReactElement } from "react";

export interface HandleType {
  icon: ReactElement;
  title: string;
  onClick: React.MouseEventHandler<HTMLElement>;
}
