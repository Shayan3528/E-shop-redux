import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";

function Products() {
  const products = useSelector((state) => state.product);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-2">
      {products.map((item) => (
        <ProductItem item={item} key={item.id} />
      ))}
    </div>
  );
}

export default Products;
