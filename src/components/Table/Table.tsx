import { FC } from "react";
import TableComp from "./style";

interface TableProps {
  children: JSX.Element | JSX.Element[];
}

export const Table: FC<TableProps> = (props) => {
  return <TableComp>{props.children}</TableComp>;
};
