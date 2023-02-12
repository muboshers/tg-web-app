import React from "react";
import { Button } from "../Button/Button";
import "./Card.css";

export const Card = ({ food, addProduct, removeProduct }) => {
  const [count, setCount] = React.useState(0);

  const badgeRef = React.useRef();

  const currencyFormat = new Intl.NumberFormat("en-Us", {
    style: "currency",
    currency: "USD",
  });

  const handleIncrement = () => {
    addProduct(food);
    setCount((prev) => prev + 1);
  };

  const handleDecrement = () => {
    removeProduct(food);
    setCount((prev) => prev - 1);
  };

  React.useEffect(() => {
    badgeRef.current.classList.add("animation-badge");
    const classRemoveIndecator = setTimeout(() => {
      badgeRef.current.classList.remove("animation-badge");
    }, 500);
    return () => clearTimeout(classRemoveIndecator);
  }, [count]);

  return (
    <div className="card">
      <span
        ref={badgeRef}
        className={`card__badge ${count === 0 && "card__badge-hidden"}`}
      >
        {count}
      </span>

      <div className="image__container">
        <img src={food.Image} alt={food.title} />
      </div>

      <h4 className="card__title">
        {food.title}{" "}
        <span className="card__price">{currencyFormat.format(food.price)}</span>
      </h4>

      <div className="btn__container">
        <Button title="+" type="add" onClick={handleIncrement} />
        {count > 0 && (
          <Button type="remove" title="-" onClick={handleDecrement} />
        )}
      </div>
    </div>
  );
};
