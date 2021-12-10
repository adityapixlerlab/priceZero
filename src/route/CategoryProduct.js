import axios from "axios";
import React, { useEffect, useState } from "react";

function CategoryProduct() {
  const [categoryProduct, setCategoryProduct] = useState([]);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = () => {
    axios
      .get("categories/61792955a9cad52dc2313735")
      .then((result) => {
        // console.log(result.data.data, "category prduct........");
        // setCategoryProduct(result.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      {/* {categoryProduct.map((item) => (
        <>{item._id}</>
      ))} */}
    </div>
  );
}

export default CategoryProduct;
