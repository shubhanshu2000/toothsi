import { createContext, useEffect, useReducer } from "react";
import { actions } from "../Actions";
import { initialState, reducer } from "../Reducer/reducer";

const cartAndDataContext = createContext();

export function CartAndDataProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const fetchProducts = async () => {
    const url = "https://dummyjson.com/products";
    const fetching = await fetch(url);
    const res = await fetching.json();
    dispatch({ type: actions.FETCHED_PRODUCTS, payload: res.products });
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <cartAndDataContext.Provider value={{ state, dispatch }}>
      {children}
    </cartAndDataContext.Provider>
  );
}

export default cartAndDataContext;
