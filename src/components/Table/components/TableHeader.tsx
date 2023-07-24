import { FC } from "react";
import { TableHeader, TableHeaderCell } from "./style";

export const TableHeaders: FC = () => {
  const headers = ["name", "score"];

  return (
    <TableHeader>
      <tr>
        {headers.map((header) => (
          <TableHeaderCell key={header}>{header}</TableHeaderCell>
        ))}
      </tr>
    </TableHeader>
  );
};
