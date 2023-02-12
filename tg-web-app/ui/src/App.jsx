import React from "react";
import "./App.css";
import { Card } from "./components/Card/Card";
import { Cart } from "./components/Cart/Cart";
import { getData } from "./store";

const tgWebApp = window.Telegram.WebApp;

function App() {
  const foods = getData();
  const [cartItems, setCartItems] = React.useState([]);

  React.useEffect(() => {
    tgWebApp.ready();
  }, []);

  const handleProductAdd = (food) => {
    const exist = cartItems.find((f) => f.id === food.id);
    if (exist) {
      setCartItems(
        cartItems.map((f) => {
          return f.id === food.id ? { ...f, quantity: f.quantity + 1 } : f;
        })
      );
    } else setCartItems([...cartItems, { ...food, quantity: 1 }]);
  };

  const handleRemoveProduct = (food) => {
    const exist = cartItems.find((f) => f.id === food.id);

    if (exist.quantity === 1)
      setCartItems(cartItems.filter((f) => f.id !== food.id));
    else {
      setCartItems(
        cartItems.map((f) => {
          return f.id === food.id ? { ...f, quantity: f.quantity - 1 } : f;
        })
      );
    }
  };

  const handleCheckout = () => {
    tgWebApp.MainButton.text = "Pay (:";
    tgWebApp.MainButton.show();
  };

  return (
    <div className="App">
      <h1>Durger king clone</h1>
      <Cart cartItems={cartItems} checkOut={handleCheckout} />
      <div className="card__container">
        {foods.map((food, idx) => (
          <Card
            food={food}
            key={idx}
            addProduct={handleProductAdd}
            removeProduct={handleRemoveProduct}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
