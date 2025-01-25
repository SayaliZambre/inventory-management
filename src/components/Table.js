import React from "react";
import styled from "styled-components";

const TableContainer = styled.div`
  margin: 20px auto;
  max-width: 1000px;
  overflow-x: auto;
  border-radius: 8px;
  background-color: #1e1e1e;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    padding: 12px;
    text-align: left;
  }

  th {
    background-color: #333;
    color: #fff;
  }

  tr {
    border-bottom: 1px solid #444;
  }

  tr.low-stock {
    background-color: #ff3333;
    color: #fff;
  }

  tr:hover {
    background-color: #444;
  }
`;

const Button = styled.button`
  background-color: #444;
  color: #fff;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  margin: 0 5px;

  &:hover {
    background-color: #555;
  }
`;

const Table = ({ items, deleteItem, sortAsc, toggleSort, filter }) => {
  return (
    <TableContainer>
      <StyledTable>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr
              key={item.id}
              className={item.quantity < 10 ? "low-stock" : ""}
            >
              <td>{item.name}</td>
              <td>{item.category}</td>
              <td>{item.quantity}</td>
              <td>
                <Button onClick={() => deleteItem(item.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </TableContainer>
  );
};

export default Table;