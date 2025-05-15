import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import NewBoxForm from "./NewBoxForm";
import Box from "./Box";
import "./BoxList.css";

const BoxList = () => {
  const initialState = [
    { id: uuid(), width: "200px", height: "100px", background: "green" },
    { id: uuid(), width: "100px", height: "200px", background: "blue" },
  ];

  const [boxes, setBoxes] = useState(initialState);
  const addBox = (newBoxData) => {
    setBoxes((boxes) => [...boxes, { ...newBoxData, id: uuid() }]);
  };
  const handleRemoveItem = (idToRemove) => {
    setBoxes((boxes) => boxes.filter((box) => box.id !== idToRemove));
  };

  return (
    <div>
      <NewBoxForm addBox={addBox} />
      <div className="container">
        {boxes.map(({ id, width, height, background }) => (
          <Box
            id={id}
            key={id}
            width={width}
            height={height}
            background={background}
            removeBox={handleRemoveItem}
          />
        ))}
      </div>
    </div>
  );
};

export default BoxList;
