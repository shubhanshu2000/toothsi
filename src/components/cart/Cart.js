import React, { useContext, useEffect, useState } from "react";
import { actions } from "../Actions";
import cartAndDataContext from "../context/context";
import { Link } from "react-router-dom";

const Cart = () => {
  const { state, dispatch } = useContext(cartAndDataContext);
  const [total, setTotal] = useState(0);

  function changeQty(id, quantity) {
    dispatch({ type: actions.CHANGE_QTY, payload: { id, quantity } });
  }
  useEffect(() => {
    setTotal(
      state.cart.reduce(
        (acc, curr) => acc + Number(curr.price) * curr.quantity,
        0
      )
    );
  }, [state.cart]);
  return (
    <>
      <div className="flex p-4">
        <div className="w-3/4 mr-8">
          {state.cart.map((d) => {
            return (
              <>
                <div
                  key={d.id}
                  className="flex items-center justify-between shadow-xl p-2 my-4"
                >
                  <img
                    src={d.img}
                    alt={d.title}
                    className="w-1/6 h-[100px] object-contain"
                  />
                  <p>{d.title}</p>
                  <p>${d.price}</p>
                  <div className="flex justify-between items-center w-[4rem] border-2  rounded-3xl px-2 py-1">
                    <button onClick={() => changeQty(d.id, d.quantity - 1)}>
                      -
                    </button>
                    <p>{d.quantity}</p>
                    <button onClick={() => changeQty(d.id, d.quantity + 1)}>
                      +
                    </button>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <div className="w-1/4 h-full p-2 border-2 border-gray-500">
          <h1 className="text-2xl">Cart Total </h1>
          <div className="flex my-4 justify-between">
            <p>Sub Total</p>
            <p>$ {total}</p>
          </div>
          <hr />
          <div className="flex my-4 justify-between">
            <p className="text-lg font-medium">Total</p>
            <p>$ {total}</p>
          </div>
          <Link to="/checkout">
            <button className="px-4 py-2 rounded-3xl bg-blue-400 w-full">
              Proceed to checkout
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Cart;
