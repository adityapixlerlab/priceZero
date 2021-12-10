import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { Button } from "@mui/material";
function Category() {
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    getCategory();
  }, []);
  const getCategory = () => {
    axios
      .get("categories")
      .then((result) => {
        setCategoryData(result.data.data);
        // console.log(result.data.data, "category..............");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      {categoryData.map((item, i) => (
        <Link to="/category" style={{ textDecoration: "none" }} key={i}>
          <Button
            variant="outlined"
            style={{
              width: 200,
              height: 45,
              margin: 30,
              border: "1px solid #E0E0E5",
              color: "#33334F",
              textDecoration: "none",
            }}
          >
            <LocalOfferIcon style={{ margin: 10 }} />
            {item.title}
          </Button>
        </Link>
      ))}
    </div>
  );
}

export default Category;
