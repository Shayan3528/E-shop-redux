import { useSelector } from "react-redux";

export default function Bill() {
  const cartItems = useSelector((state) => state.shoppingReducer.cart);

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="border border-gray-300  rounded-lg p-6 bg-white shadow-sm  mr-10 mt-17">
      <h2 className="text-lg font-bold mb-4">Bill Details</h2>
      <div className="space-y-2 text-sm text-gray-700">
        <div className="flex justify-between">
          <span>Sub Total</span>
          <span>BDT {subtotal}</span>
        </div>
        <div className="flex justify-between">
          <span>Discount</span>
          <span>BDT 0</span>
        </div>
        <div className="flex justify-between">
          <span>VAT</span>
          <span>BDT 0</span>
        </div>
        <div className="border-t pt-2 mt-2 flex justify-between font-semibold text-black">
          <span>TOTAL</span>
          <span>BDT {subtotal}</span>
        </div>
      </div>
      <button className="w-full mt-4 bg-[#0f172a] text-white py-2 rounded hover:bg-[#1e293b] transition">
        PLACE ORDER
      </button>
    </div>
  );
}
