import { useEffect, useState } from 'react';

export const UseGetItems = limit => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products?limit=${limit}`)
      .then(res => res.json())
      .then(data => {
        setItems(data);
      });
  }, [limit]);
  return items;
};
