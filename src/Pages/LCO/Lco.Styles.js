import styled from 'styled-components';

export const PageContainer = styled.div`
  padding: 20px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;


  h2 {
    margin: 0;
  }
`;

export const AddButton = styled.button`
  background-color: rgba(91, 31, 243, 0.30);
  color: #4042E2;
  padding: 9px 16px;
  border-radius: 10px;
  border: 1px solid #4042E2;
  font-size: 14px;
  cursor: pointer;
  width: 30%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px; /* this creates space between icon and text */

  &:hover {
    background-color: #682ddf;
    color: white;
  }
`;


export const TableContainer = styled.div`
  overflow-x: auto;
//   background-color: white;
  border-radius: 8px;
  // box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 10px; /* <--- adds vertical gap of 10px between rows */
  font-size: 14px;

  thead tr {
    background-color: white;
  }

  th, td {
    padding: 12px 16px;
    text-align: left;
  }

  th {
    font-weight: 600;
    color: #333;
  }
`;


export const TableRow = styled.tr`
  background-color: ${(props) => (props.isEven ? 'rgba(91, 31, 243, 0.04);' : '#ffffff')};
//   border-radius: 12px;
  box-shadow: 0px 2px 3.2px 0px rgba(0, 0, 0, 0.10);
`;


export const TableCell = styled.td`
  vertical-align: middle;
`;

export const ActionIcon = styled.div`
  color: #4042E2;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
// Pagination Styles Update
export const PaginationContainer = styled.div`
  display: flex;
//   justify-content: center;
  align-items: ;
  background-color:#4042E2; // light purple background
  padding: 6px ;
//   border-radius: 16px;
  margin-top: 24px;
  gap: 10px;
  width:13.5rem;
`;

export const PaginationButton = styled.button`
  background: white;
  color: black;
  border: none;
  padding: 2px ;
  border-radius: 3px;
  font-size: 12px;
  cursor: pointer;
  min-width: 20px;
  box-shadow: 0px 1px 2px rgba(0,0,0,0.1);

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const ActivePage = styled(PaginationButton)`
  background-color: #4042E2;
  color: white;
  font-weight: bold;
  border: 1px solid #4042E2;
`;



