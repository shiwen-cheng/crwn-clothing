import { createContext, useEffect, useState } from "react";

// import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils";

// import SHOP_DATA from "../shop-data.js";

export const ProductsContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   addCollectionAndDocuments("collections", SHOP_DATA);
  // }, []);
  // 一般不在前端做传数据，这个只需要运行一次就可以了，传到数据库以后就不用了

  const value = { products };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
