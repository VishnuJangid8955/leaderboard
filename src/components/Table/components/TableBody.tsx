import { FC, memo } from "react";
import { TableDataCell, TableRow } from "./style";
import {
  AnimationDirection,
  Player,
} from "../../../pages/LeaderBoard/interface";
import { UserProfileIcon } from "../../../assets/icons";

interface TableBodyProps {
  players: Player[];
  animateDirection: AnimationDirection;
  animatedIndex: number | null;
}

export const TableBody: FC<TableBodyProps> = memo(
  ({ players, animateDirection, animatedIndex }) => {
    return (
      <tbody>
        {players.map((player, index) => (
          <TableRow
            animateDirection={animatedIndex === index ? animateDirection : null}
            key={player.userID}
          >
            <TableDataCell>
              <p>{index + 1}</p>
              <UserProfileIcon />
              {player.displayName}
            </TableDataCell>
            <TableDataCell>{player.score}</TableDataCell>
          </TableRow>
        ))}
      </tbody>
    );
  }
);
