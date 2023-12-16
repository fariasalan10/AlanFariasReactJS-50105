import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { AddItemButton } from "../AddItemButton/AddItemButton";

export const ItemCount = () => {
  const [quantity, setQuantity] = React.useState(1);

  const arr = [1, 2];

  const handleAddProduct = () => {
    setQuantity(quantity + 1);
  };

  const handleRemoveProduct = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleResetQuantity = () => {
    setQuantity(1);
  };
  return (
    <div style={{ marginLeft: "auto", marginRight: "auto" }}>
      <Button onClick={handleRemoveProduct}>-</Button>
      <Form
        style={{
          marginLeft: "10px",
          marginRight: "10px",
          width: "60px",
          display: "inline-block",
        }}
      >
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control
            type="number"
            placeholder="0"
            value={quantity}
            disabled
          />
        </Form.Group>
      </Form>
      <Button onClick={handleAddProduct}>+</Button>
      <AddItemButton
        quantity={quantity}
        handleResetQuantity={handleResetQuantity}
      />
    </div>
  );
};
