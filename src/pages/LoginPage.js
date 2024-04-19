import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Person4OutlinedIcon from "@mui/icons-material/Person4Outlined";
import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined";
import { Button, FormControl, Input, InputAdornment } from "@mui/material";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { AuthContext } from "../context/AuthContext";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Formik } from "formik";
import * as Yup from 'yup'


const loginSchema = Yup.object().shape({
  email: Yup.string().required('Email is Required'),
  password: Yup.string().required('<PASSWORD>'),
})

function LoginPage() {
  let navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("admin@welcome.com");
  const [password, setPassword] = useState("admin123");

  const { dispatch } = useContext(AuthContext);

  const loginHandler = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch({ type: "LOGIN", payload: user });
        navigate("/dashboard");
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        setError(true);
      });
  };

  const showPassword = () => [setShowPass(!showPass)];

  return (
    <Formik
      initialValues={
        {
          email: '',
          password: ''
        }
      }
    >
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
                  {error && (
                    <div className="subTitle" style={{ color: "red" }}>
                      There is an error!
                    </div>
                  )}
                </div>
                <div className="loginInputBox">
                  {(formik) => (
                            // const {handleSubmit, handleChange, handleBlur, values, errors, touched} = formik;
                  <form onSubmit={handleSubmit}>
                    <div className="inputField login-username">
                      <FormControl variant="standard">
                        <Input
                          onChange={handleChange}
                          id="email"
                          value={email}
                          type="email"
                          // onChange={handleChange}
                          onBlur={handleBlur}
                          autoComplete="off"
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
                          onChange={(e) => setPassword(e.target.value)}
                          id="password"
                          autoComplete="off"
                          value={password}
                          type={showPass ? "text" : "password"}
                          startAdornment={
                            <InputAdornment position="start">
                              <HttpsOutlinedIcon />
                            </InputAdornment>
                          }
                          endAdornment={
                            <InputAdornment position="end">
                              <button type="button" onClick={showPassword}>
                                {showPass ? (
                                  <VisibilityIcon />
                                ) : (
                                  <VisibilityOffIcon />
                                )}
                              </button>
                            </InputAdornment>
                          }
                        />
                      </FormControl>
                    </div>

                    <div className="login_footer">
                      <Button
                        type="submit"
                        className="login_now"
                        variant="contained"
                      >
                        Login Now
                      </Button>
                    </div>

                    {/* <div className="loginTitle">
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
                  </div> */}
                  </form>
                  )}
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
    </Formik>
  );
}

export default LoginPage;
