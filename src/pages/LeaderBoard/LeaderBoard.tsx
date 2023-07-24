import { FC, useEffect, useRef, useState } from "react";
import Table from "../../components/Table";
import { TableBody, TableHeaders } from "../../components/Table/components";
import { playersInitialState } from "./InitialState";
import { AnimationDirection, Player } from "./interface";

export const LeaderBoard: FC = () => {
  const [players, setPlayers] = useState<Player[]>([...playersInitialState]);
  const [animateDirection, setAnimateDirection] =
    useState<AnimationDirection>(null);
  const [animatedIndex, setAnimatedIndex] = useState<number | null>(null);
  const lastSortedRows = useRef<Player[]>([...playersInitialState]);

  useEffect(() => {
    let animationTimeout: NodeJS.Timeout;

    let setDirection = (updatedData: Player[], randomIndex: number) => {
      let isRowSort =
        updatedData[randomIndex].userID !==
        lastSortedRows.current[randomIndex].userID;
      let direction: AnimationDirection = null;

      if (isRowSort) {
        direction =
          updatedData[randomIndex].score >
          lastSortedRows.current[randomIndex].score
            ? "up"
            : "down";
      }

      lastSortedRows.current = updatedData;
      setAnimateDirection(direction);
      setAnimatedIndex(isRowSort ? randomIndex : null);
    };

    const updateScores = () => {
      let randomIndex = Math.floor(Math.random() * players.length);

      const updatedData = players.map((player, index) => {
        if (index === randomIndex) {
          return {
            ...player,
            score: player.score + Math.floor(Math.random() * 10000),
          };
        }

        return player;
      });
      updatedData.sort((a, b) => b.score - a.score);
      setDirection(updatedData, randomIndex);

      animationTimeout = setTimeout(() => {
        setPlayers(updatedData);
      }, 50);

      setTimeout(() => {
        setAnimateDirection(null);
        setAnimatedIndex(null);
      }, 500);
    };

    const interval = setInterval(updateScores, 1000);

    return () => {
      clearInterval(interval);
      clearTimeout(animationTimeout);
    };
  }, [players]);

  return (
    <>
      <h1>Leader Board</h1>
      <Table>
        <TableHeaders />
        <TableBody
          players={players}
          animateDirection={animateDirection}
          animatedIndex={animatedIndex}
        />
      </Table>
    </>
  );
};
