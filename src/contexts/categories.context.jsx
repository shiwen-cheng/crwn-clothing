import { createContext, useEffect, useState } from "react";

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

// import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils";
// import SHOP_DATA from "../shop-data.js";

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  // 向 firebase 传数据
  /*   useEffect(() => {
    addCollectionAndDocuments("categories", SHOP_DATA);
  }, []); */
  // 一般不在前端做传数据，这个只需要运行一次就可以了，传到数据库以后就不用了

  // 从 firebase 获取数据
  useEffect(() => {
    // 不能直接给 useEffect传异步函数，要放在里面定义一个异步函数，然后再调用它
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments("categories"); // 注意这里名称要和 18 行 上传时的名称一致
      setCategoriesMap(categoryMap);
      // console.log(categoryMap);
    };

    getCategoriesMap();
  }, []);

  const value = { categoriesMap };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
