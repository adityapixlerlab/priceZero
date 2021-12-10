import React, { useState } from "react";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { TextField, InputAdornment } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import { useHistory, Link, Redirect } from "react-router-dom";
import Validation from "../../helper/Validation";
import LockIcon from "@mui/icons-material/Lock";
import axios from "axios";
import "../../css/login.css";
// import Signup from "./Signup";
function Login() {
  const history = useHistory();
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState({});

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    setError({
      ...error,
      [e.target.name]: Validation.loginForm(e.target.name, e.target.value),
    });
  };
  const handlSubmit = (e) => {
    e.preventDefault();
    if (error.email === "" && error.password === "") {
      axios
        .post("login", data)
        .then((res) => {
          if (res.data.status === true) {
            localStorage.setItem("user.token", res.data.token);
            history.push("/");
          } else {
            toast.error(res.data.message, {
              position: toast.POSITION.TOP_CENTER,
            });
          }
        })
        .catch((err) => console.log(err));
    } else {
      alert("all fields are required");
    }
  };

  if (localStorage.getItem("user.token")) {
    return <Redirect to="/" />;
  }
  return (
    <>
      <ToastContainer />
      <div className="main-box">
        <div className="form-box">
          <h4 className="login-heading">Log in to your account</h4>
          <div className="paragraph">
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia mollit non deserunt ullamco consequat.
            </p>
          </div>
          <form onSubmit={handlSubmit}>
            <div>
              <label className="email-lable">Email address</label>
              <br />
              <TextField
                fullWidth
                name="email"
                label="Email"
                placeholder="enter email"
                value={data.email}
                variant="outlined"
                size="small"
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <MailOutlineIcon />
                    </InputAdornment>
                  ),
                }}
              />
              {error.email && <div>{error.email}</div>}
              <br />
              <label className="password-lable">Password</label>
              <br />
              <TextField
                fullWidth
                type="password"
                name="password"
                label="Password"
                placeholder="enter password"
                value={data.password}
                variant="outlined"
                size="small"
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon />
                    </InputAdornment>
                  ),
                }}
              />
              {error.password && <div>{error.password}</div>}
              <br />
              <input type="checkbox" />
              <label className="checkbox-lable">Keep me signed in</label>
              <label className="forget-data">Forget password</label>
              <br />
              <button className="button">Sign in</button>
              <br />
              <p className="paragraph">
                Not Registered yet?
                <Link to="/signup">
                  <span style={{ color: "#33334f" }}>Create a new account</span>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
