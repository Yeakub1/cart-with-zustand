import { useCartStore } from "./store/cart-store";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCartStore((state) => ({
    cart: state.cart,
    removeFromCart: state.removeFromCart,
    clearCart: state.clearCart,
  }));
  return (
    <div className="">
      <h1 className="text-red-500">Cart</h1>
      {cart.map((product) => (
        <div key={product.id}>
          <span>{product.name}</span>
          <button onClick={() => removeFromCart(product.id)}>Remove</button>
        </div>
      ))}
      {cart?.length > 0 && <button onClick={clearCart}>Clear Cart</button>}
    </div>
  );
};
export default Cart;
