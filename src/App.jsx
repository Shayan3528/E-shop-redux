import { useState } from "react";
import { Provider } from "react-redux";
import Cart from "./Component/Cart/Cart";
import Nav from "./Component/Nav";
import ProductContainer from "./Component/Product/ProductContainer";
import store from "./Redux/store";

function App() {
  const [showCart, setShowCart] = useState(false);

  function handleShowCart(clicked) {
    if (clicked) {
      setShowCart(!showCart);
    } else {
      setShowCart(false);
    }
  }

  return (
    <Provider store={store}>
      <div>
        <Nav onShowCart={handleShowCart} />

        {showCart ? <Cart /> : <ProductContainer />}
      </div>
    </Provider>
  );
}

export default App;
