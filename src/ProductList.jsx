import { useCartStore } from "./store/cart-store";

const ProductList = ({ products }) => {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div>
      {products?.map((product) => (
        <div className="p-3 m-auto" key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <button className="bg-blue-50 p-2" onClick={() => addToCart(product)}>Add to cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
// import { useCartStore } from "./store/cart-store";
//     const addToCart = useCartStore((state) => state.addToCart);

//   return (
//     <div>
//       {products?.map((product) => (
//         <div key={product.id}>
//           <h3>{product.name}</h3>
//           <p>{product.description}</p>
//               <button onClick={() => addToCart(product)}>
//             Add to cart
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// };
// export default ProductList;
