import { useState } from "react";
import ProductList from "./ProductList";
import { PRODUCT } from "./Products";
import Cart from "./Cart";

const App = () => {
  const [cart, setCart]= useState([])
  return (
    <div >
      <h1>Welcome to mobile store</h1>
      <Cart setCart={setCart} cart={cart}/>
      <ProductList products={PRODUCT} setCart={setCart} />
    </div>
  );
};
export default App;