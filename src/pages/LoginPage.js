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
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required')
    .min(8, 'must be 8 digit password')
})

function LoginPage() {
  let navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState(false);
  // const [email, setEmail] = useState("admin@welcome.com");
  // const [password, setPassword] = useState("admin123");

  const { dispatch } = useContext(AuthContext);

  const loginHandler = (value) => {
    // e.preventDefault();
    signInWithEmailAndPassword(auth, value.email, value.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch({ type: "LOGIN", payload: user });
        navigate("/dashboard");
      })
      .catch((error) => {
        setError(true);
      });
  };

  const showPassword = () => [setShowPass(!showPass)];

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
                {error && (
                  <div className="subTitle" style={{ color: "red" }}>
                    There is an error!
                  </div>
                )}
              </div>
              <div className="loginInputBox">
                <Formik
                  initialValues={{
                    email: '',
                    password: ''
                  }}
                  validationSchema={loginSchema}
                  onSubmit={(values) => {
                    loginHandler(values)
                  }}
                >
                  {(formik) => {
                    const { handleSubmit, handleChange, handleBlur, values, errors } = formik;
                    return (
                      <form onSubmit={handleSubmit}>
                        <div className="inputField login-username">
                          <FormControl variant="standard">
                            <Input
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.email}
                              error={errors.email}
                              helperText={errors.email}
                              id="email"
                              type="email"
                              autoComplete="off"
                              startAdornment={
                                <InputAdornment position="start">
                                  <Person4OutlinedIcon />
                                </InputAdornment>
                              }
                            />
                            {errors.email && (
                              <span className="field_error">{errors.email}</span>
                            )}
                          </FormControl>
                        </div>

                        <div className="inputField login-password">
                          <FormControl variant="standard">
                            <Input

                              id="password"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.password}
                              error={errors.password}
                              helperText={errors.password}
                              autoComplete="off"
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
                            {errors.password && (
                              <span className="field_serror">{errors.password}</span>
                            )}
                          </FormControl>
                        </div>

                        <div className="login_footer">
                          <Button
                            type="submit"
                            className="login_now"
                            // onClick={() => loginHandler()}
                            variant="contained"
                          >
                            Login Now
                          </Button>
                        </div>
                      </form>
                    )
                  }}
                </Formik>
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