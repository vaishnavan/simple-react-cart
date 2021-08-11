import React from "react";

function Main({ products, onAdd, cartItem, onRemove }) {
  const totalPrice = cartItem.reduce((a, c) => a + c.price * c.qty, 0);

  return (
    <>
      {products.map((data) => {
        return (
          <div key={data.id}>
            <h1>{data.name}</h1>
            <h3>$ {data.price} </h3>
            <button onClick={() => onAdd(data)}>Add to cart</button>
          </div>
        );
      })}
      {cartItem.map((data) => {
        return (
          <div key={data.id}>
            <h2>{data.name}</h2>
            <button onClick={() => onAdd(data)}>Add</button>
            <p>
              {data.qty} * {data.price}{" "}
            </p>
            <button onClick={() => onRemove(data)}>Remove</button>
          </div>
        );
      })}

      <h2>TOTAL price: {totalPrice}</h2>
    </>
  );
}

export default Main;
