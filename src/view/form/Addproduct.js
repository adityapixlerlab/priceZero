import React, { useState, useEffect } from "react";
import { TextField, Button, InputAdornment, MenuItem } from "@mui/material";
import { Navbar, Container, Row, Col } from "react-bootstrap";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import logo from "../../assets/logo/Logo2.png";
import axios from "axios";
import "../../css/addproduct.css";

function Addproduct() {
  const [file, setFile] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    getCategory();
  }, []);

  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const getCategory = () => {
    axios
      .get("categories")
      .then((result) => {
        setCategoryData(result.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fileSelectHandler = (e) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files).map((item) => URL.createObjectURL(item));
      console.log(filesArray);
      setFile((prevImage) => prevImage.concat(filesArray));
      Array.from(e.target.files).map((item) => URL.revokeObjectURL(item));
    }
  };

  const renderImage = (e) => {
    return e.map((photo) => {
      return <img src={photo} alt="" key={photo} className="i-img" />;
    });
  };

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid className="d-flex justify-content-between px-5">
          <div className="d-flex justify-content-around ">
            <ArrowBackIcon style={{ width: 15, marginTop: 5, marginRight: 25 }} />
            <img src={logo} alt="" style={{ width: 70, height: 36, color: "#33334F" }} />
          </div>
        </Container>
      </Navbar>
      <form>
        <div style={{ width: 375 }}>
          <h3 className="h-line">Add Product</h3>
          <label>Choose Category</label>

          <TextField
            fullWidth
            id="outlined-select-currency"
            select
            placeholder="sss"
            value={selectedCategory}
            onChange={handleChange}
            size="small"
          >
            {categoryData.map((item, i) => (
              <MenuItem key={i} value={item.title}>
                {item.title}
              </MenuItem>
            ))}
          </TextField>

          <label>Product Title</label>

          <TextField
            fullWidth
            id="outlined-textarea"
            placeholder="Add Product title"
            size="small"
          />

          <label>Discripition</label>

          <TextField
            variant="outlined"
            fullWidth
            // label="Write Something about Product"
            placeholder="Write Something about Product"
            multiline
            rows={4}
          />
          <div style={{ width: 350 }}>
            <label>Product Photos</label>
            <input type="file" multiple id="file" onChange={fileSelectHandler} />
            {renderImage(file)}
          </div>
          <p className="p-tag">Review your Details</p>
          <div>
            <Row className="g-2">
              <Col md>
                <label>Email Address</label>

                <TextField
                  id="demo-helper-text-aligned-no-helper"
                  placeholder="Add Email Address"
                  size="small"
                />
              </Col>
              <Col md>
                <label>Phone Number</label>
                <TextField
                  type="number"
                  id="demo-helper-text-aligned-no-helper"
                  placeholder="+91 Phone"
                  size="small"
                />
              </Col>
            </Row>
          </div>
          <label>Add Address</label>

          <TextField
            fullWidth
            id="demo-helper-text-aligned-no-helper"
            placeholder="Add Address"
            size="small"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <MyLocationIcon />
                </InputAdornment>
              ),
            }}
          />

          <Button
            variant="contained"
            style={{
              width: 135,
              marginTop: 10,
              marginLeft: 238,
              backgroundColor: "#dad2f7",
              color: "#917BE7",
            }}
          >
            Post
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Addproduct;
