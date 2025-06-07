import Bill from "./Bill";
import ShoppingCart from "./ShoppingCart";
const Cart = () => {
  return (
    <div className="min-h-screen bg-white px-6 py-8 mt-10">
      {/* Header */}

      {/* Shopping Cart */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Cart Items */}
        <ShoppingCart />

        {/* Bill Details */}
        <Bill />
      </div>
    </div>
  );
};

export default Cart;
