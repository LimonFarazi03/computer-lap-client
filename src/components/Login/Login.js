import React from "react";
import './Login.css';
import googleLogo from '../../Image/google-logo.png';
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="d-flex justify-content-center align-items-center my-5">
      <form>
      <h3 className="text-center my-3">Login</h3>
    <div className="form-group">
        <input className="p-2" type="email" id="inputEmail" placeholder="Email"/>
    </div>
    <div className="form-group">
        <input className="p-2" type="password" id="inputPassword" placeholder="Password"/>
    </div>
    <input  className="submit-btn" type="submit" value='Login' />
    <div className="forget-link">
      <p className="my-2"><span><Link to="##">Forget password</Link></span></p>
    </div>
    <hr /> 
    <div className="google-logo">
    <img src={googleLogo} alt="" />
    </div>
  <div className="mt-3 forget-link text-center"><p>New in site <span><Link to="/signup">create an account</Link></span></p></div>
</form>
    </div>
  );
};

export default Login;