import React from "react";
import { useParams, Link } from "react-router-dom";

const items = [
  { id: 1, name: "Item 1", description: "Description for Item 1" },
  { id: 2, name: "Item 2", description: "Description for Item 2" },
  { id: 3, name: "Item 3", description: "Description for Item 3" },
];

const ItemDetail = () => {
  const { id } = useParams();
  const item = items.find((i) => i.id === parseInt(id));

  if (!item) {
    return <h1>Item not found</h1>;
  }

  return (
    <div>
      <h1>{item.name}</h1>
      <p>{item.description}</p>
      <Link to="/">Back to List</Link>
    </div>
  );
};

export default ItemDetail;
