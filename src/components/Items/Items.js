import React, { useEffect, useState } from 'react';
import Item from '../item/Item';

const Items = () => {
  const [products,setProducts] = useState([]);
  // console.log(products);
  const url = 'http://localhost:5000/items';
  useEffect(()=>{
    fetch(url)
    .then(res => res.json())
    .then(data => setProducts(data))
  },[]);
  return (
    <div className='container'>
      <div className='row gy-5'>
        {
        products.map(product => <Item
                   key={product._id}
                   product={product}
                >
                </Item>)
            }
      </div>
    </div>
  );
};

export default Items;