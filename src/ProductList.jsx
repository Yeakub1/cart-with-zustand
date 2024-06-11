const ProductList = ({ products, setCart }) => {
  return (
    <div>
      {products?.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <button onClick={() => setCart((cart) => [...cart, product])}>
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
};
export default ProductList;
