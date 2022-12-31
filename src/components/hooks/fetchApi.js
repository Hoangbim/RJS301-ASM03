import React, { useEffect, useState } from "react";

export const useFetchApi = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const res = await fetch(
          "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74"
        );
        const data = await res.json();
        setData(data);
      } catch (error) {
        setData([]);
      }
    };

    fetchApi();
  }, []);

  return [data];
};

const num = 123456789;

console.log(String(num).replace(/\B(?=(\d{3})+(?!\d))/g, "."));

// for (let i = num.length; (i = 0); i = i - 3) {

// }
