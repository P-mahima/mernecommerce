import React from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addToCart, getTotal } from "../../redux/CartSlice";

const AddToCart = ({item}) => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  const handleCart = (item) => {
    if (token) {
      dispatch(addToCart(item));
      dispatch(getTotal());
    } else {
      toast.info("Please login first to enjoy shopping", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  return (
    <div>
      <button className="addToCart" onClick={() => handleCart(item)}>Add to cart</button>
    </div>
  );
};

export default AddToCart;