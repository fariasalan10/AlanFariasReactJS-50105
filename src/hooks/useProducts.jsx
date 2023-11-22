/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import {
  getAllProducts,
  getSingleProducts,
  getCategoryProducts,
} from "../services";

export const useAllProducts = (limit) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getAllProducts(limit)
      .then((res) => setProducts(res.data.products))
      .catch((err) => setError(true))
      .finally(() => setLoading(false));
  }, []);

  return { products, loading, error };
};

export const useSingleProduct = (id) => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getSingleProducts(id)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => setError(true))
      .finally(() => setLoading(false));
  }, []);

  return { product, loading, error };
};

export const useCategoryProducts = (categoryId) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getCategoryProducts(categoryId)
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((err) => setError(true))
      .finally(() => setLoading(false));
  }, [categoryId]);
  return { products, loading, error };
};
