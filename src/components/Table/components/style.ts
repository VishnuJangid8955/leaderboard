import styled, { keyframes } from "styled-components";
import { AnimationDirection } from "../../../pages/LeaderBoard/interface";

const TableHeader = styled.thead`
  background-color: #0f7451;
  color: white;
`;

const TableHeaderCell = styled.th`
  text-align: left;
  padding: 12px 20px;
`;

const slideUp = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;

const slideDown = keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
`;

const TableRow = styled.tr<{ animateDirection?: AnimationDirection }>`
  animation: ${({ animateDirection }) =>
      animateDirection === "up"
        ? slideUp
        : animateDirection === "down"
        ? slideDown
        : ""}
    0.5s ease;
  will-change: transform;
`;

const TableDataCell = styled.td`
  &:nth-child(1) {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  p {
    margin: 0;
    width: 30px;
  }
  text-align: left;
  padding: 12px 20px;
`;

export { TableHeader, TableHeaderCell, TableDataCell, TableRow };
