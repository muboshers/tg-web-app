import { Button } from "../Button/Button";
import "./Cart.css";

export const Cart = ({ cartItems, checkOut }) => {
  const totalPrice = cartItems.reduce(
    (amount, food) => amount + food.price * food.quantity,
    0
  );
  return (
    <div className="cart__container">
      <div>
        {cartItems.length === 0 && (
          <h4 className="cart__warn">Do'nt have food 😆</h4>
        )}
        <span className="cart__price">
          Total Price is {totalPrice.toFixed(2)}
        </span>
      </div>

      <Button
        onClick={checkOut}
        title={cartItems.length === 0 ? "Order !" : "Checkout"}
        type="checkout"
        disabled={cartItems.length === 0}
      />
    </div>
  );
};
