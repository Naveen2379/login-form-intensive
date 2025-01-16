import React, { useState } from "react";

const SearchProduct = ({productsData, setFilteredProducts}) => {
  // const [inputProductName, setInputProductName] = useState("");
  const [showFilteredProducts, setShowFilteredProducts] = useState([])
  const debounce = (func) => {
    let timer;
    return function returedFunc(...args) {
      const context = this;

      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(context, args);
      }, 1000);
    };
  };

  const handleInputChange = (inputValue) => {
    const filteredProducts = productsData.filter(({title}) => {
        return title.toLowerCase()?.includes(inputValue.toLowerCase())
    })
    setShowFilteredProducts(filteredProducts || [])
  };

  // handleInputProductName is a function --> so that it will be invoked with current e.target.value 
  // means, debunce(handleInputChange) should return a function(returedFunc) 
  // returnedFunc will be assigned to handleInputProductName & invokes when user enter any char in input search box
  const handleInputProductName = debounce(handleInputChange);

  const handleProduct= (product) => {
    setFilteredProducts(product)
  }
  return (
    <div className="search-products">
      <input
        type="text"
        // value={inputProductName}
        onChange={(e) => handleInputProductName(e.target.value)}
      />
      <div className="filtered-products">
        {showFilteredProducts.length ? <ul>{showFilteredProducts.map((p) => {
            return <li onClick={() => handleProduct(p)}>{p.title}</li>
        })}</ul> : ''}
      </div>
    </div>
  );
}

export default SearchProduct;
