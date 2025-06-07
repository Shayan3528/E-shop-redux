import { Trash2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import {
  restoreFullQuantity,
  restoreProductQuantity,
  updateProductQuantity,
} from "../../Redux/AddingProduct/action";
import {
  decrement,
  deleteItem,
  increment,
} from "../../Redux/ShoppingProduct/actions";

export default function ShoppingCart() {
  const cartItems = useSelector((state) => state.shoppingReducer.cart);
  const products = useSelector((state) => state.product);
  const dispatch = useDispatch();

  return (
    <div className="md:col-span-2 space-y-4 ml-10">
      <h2 className="text-xl font-bold mb-10">Shopping Cart</h2>
      {cartItems.map((cart) => {
        return (
          <div
            key={cart.id}
            className="border border-gray-300 rounded-lg p-4 flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <img
                src={cart.imageUrl}
                alt="product"
                className="w-20 h-20 object-cover rounded"
              />
              <div>
                <h3 className="font-semibold">{cart.name}</h3>
                <p className="text-sm text-gray-500">Men's clothing</p>
                <p className="text-gray-700 font-medium">BDT {cart.price}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => {
                  const product = products.find(
                    (product) => product.id === cart.id
                  );
                  if (product?.quantity > 0) {
                    dispatch(increment(cart.id));
                    dispatch(updateProductQuantity(cart.id));
                  } else {
                    alert("Stock limit reached");
                  }
                }}
                className="text-lg font-bold"
              >
                +
              </button>
              <span className="font-semibold text-lg">{cart.quantity}</span>
              <button
                onClick={() => {
                  {
                    dispatch(decrement(cart.id));

                    dispatch(restoreProductQuantity(cart.id));
                  }
                }}
                className="text-lg font-bold"
              >
                −
              </button>
              <span className="font-bold text-gray-800">
                BDT {cart.quantity * cart.price}
              </span>
              <button
                onClick={() => {
                  dispatch(restoreFullQuantity(cart.id, cart.quantity));
                  dispatch(deleteItem(cart.id));
                }}
                className="text-red-500 hover:text-red-700"
              >
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
