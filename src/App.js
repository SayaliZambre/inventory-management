import React, { useState } from "react";
import styled from "styled-components";
import Form from "./components/Form";
import Table from "./components/Table";

const AppContainer = styled.div`
  background-color: #121212;
  color: #ffffff;
  min-height: 100vh;
  padding: 20px;
  font-family: 'Arial', sans-serif;
`;

const App = () => {
  const [items, setItems] = useState([
    { id: 1, name: "Item 1", category: "Category A", quantity: 5 },
    { id: 2, name: "Item 2", category: "Category B", quantity: 20 },
  ]);
  const [filter, setFilter] = useState("");
  const [sortAsc, setSortAsc] = useState(true);

  const addItem = (item) => {
    setItems([...items, { ...item, id: Date.now() }]);
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const toggleSort = () => {
    setSortAsc(!sortAsc);
  };

  const filteredItems = filter
    ? items.filter((item) => item.category === filter)
    : items;

  const sortedItems = [...filteredItems].sort((a, b) =>
    sortAsc ? a.quantity - b.quantity : b.quantity - a.quantity
  );

  return (
    <AppContainer>
      <h1>Dynamic Inventory Management</h1>
      <Form addItem={addItem} />
      <div>
        <label>Filter by Category: </label>
        <select onChange={(e) => setFilter(e.target.value)}>
          <option value="">All</option>
          {Array.from(new Set(items.map((item) => item.category))).map(
            (category) => (
              <option key={category} value={category}>
                {category}
              </option>
            )
          )}
        </select>
      </div>
      <button onClick={toggleSort}>Sort by Quantity ({sortAsc ? "Asc" : "Desc"})</button>
      <Table
        items={sortedItems}
        deleteItem={deleteItem}
        sortAsc={sortAsc}
        toggleSort={toggleSort}
        filter={filter}
      />
    </AppContainer>
  );
};

export default App;
