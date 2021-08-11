import "./styles.css";
import { data } from "./data";
import Main from "./Main";
import { useState } from "react";

export default function App() {
  const { products } = data;
  const [cartItem, setCartItem] = useState([]);
  // console.log(products);

  const onAdd = (prod) => {
    const exist = cartItem.find((x) => x.id === prod.id);
    if (exist) {
      setCartItem(
        cartItem.map((x) =>
          x.id === prod.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItem([...cartItem, { ...prod, qty: 1 }]);
    }
  };

  const onRemove = (prod) => {
    const exist = cartItem.find((x) => x.id === prod.id);
    if (exist.qty === 1) {
      setCartItem(cartItem.filter((data) => data.id !== prod.id));
    } else {
      setCartItem(
        cartItem.map((x) =>
          x.id === prod.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  console.log(cartItem);
  return (
    <div className="App">
      <Main
        onAdd={onAdd}
        onRemove={onRemove}
        products={products}
        cartItem={cartItem}
      />
    </div>
  );
}
