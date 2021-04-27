import React, { useEffect, useState } from "react";
import { handleFetchUserOrders } from "../firebase/order";
import { Table } from "reactstrap";
import './OrdersHistory.css'
const OrdersHistory = ({ user }) => {
  const [orders, setOrders] = useState([]);

  useEffect(async () => {
    if (user.currentUser) {
      const data = await handleFetchUserOrders(user.currentUser.id);
      setOrders(data);
    }
  }, [orders]);

  const renderTableData = () => {
    return orders.map((order) => {
      const { date } = order;
      return (
        <tr>
          <td>
            <ul className="list-unstyled">
              {order.cart.map((item) => {
                const { productName, quantity } = item;
                return (
                  <li>
                    {productName} × {quantity}{" "}
                  </li>
                );
              })}
            </ul>
          </td>

          <td>
            $
            {order.cart.reduce((prev, item) => {
              return prev + item.quantity * item.productPrice;
            }, 0)}
          </td>

          <td>{date}</td>
        </tr>
      );
    });
  };
  return (
    <div className="mt-5 orders_history pt-5">
      {user.currentUser && orders && orders.length ? (
        <div className="container">
          <div className="d-flex justify-content-between align-items-center my-4">
            <h3
              style={{ color: "#24AEB1" }}
              className="mb-4 w-25 mx-auto text-center"
            >
              ALL orders
            </h3>
          </div>
          <Table className="text-center">
            <thead>
              <tr>
                <th>order</th>
                <th>order cost</th>
                <th>order date</th>
              </tr>
            </thead>
            <tbody>{renderTableData()}</tbody>
          </Table>
        </div>
      ) :null }

    </div>
  );
};

export default OrdersHistory;
