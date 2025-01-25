import React from "react";
import styled from "styled-components";

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 20px 0;
  background-color: #1e1e1e;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);

  input, button {
    padding: 10px;
    border: none;
    border-radius: 4px;
  }

  input {
    background-color: #2a2a2a;
    color: #fff;
  }

  input:focus {
    outline: 2px solid #555;
  }

  button {
    background-color: #444;
    color: #fff;
    cursor: pointer;
  }

  button:hover {
    background-color: #555;
  }
`;

const Form = ({ addItem }) => {
  return (
    <FormContainer
      onSubmit={(e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const category = form.category.value;
        const quantity = parseInt(form.quantity.value, 10);
        if (name && category && quantity) {
          addItem({ name, category, quantity });
          form.reset();
        }
      }}
    >
      <input type="text" name="name" placeholder="Item Name" required />
      <input type="text" name="category" placeholder="Category" required />
      <input type="number" name="quantity" placeholder="Quantity" required />
      <button type="submit">Add Item</button>
    </FormContainer>
  );
};

export default Form;