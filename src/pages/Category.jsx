import React from "react";
import { useParams } from "react-router-dom";
import { useCategoryProducts } from "../hooks/useProducts";
import { ItemListContainer } from "../components";
import { LoaderComponent } from "../components";

export const Category = () => {
  const { categoryId } = useParams();
  const { products, loading, error } = useCategoryProducts(categoryId);
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
