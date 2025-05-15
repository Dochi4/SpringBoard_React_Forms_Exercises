import React from "react";

const Box = ({ id, width, height, background, removeBox }) => {
  return (
    <>
      <div
        style={{
          width: width,
          height: height,
          backgroundColor: background,
        }}
      ></div>
      <button onClick={() => removeBox(id)}>Remove</button>
    </>
  );
};

export default Box;
