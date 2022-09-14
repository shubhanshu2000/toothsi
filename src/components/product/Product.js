import React from "react";
import { actions } from "../Actions";
import Filter from "./Filter";

const Product = ({ state, dispatch }) => {
  const { products, inputVal, cart, productAccTocategory, productAccToBrand } =
    state;

  function implementFilter() {
    let sortProducts = products;
    if (productAccToBrand.length > 0 && productAccTocategory.length > 0)
      return (sortProducts = productAccToBrand);
    if (productAccTocategory.length > 0)
      return (sortProducts = productAccTocategory);

    if (inputVal) {
      sortProducts = sortProducts.filter((d) =>
        d.title.toLowerCase().includes(inputVal)
      );
    }

    return sortProducts;
  }

  return (
    <>
      <Filter state={state} dispatch={dispatch} />

      {implementFilter().map((d) => {
        return (
          <>
            <div
              key={d.id}
              className="flex items-center justify-between shadow-xl p-2 my-4"
            >
              <img
                src={d.thumbnail}
                alt={d.title}
                className="w-1/6 h-[100px] object-contain"
              />
              <p>{d.title}</p>
              <p>{d.brand}</p>
              <p>{d.stock > 0 ? "In stock" : "Out of stock"}</p>
              <p>${d.price}</p>
              {cart.some((e) => e.id === d.id) ? (
                <button
                  onClick={() =>
                    dispatch({
                      type: actions.REMOVE_FROM_CART,
                      payload: d,
                    })
                  }
                  className="bg-red-400 px-4 py-2 rounded-xl"
                >
                  Remove from Cart
                </button>
              ) : (
                <button
                  onClick={() =>
                    dispatch({
                      type: actions.ADD_TO_CART,
                      payload: {
                        id: d.id,
                        img: d.thumbnail,
                        title: d.title,
                        quantity: 1,
                        price: d.price,
                      },
                    })
                  }
                  className="bg-blue-100 px-4 py-2 rounded-xl"
                >
                  Add to Cart
                </button>
              )}
            </div>
          </>
        );
      })}
    </>
  );
};

export default Product;
