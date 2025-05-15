import React, { useState } from "react";

const NewBoxForm = ({ addBox }) => {
  const initialState = {
    width: "",
    height: "",
    background: "",
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
    addBox({
      ...formData,
      width: `${formData.width}px`,
      height: `${formData.height}px`,
    });
    setFormData(initialState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="width">Width (px)</label>
      <input
        type="number"
        id="width"
        name="width"
        value={formData.width}
        onChange={handleChange}
        placeholder="Add Width"
      />

      <label htmlFor="height">Height (px)</label>
      <input
        type="number"
        id="height"
        name="height"
        value={formData.height}
        onChange={handleChange}
        placeholder="Add Height"
      />

      <label htmlFor="background">Background Color</label>
      <input
        type="text"
        id="background"
        name="background"
        value={formData.background}
        onChange={handleChange}
        placeholder="Add Color"
      />

      <button>Add Box</button>
    </form>
  );
};

export default NewBoxForm;
