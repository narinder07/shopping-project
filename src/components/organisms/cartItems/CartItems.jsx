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
  const dispatch = useDispatch();

  return (
    <>
      {cartItems.length > 0 ? (
        <section>
          <div className="container mt-4">
            <div className="row g-4">
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
                    <span>Price :{productsItems.price}</span>
                  </div>
                  <div className="delete-btn ">
                    <MdDelete
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
                      onClick={() =>
                        dispatch(incrementQty({ id: productsItems.id }))
                      }
                    />
                    <span className="mx-3">{productsItems.qty}</span>
                    <AiOutlineMinusCircle
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
        <h1 className=" py-5 display-2 d-flex align-items-center justify-content-center">
          Your Cart is Empty
        </h1>
      )}
    </>
  );
};

export default CartItems;
