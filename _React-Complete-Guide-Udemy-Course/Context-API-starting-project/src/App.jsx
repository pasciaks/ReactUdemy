// import { useState } from "react";

import Header from "./components/Header.jsx";
import Shop from "./components/Shop.jsx";
import Product from "./components/Product.jsx";
import { DUMMY_PRODUCTS } from "./dummy-products.js";

// import { CartContext } from "./store/shopping-cart-context.jsx";
import { CartContextProvider } from "./store/shopping-cart-context.jsx";
import Cart from "./components/Cart.jsx";

function App() {
  return (
    <>
      <CartContextProvider>
        <Header
        // cart={shoppingCart}
        // onUpdateCartItemQuantity={handleUpdateCartItemQuantity}
        />
        <Shop>
          {DUMMY_PRODUCTS.map((product) => (
            <li key={product.id}>
              <Product {...product} /* onAddToCart={handleAddItemToCart}*/ />
            </li>
          ))}
        </Shop>
      </CartContextProvider>
    </>
  );
}

export default App;
