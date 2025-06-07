import { useDispatch } from "react-redux";
import { updateProductQuantity } from "../../Redux/AddingProduct/action";
import { addToCart } from "../../Redux/ShoppingProduct/actions";

function ProductItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="font-sans">
      <div className="flex max-w-[350px] flex-col justify-between overflow-hidden rounded-md border border-gray-300 shadow-xl">
        <img
          className="mx-auto h-full w-full object-cover p-4"
          src={item.imageUrl}
          alt="product"
        />
        <div className="p-4 space-y-2">
          <h4 className="font-semibold">{item.name}</h4>
          <p className="text-sm text-gray-600">{item.category}</p>
          <div className="flex items-center justify-between pb-2">
            <p className="font-bold">
              BDT <span className="lws-price">{item.price}</span>
            </p>
            <p className="font-semibold">
              QTY <span className="lws-quantity">{item.quantity}</span>
            </p>
          </div>
          <button
            onClick={() => {
              dispatch(updateProductQuantity(item.id));
              dispatch(addToCart(item));
            }}
            className="mt-4 block w-full rounded-md bg-[#171C2A] px-4 py-2 text-white hover:bg-[#171C2Acc] active:bg-[#171C2A] disabled:bg-slate-500"
            disabled={item.quantity === 0}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
