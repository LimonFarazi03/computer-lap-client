import React from 'react';
import googleLogo from '../../Image/google-logo.png';
import { Link } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../firebase.init';

const Signup = () => {
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
  
  const handleSignup = (event) =>{
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;
    
    if(password !== confirmPassword){
      toast.warn('password and confirm passsword does not match')
    }else{
      toast.success('Successfully created account');
      createUserWithEmailAndPassword(email, password);
    }
  }
  return (
    <div className="d-flex justify-content-center align-items-center my-5">
      <form onSubmit={handleSignup}> 
      <h3 className="text-center my-3">Signup</h3>
    <div className="form-group">
        <input className="p-2" type="email" name='email' id="inputEmail" placeholder="Email"/>
    </div>
    <div className="form-group">
        <input className="p-2" type="password" name='password' placeholder="Password"/> <br />
        <input className="p-2" type="password" name='confirmPassword'  placeholder="Confirm Password"/>
    </div>
    <input className="submit-btn" type="submit" value='Login' />
    <div className="forget-link">
      <p className="my-2"><span><Link to="##">Forget password</Link></span></p>
    </div>
    <hr /> 
    <div className="google-logo">
    <img src={googleLogo} alt="" />
    </div>
  <div className="mt-3 forget-link text-center"><p>Already Have an account <span><Link to="/login">Login</Link></span></p></div>
</form>
    </div>
  );
};

export default Signup;