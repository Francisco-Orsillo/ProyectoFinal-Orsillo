import { height, minHeight } from "@mui/system";
import React from "react";
import Item from "../Item/Item";

const ItemList = ({ items }) => {
  return (
    <div
      style={{
        backgroundColor: "#F9EDBB",
        display: "flex",
        width: "100%",
        minHeight: "100vh",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      {items.map((element) => {
        return <Item key={element.id} element={element} />;
      })}
    </div>
  );
};

export default ItemList;
