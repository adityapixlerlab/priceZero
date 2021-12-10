import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import Detail from "../view/routing/Detail";
import logo from "../assets/image/errImg.png";
import { Link } from "react-router-dom";

function Product({ productData }) {
  // console.log(product);
  return (
    <>
      {productData.map((item, i) => (
        <Link
          to={`/detail/${item._id}`}
          className="col-2 "
          style={{ textDecoration: "none" }}
          key={i}
        >
          <div>
            <div
              style={{
                width: "auto",
                height: 250,
                marginBottom: 16,
              }}
            >
              <Card.Img variant="top" src={logo} style={{ border: "0.8px solid #E0E0E5" }} />

              <div style={{ color: "#ADADB9", fontSize: 12, marginTop: 12 }}>
                <p style={{ color: "#33334F", fontSize: 16 }}>{item.title}</p>
                <p>{item.created_by.name}</p>
                <p>{item.created_at.slice(0, 10)}</p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>
    // </div>
  );
}

export default Product;
