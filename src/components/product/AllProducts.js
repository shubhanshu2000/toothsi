import React, { useContext } from "react";
import cartAndDataContext from "../context/context";
import Product from "./Product";

const AllProducts = () => {
  const { state, dispatch } = useContext(cartAndDataContext);

  return (
    <>
      <Product state={state} dispatch={dispatch} />
    </>
  );
};

export default AllProducts;
