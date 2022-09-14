import { useEffect } from "react";
import { actions } from "../Actions";

const Filter = ({ state, dispatch }) => {
  const {
    products,
    optCategory,
    optBrandValue,
    optBrand,
    optCategoryValue,
    inputVal,
  } = state;

  const applyDropDownFilter = (arr = []) => {
    const categoryArr = [];
    arr.map(({ category }) => {
      categoryArr.push(category);
      return category;
    });
    let newCategoryArr = new Set(categoryArr);
    dispatch({ type: actions.OPT_CATEGORY, payload: [...newCategoryArr] });

    const brandArr = [];
    arr.map((d) => {
      if (d.category === optCategoryValue) {
        brandArr.push(d.brand);
      }
      return d.brand;
    });
    let newBrandArr = new Set(brandArr);
    dispatch({ type: actions.OPT_BRAND, payload: [...newBrandArr] });
  };

  function findAccToCat(category) {
    let prodAccToCat = [];
    let prodLen = products.length;
    for (let i = 0; i < prodLen; i++) {
      if (products[i].category === category) {
        prodAccToCat.push(products[i]);
      }
    }
    dispatch({ type: actions.PRODUCT_ACC_TO_CATEGORY, payload: prodAccToCat });
    return prodAccToCat;
  }

  function findAccToBrand(brand, category) {
    let prodAccToBrand = [];
    let prodLen = products.length;
    for (let i = 0; i < prodLen; i++) {
      if (products[i].brand === brand && products[i].category === category) {
        prodAccToBrand.push(products[i]);
      }
    }
    dispatch({
      type: actions.PRODUCT_ACC_TO_BRAND,
      payload: prodAccToBrand,
    });
    return prodAccToBrand;
  }

  function handleSelectChangeCategory(e) {
    const { value } = e.target;
    dispatch({ type: actions.OPT_CATEGORY_VALUE, payload: value });
  }
  function handleSelectChangeBrand(e) {
    const { value } = e.target;
    dispatch({ type: actions.OPT_BRAND_VALUE, payload: value });
  }

  useEffect(() => {
    applyDropDownFilter(products);
    findAccToCat(optCategoryValue);
    findAccToBrand(optBrandValue, optCategoryValue);
  }, [products, optCategoryValue, optBrandValue]);

  return (
    <>
      <div className="flex justify-between m-2">
        <div className="w-11/12">
          <select onClick={handleSelectChangeCategory}>
            <option value="Category">Category</option>
            {optCategory?.map((category) => {
              return (
                <>
                  <option key={category} value={category}>
                    {category}
                  </option>
                </>
              );
            })}
          </select>
          <select onClick={handleSelectChangeBrand}>
            <option value="Brand">Brand</option>
            {optBrand?.map((brand) => {
              return (
                <>
                  <option key={brand} value={brand}>
                    {brand}
                  </option>
                </>
              );
            })}
          </select>
        </div>
        <div className="w-1/5 flex justify-between items-center">
          <label htmlFor="search">Search: </label>
          <input
            type="text"
            className="bg-gray-100 px-2"
            value={inputVal}
            placeholder="Title"
            onChange={(e) =>
              dispatch({ type: actions.INPUT_VALUE, payload: e.target.value })
            }
          />
        </div>
      </div>
    </>
  );
};

export default Filter;
