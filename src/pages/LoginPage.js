import React from "react";
import { useNavigate } from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';

function LoginPage() {

let Navigate = useNavigate()
  const loginHandler = () => {
Navigate("/dashboard")
  }

  return (
    <div className='login-bg'>
    <div className="container">
      <div className='login-main'>
      <div className='login-header'>
        <div className="login-page">
        <h1>LOGIN</h1>
        <p>How to i get started lorem ipsum dolor at?</p>
        <div className="loginInputBox">
          <div className='login-username'>
        <input className="username" type="text" startIcon='' placeholder="Username..." />
<PersonIcon />
          </div>
          <div className='login-password'>
        <input className="password" type="password" startIcon='' placeholder="password..." />
<LockIcon />
          </div>
        <button onClick={()=> loginHandler()} className='LoginButton'>Login Now</button>
        </div>
        <p><strong>Login</strong> With Others</p>
        <div className='googleBox'>
<img src='https://banner2.cleanpng.com/20240216/sb/transparent-google-logo-google-logo-with-multicolored-g-and-1710875781697.webp'/>
 <p>Login With <strong>Google</strong></p>
        </div>
        </div>
        <div  className='loginPageRightPart'>
         <div className='loginOverlay'></div>
         <div className='loginOverlayImage'>
          <img className='girlimage' src='computer.png'/>
          <img className='login-icon' src='icon.png'/>
         </div>
        </div>
        </div>
        </div>

        </div>
        </div>

    
  );
}

export default LoginPage;
