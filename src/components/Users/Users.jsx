import { useState } from "react";
import Products from "../Products/Products";
import User from "../User";
import "./Users.scss";

const Users = ({ usersData }) => {
  const [showProducts, setShowProducts] = useState(false);

  const handleChooseProduct = () => {
    setShowProducts(true);
  };

  return (
    <div className="users">
      <div>
        <h1>Users</h1>
      </div>
      <div>
        <table className="users-table">
          <thead>
            <tr>
              <td>User name</td>
              <td>Country</td>
              <td>Product</td>
            </tr>
          </thead>
          <tbody>
            {usersData.length ? (
              usersData.map((user) => (
                <tr key={user?.userName}>
                  <User
                    key={user?.userName}
                    userData={user}
                    handleChooseProduct={handleChooseProduct}
                  />
                </tr>
              ))
            ) : (
              <tr>
                <td style={{ fontWeight: "500" }}>
                  Users not yet updated here
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {showProducts && <Products />}
    </div>
  );
};

export default Users;
