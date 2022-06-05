import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import auth from '../firebase.init';
import './HomeLink.css';
import { HiOutlineLogout } from 'react-icons/hi';
import logo from '../../Image/logo.png';

const HomeLink = () => {
  const [user, loading, error] = useAuthState(auth);
  
  // Logout
  const logout = () => {
    signOut(auth);
    toast.success('Logout Successfully');
  };
  return (
    <div>
      <nav className="fixed-top navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
    <Link className="navbar-brand" to="/">
    <img width={'96px'} src={logo} alt="" />
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="blogs">ManageItems</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="blogs">Blogs</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="about">AboutUs</Link>
        </li>
        <li className="nav-item">
          {user?<div className="logOutBtn" onClick={logout}><HiOutlineLogout/></div>:<Link className="nav-link login-custom" to="/login">Login</Link>}
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
};

export default HomeLink;