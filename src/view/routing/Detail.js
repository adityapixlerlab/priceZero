import React, { useEffect, useState } from "react";

import axios from "axios";

import { Card } from "react-bootstrap";
import logo from "../../assets/image/errImg.png";
import { useParams } from "react-router-dom";

export default function Detail() {
  const [productDetail, setProductDetail] = useState();
  const { id } = useParams();

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = () => {
    axios.get("product/" + id).then((res) => {
      setProductDetail(res.data.data);
    });
  };

  console.log(productDetail, "...... product data");
  return (
    <>
      <p>{productDetail?.title}</p>
      <p>Product Detail</p>
    </>
  );
}
