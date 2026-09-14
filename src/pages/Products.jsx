import React, { useState } from "react";
import "./Products.css";

function Products({ addToCart }) {
  const products = [
    {
      id: 1,
      name: "সরিষার তেল",
      description: "কাঠের ঘানিতে ভাঙ্গা খাঁটি সরিষার তেল",
      price: 260,
      image: "/product_one_oil.png",
      image: "/sorisa5liter.png",
      packages: [
  {
    label: "১ লিটার",
    price: 260,
  },
  {
    label: "২ লিটার",
    price: 520,
  },
  {
    label: "৩ লিটার",
    price: 780,
  },
  {
    label: "৪ লিটার",
    price: 1040,
  },
  {
    label: "৫ লিটার",
    price: 1300,
  },
],
    },

    {
      id: 2,
      name: "শুকনো সাজনা পাতা",
      image: "/sajna-pata.jpeg",
      packages: [
        {
          label: "২৫০ গ্রাম ~ ১ প্যাকেট",
          oldPrice: 375,
          price: 375,
        },
        {
          label: "৫০০ গ্রাম ~ ২ প্যাকেট",
          oldPrice: 750,
          price: 620,
          discount: "Save ৳130",
        },
        {
          label: "১ কেজি ~ ৪ প্যাকেট",
          oldPrice: 1500,
          price: 1150,
          discount: "Save ৳350",
        },
      ],
    },

    {
      id: 3,
      name: "শুকনো পাট পাতা",
      image: "/patpataupdate.jpeg",
      packages: [
        {
          label: "২৫০ গ্রাম ~ ১ প্যাকেট",
          oldPrice: 300,
          price: 300,
        },
        {
          label: "৫০০ গ্রাম ~ ২ প্যাকেট",
          oldPrice: 600,
          price: 570,
          discount: "Save ৳30",
        },
        {
          label: "১ কেজি ~ ৪ প্যাকেট",
          oldPrice: 1200,
          price: 1080,
          discount: "Save ৳120",
        },
      ],
    },
  ];

  const [selectedPackages, setSelectedPackages] = useState({});
  const [addedProduct, setAddedProduct] = useState(null);

  const handlePackageChange = (productId, packageIndex) => {
    setSelectedPackages({
      ...selectedPackages,
      [productId]: packageIndex,
    });
  };

  const handleAddToCart = (product) => {
    const selectedIndex = selectedPackages[product.id] || 0;
    const selectedPackage = product.packages[selectedIndex];

    const cartProduct = {
      id: `${product.id}-${selectedIndex}`,
      name: product.name,
      image: product.image,
      package: selectedPackage.label,
      price: selectedPackage.price,
    };

    addToCart(cartProduct);
    setAddedProduct(cartProduct.id);

setTimeout(() => {
  setAddedProduct(null);
}, 1500);
  };

  return (
    <div className="products-page">
      <h1>Our Products</h1>

      <p>Welcome to Barakah Agro</p>

      <div className="products-container">
        {products.map((product) => {
          const selectedIndex = selectedPackages[product.id] || 0;
          const selectedPackage = product.packages[selectedIndex];

          return (
            <div className="product-card" key={product.id}>
              <img
                src={product.image}
                alt={product.name}
              />

              <h2>{product.name}</h2>

              {product.description && (
                <p>{product.description}</p>
              )}

              <select
                value={selectedIndex}
                onChange={(e) =>
                  handlePackageChange(
                    product.id,
                    Number(e.target.value)
                  )
                }
              >
                {product.packages.map((pkg, index) => (
                  <option key={index} value={index}>
                    {pkg.label}
                  </option>
                ))}
              </select>

              <div className="price">
                {selectedPackage.oldPrice &&
                  selectedPackage.oldPrice !== selectedPackage.price && (
                    <span className="old-price">
                      ৳ {selectedPackage.oldPrice}
                    </span>
                  )}

                <span>
                  ৳ {selectedPackage.price}
                </span>
              </div>

              {selectedPackage.discount && (
                <p className="discount">
                  🔥 {selectedPackage.discount}
                </p>
              )}

              <button
  className={addedProduct === `${product.id}-${selectedIndex}` ? "added-btn" : ""}
  onClick={() => handleAddToCart(product)}
>
  {addedProduct === `${product.id}-${selectedIndex}`
    ? "✓ Added to Cart"
    : "Add to Cart"}
</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Products;