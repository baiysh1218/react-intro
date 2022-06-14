import React from "react";
import Card from "../Card/Card";

const list = ({ cars }) => {
  console.log(cars);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}>
      {cars.map(item => (
        // <span key={item.id}>{item.model}</span>
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
};

export default list;
