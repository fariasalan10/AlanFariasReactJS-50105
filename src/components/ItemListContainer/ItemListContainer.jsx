import Card from "react-bootstrap/Card";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export const ItemListContainer = ({ products }) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        width: "100vw",
        justifyContent: "space-around",
      }}
    >
      {products.map((product) => {
        return (
          <Card key={product.id} style={{ width: "18rem", margin: 20 }}>
            <Link to={`/item/${product.id}`}>
              <Card.Img
                variant="top"
                src={product.thumbnail}
                style={{ height: "250px" }}
              />
            </Link>
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <div>
                <p
                  style={
                    product.stock <= 10 ? { color: "red" } : { color: "green" }
                  }
                >
                  Stock:<Card.Text>{product.stock}</Card.Text>
                </p>
                <p>
                  Rating:
                  <Card.Text>
                    {product.rating} {product.rating <= 4.5 ? "⬆️" : "⬇️"}
                  </Card.Text>
                </p>
                <Link to={`/item/${product.id}`}>
                  <Button
                    style={{
                      display: "flex",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  >
                    COMPRAR
                  </Button>
                </Link>
              </div>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};
