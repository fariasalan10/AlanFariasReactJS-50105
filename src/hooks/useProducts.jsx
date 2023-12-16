/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

import {
  SnapshotMetadata,
  collection,
  doc,
  getDocs,
  getDoc,
  query,
  where,
  getFirestore,
} from "firebase/firestore";

export const useAllProducts = (collectionName) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const db = getFirestore();
    const productsCollection = collection(db, collectionName);

    getDocs(productsCollection)
      .then((snapshot) => {
        setProducts(
          snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  return { products, loading, error };
};

export const useSingleProduct = (collectionName, id) => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const db = getFirestore();
    const singleProduct = doc(db, collectionName, id);

    getDoc(singleProduct)
      .then((snaphot) => {
        setProduct({ id: snaphot.id, ...snaphot.data() });
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  return { product, loading, error };
};

export const useAllProductsByFilter = (
  collectionName,
  categoryId,
  fieldToFilter
) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const db = getFirestore();
    const collectionRef = collection(db, collectionName);

    const categoryQuery = query(
      collectionRef,
      where(fieldToFilter, "==", categoryId)
    );

    getDocs(categoryQuery)
      .then((res) => {
        const data = res.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(data);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [categoryId]);

  return { products, loading, error };
};
