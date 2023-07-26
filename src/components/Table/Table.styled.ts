import styled, {css} from "styled-components";
import {IPageButton} from "./Table.d";

export const Row = styled.tr`
  border: 1px solid #eaeaea;

  &:nth-child(even) {
    background: #fafafa;
  }
`;

export const Cell = styled.td`
  padding: 5px 10px;
`;

export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TableControls = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const PageButton = styled.button<IPageButton>`
  background: none;
  outline: none;
  border: none;
  color: black;
  cursor: pointer;
  font-weight: bold;
  border-radius: 5px;

  ${props => props.current && css`
    background: #474955;
    color: white;
  `}
`;

export const StyledHeader = styled.th`
  background:  #474955;
  padding: 10px 15px;
  color: white;
  cursor: pointer;
`;

export const StyledTable = styled.table`
  border-collapse: collapse;
`;

export const Arrow = styled.span`
  font-size: 10px;
`;