import { useContext } from "react";
import { CardContext } from "../config/context/CartContext";

export default function Cart() {
    const { cart} = useContext(CardContext)
  
  return (
    <>
    <div
      className="mt-4 font-semibold justify-center items-center">
  Items in cart: {cart.length}
</div>
  
      {/* {Cart.map((items) => {
        <div key={items.id}>
          <h2>{items.name}</h2>
          <p>Price: {item.price}</p>
          <p>Quantity:{items.quantity}</p>
        </div>;
      })} */}
    </>
  );
}
