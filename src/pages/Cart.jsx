import "./Cart.css";
import { Link } from "react-router-dom";

function Cart({
  cart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
}) {
  const total = cart.reduce(
    (sum, product) =>
      sum + product.price * (product.quantity || 1),
    0
  );

  return (
    <div className="cart-page">
      <h1>Shopping Cart 🛒</h1>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <div className="empty-icon">🛒</div>
          <h2>Your cart is empty</h2>
          <p>Add some products to your cart.</p>
        </div>
      ) : (
        <>
          <div className="cart-total">
            <h2>Total: ৳ {total}</h2>
          </div>

          <div className="cart-container">
            {cart.map((product) => (
              <div className="cart-item" key={product.id}>
                <img
                  src={product.image}
                  alt={product.name}
                />

                <div className="cart-details">
                  <h2>{product.name}</h2>

                  {product.package && (
                    <p className="cart-package">
                      Package: {product.package}
                    </p>
                  )}

                  <p className="cart-price">
                    ৳ {product.price * (product.quantity || 1)}
                  </p>

                  <div className="quantity-control">
                    <button
                      onClick={() => decreaseQuantity(product.id)}
                    >
                      −
                    </button>

                    <span>{product.quantity || 1}</span>

                    <button
                      onClick={() => increaseQuantity(product.id)}
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  className="delete-btn"
                  onClick={() => removeFromCart(product.id)}
                >
                  🗑 Delete
                </button>
              </div>
            ))}
          </div>

          {/* Checkout Button */}
         <Link to="/checkout">
  <button className="checkout-btn">
    🛒 Checkout / Order Now
  </button>
</Link>
        </>
      )}
    </div>
  );
}

export default Cart;