import React from "react";
import { useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementQty,
  decrementQty,
} from "../../../redux/slices/CartSlice";

const CartItems = () => {
  const cartItems = useSelector((state) => state.cart.cart);
  const totalQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0);
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.qty * item.price,
    0
  );
  const roundedTotalPrice = Math.ceil(totalPrice);
  const dispatch = useDispatch();

  return (
    <>
      {cartItems.length > 0 && (
        <div className="total-items text-center mt-3">
          <h3>Total Items : {totalQty}</h3>
          <h5 className="mx-3">Total Price : Rs {roundedTotalPrice}</h5>
        </div>
      )}
      {cartItems.length > 0 ? (
        <section>
          <div className="container mt-4">
            <div className="row py-3 g-4">
              {cartItems.map((productsItems, index) => (
                <div
                  key={index}
                  className="cart border py-2 d-flex justify-content-between align-items-center"
                >
                  <img
                    className="img-fluid"
                    style={{ width: "200px" }}
                    src={productsItems.image}
                  />
                  <div className="title">
                    <p>{productsItems.title}</p>
                    <span>Rs: {Math.ceil(productsItems.price)}</span>
                  </div>
                  <div className="delete-btn ">
                    <MdDelete
                      style={{
                        color: "red",
                        fontSize: "25px",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        dispatch(
                          removeFromCart({
                            id: productsItems.id,
                          })
                        );
                      }}
                    />
                  </div>
                  <div className="d-flex align-items-center">
                    <AiOutlinePlusCircle
                      style={{
                        color: "green",
                        fontSize: "20px",
                        cursor: "pointer",
                      }}
                      onClick={() =>
                        dispatch(incrementQty({ id: productsItems.id }))
                      }
                    />
                    <span className="mx-3">{productsItems.qty}</span>
                    <AiOutlineMinusCircle
                      style={{
                        color: "red",
                        fontSize: "20px",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        productsItems.qty > 1 &&
                          dispatch(decrementQty({ id: productsItems.id }));
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <div style={{ height: "90vh" }}>
          <h1 className=" py-5 display-2 d-flex align-items-center justify-content-center">
            Your Cart is Empty
          </h1>
        </div>
      )}
    </>
  );
};

export default CartItems;
