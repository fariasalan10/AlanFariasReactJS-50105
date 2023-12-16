import React from "react";
import { useParams } from "react-router-dom";
import { useAllProductsByFilter } from "../hooks/useProducts";
import { ItemListContainer } from "../components";
import { LoaderComponent } from "../components";

export const Category = () => {
  const { categoryId } = useParams();
  const { products, loading, error } = useAllProductsByFilter(
    "products",
    categoryId,
    "category"
  );
  return (
    <div>
      {loading ? (
        <LoaderComponent />
      ) : error ? (
        <div>Hubo un error</div>
      ) : (
        <ItemListContainer products={products} />
      )}
    </div>
  );
};
