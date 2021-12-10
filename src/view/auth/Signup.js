import React from "react";
import "../../css/signup.css";
import { Redirect } from "react-router-dom";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CallIcon from "@mui/icons-material/Call";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import Button from "@mui/material/Button";
import {} from "@mui/material";
function Signup() {
  if (localStorage.getItem("user.token")) {
    return <Redirect to="/" />;
  }
  return (
    <>
      <div className="main-box">
        <div className="form-box">
          <h4 className="sign-heading">Sign up</h4>
          <div className="paragraph">
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia mollit non deserunt ullamco consequat.
            </p>
          </div>
          <form>
            <div style={{ width: "100%", paddingLeft: "10%", paddingRight: "10%" }}>
              <Button
                variant="outlined"
                fullWidth={true}
                style={{
                  color: "#33334F",
                  fontSize: "12px",
                  fontFamily: "Inter",
                  fontStyle: "normal",
                }}
              >
                <CallIcon
                  style={{
                    color: "#33334F",
                    height: "12.78px",
                    width: "17.99px",
                    paddingRight: "5px",
                  }}
                />
                Sign up with phone number
              </Button>
              <br />
              <br />
              <Button
                variant="outlined"
                fullWidth={true}
                style={{
                  color: "#33334F",
                  fontSize: "12px",
                  fontFamily: "Inter",
                  fontStyle: "normal",
                }}
              >
                <MailOutlineIcon
                  style={{
                    color: "#33334F",
                    height: "12.78px",
                    width: "17.99px",
                    paddingRight: "5px",
                  }}
                />{" "}
                Sign up with email
              </Button>
              <br />
              <div className="main-div">
                <div className="left-hr">
                  <hr />
                </div>
                <p className="paragraph-tag"> Or</p>
                <div className="right-hr">
                  <hr />
                </div>
              </div>

              <Button
                variant="outlined"
                fullWidth={true}
                style={{
                  color: "#33334F",
                  fontSize: "12px",
                  fontFamily: "Inter",
                  fontStyle: "normal",
                }}
              >
                <GoogleIcon
                  style={{
                    color: "#33334F",
                    height: "12.78px",
                    width: "17.99px",
                    paddingRight: "5px",
                  }}
                />{" "}
                Sign up with google
              </Button>
              <br />
              <br />
              <Button
                variant="outlined"
                fullWidth={true}
                style={{
                  color: "#33334F",
                  fontSize: "12px",
                  fontFamily: "Inter",
                  fontStyle: "normal",
                }}
              >
                <FacebookIcon
                  style={{
                    color: "#33334F",
                    height: "12.78px",
                    width: "17.99px",
                    paddingRight: "5px",
                  }}
                />{" "}
                Sign up with phone facebook
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
