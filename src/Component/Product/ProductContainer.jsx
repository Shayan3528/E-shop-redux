import ProductInputForm from "./ProductInputForm";
import Products from "./Products";

function ProductContainer() {
  return (
    <div className="py-16">
      <div className="mx-auto w-full top-20  grid gap-8 px-2 sm:max-w-sm md:max-w-md lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl 2xl:px-8 lg:grid-cols-[1fr_300px] xl:grid-cols-[1fr_400px]">
        <div className="mt-0">
          <Products />
        </div>

        <div className=" sticky  h-fit overflow-y-auto  top-20 mt-0">
          <ProductInputForm />
        </div>
      </div>
    </div>
  );
}

export default ProductContainer;

ProductContainer.jsx;
