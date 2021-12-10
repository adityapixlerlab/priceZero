import React, { useEffect, useState } from "react";
import "../../css/home.css";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { ToastContainer } from "react-toastify";
import Button from "@mui/material/Button";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Navbar, NavDropdown, Container } from "react-bootstrap";
import logo from "../../assets/logo/Logo.png";
import Category from "../../route/Category";
import Product from "../../route/Product";
import { useHistory, Link } from "react-router-dom";
import axios from "axios";

function Home() {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = () => {
    axios
      .get("product")
      .then((result) => {
        // console.log(result.data.data, "prduct........");
        setProductData(result.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const history = useHistory();

  const logOut = () => {
    localStorage.clear();
    history.push("/login");
  };

  return (
    <div>
      <ToastContainer limit={1} />
      <Navbar bg="light" expand="lg">
        <Container fluid className="d-flex justify-content-between px-5">
          <div className="d-flex justify-content-around w-50">
            <img src={logo} alt="" />
            <div className="d-flex">
              <input type="text" placeholder="search for product" className="searchTerm" />
              <button type="submit" className="searchButton">
                <SearchIcon />
              </button>
            </div>
          </div>

          <div className="btn-div">
            <Link to="/addproduct" style={{ textDecoration: "none" }}>
              <Button variant="contained" className="mx-5 btn">
                Donate Item
              </Button>
            </Link>
            <div className="btn-line  "></div>
            <div className="location">
              <LocationOnIcon />
            </div>
            <div className="dropdown">
              <NavDropdown title="State" id="basic-nav-dropdown" style={{ color: "black" }}>
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              </NavDropdown>
            </div>
            <div className="account d-flex">
              <AccountCircleIcon />
            </div>
            <div className="acc-ddn">
              <NavDropdown title="" id="basic-nav-dropdown" style={{ color: "black" }}>
                <NavDropdown.Item href="">
                  <Button variant="text" onClick={logOut}>
                    Log out
                  </Button>
                </NavDropdown.Item>
              </NavDropdown>
            </div>
          </div>
        </Container>
      </Navbar>
      <div className="heading">
        <p>Product by Categories</p>
      </div>
      <div className="ctgry-btn">
        <Category />
      </div>
      <div style={{ marginLeft: 100, marginRight: 100 }}>
        <div className="row m-5 ">
          <p className="mx-3">All Products</p>
          <Product productData={productData} />
        </div>
      </div>
    </div>
  );
}

export default Home;
