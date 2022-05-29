import React from "react";
import './Login.css';
import googleLogo from '../../Image/google-logo.png';
import { Link } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import { toast } from "react-toastify";

const Login = () => {
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const handleLogin = (event) =>{
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    // Some Problem here
    if(error){
      toast(error.message);
    }else{
      toast.success('successfully login');
      signInWithEmailAndPassword(email,password);
    }

  }

  return (
    <div className="d-flex justify-content-center align-items-center my-5">
      <form onSubmit={handleLogin}>
      <h3 className="text-center my-3">Login</h3>
    <div className="form-group">
        <input className="p-2" type="email" name='email' id="inputEmail" placeholder="Email"/>
    </div>
    <div className="form-group">
        <input className="p-2" type="password" name='password' id="inputPassword" placeholder="Password"/>
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