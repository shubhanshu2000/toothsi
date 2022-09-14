export const initialState = {
  optCategory: [],
  optBrand: [],
  productAccToBrand: [],
  optCategoryValue: "",
  optBrandValue: "",
  inputVal: "",
  productAccTocategory: [],
  products: [],
  cart: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "FETCHED_PRODUCTS":
      return { ...state, products: action.payload };
    case "ADD_TO_CART":
      return { ...state, cart: [{ ...action.payload }, ...state.cart] };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((r) => r.id !== action.payload.id),
      };
    case "CHANGE_QTY":
      return {
        ...state,
        cart: state.cart.filter((q) =>
          q.id === action.payload.id
            ? (q.quantity = action.payload.quantity)
            : q.quantity
        ),
      };
    case "OPT_CATEGORY":
      return { ...state, optCategory: action.payload };
    case "OPT_CATEGORY_VALUE":
      return { ...state, optCategoryValue: action.payload };
    case "OPT_BRAND_VALUE":
      return { ...state, optBrandValue: action.payload };
    case "PRODUCT_ACC_TO_CATEGORY":
      return { ...state, productAccTocategory: action.payload };
    case "OPT_BRAND":
      return { ...state, optBrand: action.payload };
    case "PRODUCT_ACC_TO_BRAND":
      return { ...state, productAccToBrand: action.payload };
    case "INPUT_VALUE":
      return { ...state, inputVal: action.payload };
    default:
      break;
  }
};
