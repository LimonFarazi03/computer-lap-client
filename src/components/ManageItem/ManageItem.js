import React from "react";
import "./ManageItem.css";
import { MdProductionQuantityLimits } from "react-icons/md";
import { ImUserTie } from "react-icons/im";
import { AiFillDelete } from "react-icons/ai";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ManageItem = ({ product }) => {
  const handleDelete = () => {
    const url = `https://whispering-dawn-95349.herokuapp.com/item/${product._id}`;
    const confirm = window.confirm('Confirm delete')
    if(confirm){
      fetch(url, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          toast.success('Successfully deleted');
        });
    }
  };
  const navigate = useNavigate();
  const navigateToServiceDet = (id) =>{
    navigate(`/productDetails/${id}`)
  }
  return (
    <div>
      <div className="custom-shadow rounded-3 p-2">
      <div className="d-flex justify-content-between align-items-center col-12 col-md-12">
        <div onClick={()=>navigateToServiceDet(product._id)} className="imgHover details d-flex justify-content-center align-items-center">
          <img width={"100px"} src={product.img} alt="" />
          <div className="custom-height">
            <p>{product.name?.slice(0, 15)}</p>
            <p className="my-3 color-custom custom-user">
              <ImUserTie /> {product.supplier}
            </p>
            <p className="fw-bold clr-custom">
              <MdProductionQuantityLimits /> {product.quantity}
            </p>
          </div>
        </div>
        <div onClick={handleDelete} className="delete-btn">
          <AiFillDelete />
        </div>
      </div>
    </div>
    </div>
  );
};

export default ManageItem;
