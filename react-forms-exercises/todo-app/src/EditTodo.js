import React, { useState } from "react";

const EditTodo = ({
  id,
  item,
  completed,
  toggleTaskCompleted,
  editTodo,
  removeTodo,
}) => {
  const [isEditing, setEditing] = useState(false);
  const [formData, setFormData] = useState({ item });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(id, formData.item);
    setEditing(false);
  };

  const editingTemplate = (
    <form onSubmit={handleSubmit}>
      <label htmlFor={`edit-${id}`}>Editing "{item}"</label>
      <input
        id={`edit-${id}`}
        name="item"
        type="text"
        value={formData.item}
        onChange={handleChange}
      />
      <button type="button" onClick={() => setEditing(false)}>
        Cancel
      </button>
      <button type="submit">Save</button>
    </form>
  );

  const viewTemplate = (
    <li>
      <input
        type="checkbox"
        id={id}
        checked={completed}
        onChange={() => toggleTaskCompleted(id)}
      />
      <label htmlFor={id}>{item}</label>

      {/* Edit button */}
      <button type="button" onClick={() => setEditing(true)}>
        Edit
      </button>

      {/* Remove button */}
      <button type="button" onClick={() => removeTodo(id)}>
        Remove
      </button>
    </li>
  );

  return isEditing ? editingTemplate : viewTemplate;
};

export default EditTodo;
