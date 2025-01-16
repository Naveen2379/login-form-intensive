import React, { useState } from "react";

const User = ({ userData, handleChooseProduct }) => {
  const { userName, country } = userData;

  return (
    <>
      <td>{userName}</td>
      <td>{country}</td>
      <td>
        <button onClick={() => handleChooseProduct()}>Choose Product</button>
      </td>
    </>
  );
};

export default User;
