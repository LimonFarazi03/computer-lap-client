import React, { useEffect, useState } from 'react';
import ManageItem from '../ManageItem/ManageItem';
import './ManageItems.css';

const ManageItems = () => {
  const [products,setProducts] = useState([]);
  // console.log(products);
  const url = 'https://whispering-dawn-95349.herokuapp.com/items';
  useEffect(()=>{
    fetch(url)
    .then(res => res.json())
    .then(data => setProducts(data))
  },[]);
  return (
    <div className='container custom-margin'>
      <div className='row gy-3'>
        {
        products.map(product => <ManageItem key={product._id} product={product}/>)
      }
      </div>
    </div>
  );
};

export default ManageItems;