import React from "react";
import "./AddItem.css";
import { MdCloudUpload } from "react-icons/md";
import { toast } from "react-toastify";

const AddItem = () => {
  const handleUpload = (event) => {
    event.preventDefault();
    const supplier = event.target.supplier.value;
    const name = event.target.name.value;
    const description = event.target.description.value;
    const brand = event.target.brand.value;
    const price = event.target.price.value;
    const quantity = event.target.quantity.value;
    const img = event.target.img.value;
    
    const url = "https://whispering-dawn-95349.herokuapp.com/item";
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        supplier,
        name,
        description,
        brand,
        price,
        quantity,
        img,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        toast.success('Product Upload successfully');
      });
  };

  return (
    <div className="container custom-margin">
      <h3 className="text-center text-uppercase fw-bold text-success mb-5">
        Upload Your Product
      </h3>
      <form onSubmit={handleUpload} className="row g-3 w-75 p-2 mx-auto">
        <input
          name="supplier"
          type="text"
          className="form-control"
          placeholder="Your Name/ Seller Name"
        />
        <input
          name="name"
          type="text"
          className="form-control"
          placeholder="Product Name"
        />
        <textarea
          name="description"
          placeholder="Write Description..."
          cols="15"
          rows="5"
        ></textarea>
        <input
          name="brand"
          type="text"
          className="form-control"
          placeholder="Which Brand"
        />
        <input
          name="price"
          type="number"
          className="form-control"
          placeholder="Price"
        />
        <input
          name="quantity"
          type="number"
          className="form-control"
          placeholder="Quantity"
        />
        <input
          name="img"
          type="text"
          className="form-control"
          placeholder="Image Link must be host on imgBB (280*280)"
        />
        <button className="btn btn-success upload-btn">
          <MdCloudUpload /> Upload
        </button>
      </form>
    </div>
  );
};

export default AddItem;
