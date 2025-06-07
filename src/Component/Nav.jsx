import { useSelector } from "react-redux";
import Logo from "../assets/images/logo.png";


function Nav({ onShowCart }) {
  const cartItems = useSelector((state) => state.shoppingReducer.cart);
  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  return (
    <nav className="bg-[#171C2A] py-2 fixed top-0 left-0 w-full  shadow-xl z-50">
      <div className="container mx-auto px-4 flex items-center justify-between ">
        <a href="index.html" className="flex items-center justify-center ">
          <img src={Logo} alt="logo" className="max-w-[30px] rounded-full " />
          <span className="text-white font-extrabold text-3xl pl-2">E-shop</span>
        </a>

        <div className="flex items-center gap-4">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              onShowCart(false);
            }}
            className="text-white text-xl font-semibold hover:text-[#00d991] transition duration-200"
          >
            Home
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onShowCart(true);
            }}
            className="flex items-center space-x-2 rounded-full bg-[#00d991] px-6 py-1 font-semibold text-white hover:bg-[#00c982] transition duration-200"
          >
            <i className="text-xl text-black fa-sharp fa-solid fa-bag-shopping"></i>
            <span className="text-xl text-black ">{totalQuantity} </span>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
