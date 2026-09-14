import { useState } from "react";
import "./Checkout.css";

function Checkout({ cart }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [deliveryLocation, setDeliveryLocation] = useState("");

  // Product total
  const total = cart.reduce(
    (sum, product) =>
      sum + product.price * (product.quantity || 1),
    0
  );

  // Delivery charge
  const deliveryCharge =
    deliveryLocation === "inside"
      ? 80
      : deliveryLocation === "outside"
      ? 130
      : 0;

  // Final total
  const finalTotal = total + deliveryCharge;

  const handleOrder = (e) => {
    e.preventDefault();

    if (!deliveryLocation) {
      alert("Please select your delivery location.");
      return;
    }

    alert("Your order has been placed successfully! 🎉");
  };

  const handleWhatsAppOrder = () => {
    // Check customer information
    if (!name || !phone || !address) {
      alert("Please fill in your Name, Phone Number and Address.");
      return;
    }

    // Check delivery location
    if (!deliveryLocation) {
      alert("Please select your delivery location.");
      return;
    }

    // Create order details
    const orderDetails = cart
      .map(
        (product) =>
          `${product.name} - ${product.package || ""} - Qty: ${
            product.quantity || 1
          } - ৳${product.price * (product.quantity || 1)}`
      )
      .join("\n");

    // Delivery location text
    const deliveryText =
      deliveryLocation === "inside"
        ? "Inside Dhaka"
        : "Outside Dhaka";

    // Create WhatsApp message
    const message = `🛒 *Barakah Agro Order*

👤 Name: ${name}

📱 Phone: ${phone}

📍 Address: ${address}

🚚 Delivery Location: ${deliveryText}

📦 *Order Details:*
${orderDetails}

💰 Subtotal: ৳${total}

🚚 Delivery Charge: ৳${deliveryCharge}

💵 *Total: ৳${finalTotal}*

Please confirm my order.`;

    // Your WhatsApp number
    const whatsappNumber = "8801786239185";

    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    // Open WhatsApp
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="checkout-page">
      <h1>Checkout 📦</h1>

      <div className="checkout-container">

        {/* Order Summary */}
        <div className="order-summary">
          <h2>Your Order</h2>

          {cart.map((product) => (
            <div className="checkout-product" key={product.id}>
              <img
                src={product.image}
                alt={product.name}
              />

              <div>
                <h3>{product.name}</h3>

                {product.package && (
                  <p>Package: {product.package}</p>
                )}

                <p>
                  Quantity: {product.quantity || 1}
                </p>

                <strong>
                  ৳ {product.price * (product.quantity || 1)}
                </strong>
              </div>
            </div>
          ))}

          {/* Price Summary */}
          <div className="price-row">
            <span>Subtotal</span>
            <span>৳ {total}</span>
          </div>

          <div className="price-row">
            <span>Delivery Charge</span>
            <span>
              {deliveryLocation
                ? `৳ ${deliveryCharge}`
                : "Select location"}
            </span>
          </div>

          <div className="total-row">
            <span>Total Amount</span>
            <span>৳ {finalTotal}</span>
          </div>
        </div>

        {/* Customer Information */}
        <div className="checkout-form">
          <h2>Customer Information</h2>

          <form onSubmit={handleOrder}>

            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <input
              type="tel"
              placeholder="Mobile Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />

            <textarea
              placeholder="Delivery Address"
              rows="4"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            ></textarea>

            {/* Delivery Location */}
            <div className="delivery-section">
              <h3>Delivery Location</h3>

              <label>
                <input
                  type="radio"
                  name="delivery"
                  value="inside"
                  checked={deliveryLocation === "inside"}
                  onChange={(e) =>
                    setDeliveryLocation(e.target.value)
                  }
                />
                Inside Dhaka — ৳80
              </label>

              <label>
                <input
                  type="radio"
                  name="delivery"
                  value="outside"
                  checked={deliveryLocation === "outside"}
                  onChange={(e) =>
                    setDeliveryLocation(e.target.value)
                  }
                />
                Outside Dhaka — ৳130
              </label>
            </div>

            <button type="submit">
              Place Order
            </button>

            <button
              type="button"
              onClick={handleWhatsAppOrder}
            >
              Order via WhatsApp 📲
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}

export default Checkout;