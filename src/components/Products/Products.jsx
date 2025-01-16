import React, { useEffect, useState } from "react";
import "./Products.scss";
import mockProducts from "../../mock/products.json";
import SearchProduct from "../SearchProduct/SearchProduct";

const Products = () => {
  const productsData = mockProducts?.products;
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState(
    productsData.slice(0, (page * 10)) || []
  );
  const pages = Array.from(Array((productsData.length)/10).keys(), key => key+1);
  const hanldePage = (pageNo) => {
    if (pageNo === 1) {
      setPage(pageNo);
      setProducts(productsData.slice(0, (pageNo * 10)));
      return;
    } else {
      setPage(pageNo);
      setProducts(productsData?.slice((pageNo-1) * 10, (pageNo*10)));
    }
  };

  const handleFilteredProducts = (product) => {
    setProducts([product])
  }

  return (
    <div className="products">
      <h3>Available Products</h3>
      <SearchProduct productsData={productsData} setFilteredProducts={handleFilteredProducts} />
      <table>
        <thead>
          <tr>
            <td>no.</td>
            <td>name</td>
            <td>Availability</td>
          </tr>
        </thead>
        <tbody>
          {products?.length ? (
            products.map((product) => {
              const { title, stock, id } = product;
              return (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{title}</td>
                  <td>{stock > 20 ? "Yes" : "No"}</td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td>No Products to show</td>
            </tr>
          )}
        </tbody>
      </table>
      <div>
        {pages?.map((page) => {
          return (
            <button key={page} onClick={() => hanldePage(page)} value={page}>{page}</button>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
