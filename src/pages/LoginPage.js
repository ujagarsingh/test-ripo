import React from "react";
import { useNavigate } from "react-router-dom";
import Person4OutlinedIcon from "@mui/icons-material/Person4Outlined";
import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined";
import { Button, FormControl, Input, InputAdornment } from "@mui/material";

function LoginPage() {
  let Navigate = useNavigate();
  const loginHandler = () => {
    Navigate("/dashboard");
  };

  return (
    <div className="login-bg">
      <div className="loginContainer">
        <div className="login-main">
          <div className="loginFormCover">
            <div className="loginForm">
              <div className="loginHeader">
                <div className="title">LOGIN</div>
                <div className="subTitle">
                  How to i get started lorem ipsum dolor at?
                </div>
              </div>
              <div className="loginInputBox">
                <div className="inputField login-username">
                  <FormControl variant="standard">
                    <Input
                      id="username"
                      type="text"
                      startAdornment={
                        <InputAdornment position="start">
                          <Person4OutlinedIcon />
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </div>

                <div className="inputField login-password">
                  <FormControl variant="standard">
                    <Input
                      id="username"
                      type="password"
                      startAdornment={
                        <InputAdornment position="start">
                          <HttpsOutlinedIcon />
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </div>

                <div className="login_footer">
                  <Button
                    className="login_now"
                    onClick={() => loginHandler()}
                    variant="contained"
                  >
                    Login Now
                  </Button>
                </div>

                <div className="loginTitle">
                  <div className="loginTitleInner">
                    <span>Login</span>With Others
                  </div>
                </div>

                <div className="googleLoginBox">
                  <Button
                    variant="outlined"
                    startIcon={
                      <img src="images/icons/google_icon.svg" alt="google" />
                    }
                  >
                    <span className="loginWidth">Login with</span> <span>google</span>
                  </Button>
                </div>
              </div>
            </div>

            <div className="loginFormImage">
              <div className="loginOverlayImage">
                <img className="girlimage" src="images/computer.png" alt="vk" />
                <div className="loginOverlay"></div>
              </div>
              <div className="loginFormImageBG">
                <img src="images/pngwing.png" alt="vk" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
