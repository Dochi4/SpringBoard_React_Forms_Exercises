import React, { useState } from "react";

const NewTodo = ({ addTodo }) => {
  const initialState = {
    item: "",
  };

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.item.trim()) return;
    addTodo({
      ...formData,
    });
    setFormData(initialState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="item">Item</label>
      <input
        type="text"
        id="item"
        name="item"
        value={formData.item}
        onChange={handleChange}
        placeholder="Add Todo Item"
      />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
