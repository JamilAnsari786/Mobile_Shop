/* eslint-disable no-unused-vars */
import React, { useState, useContext } from "react";
import { iphone_list } from "../../../assets/assets";
import { StoreContext } from "@/components/context/StoreContext";
import toast from "react-hot-toast";
import "./mobiles.css";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../firebase/firebaseConfig.js"; // ✅ Firebase auth

const Mobiles = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const { cartItems, addToCart } = useContext(StoreContext);
  const navigate = useNavigate(); // ✅ Router navigation

  // Toggle sidebar brand filters
  const toggleBrand = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand)
        ? prev.filter((b) => b !== brand)
        : [...prev, brand]
    );
  };

  // Handle Add to Cart with Login Check
  const handleAddToCart = (item) => {
    if (!auth.currentUser) {
      toast.error("⚠ Please login to add items to cart");
      navigate("/login"); // 🔁 Redirect to login
      return;
    }

    addToCart(item);
    toast.success(`${item.name} added to cart ✅`);
  };

  // Get unique brands from list
  const brands = [...new Set(iphone_list.map((item) => item.category))];

  // Filtered list based on brand checkboxes
  const filteredMobiles =
    selectedBrands.length === 0
      ? iphone_list
      : iphone_list.filter((item) => selectedBrands.includes(item.category));

  return (
    <div className="mobiles-container">
      {/* Sidebar for filtering */}
      <aside className={`sidebar ${sidebarOpen ? "open" : "closed"}`}>
        <h2 className="sidebar-title">Filter by Brand</h2>
        {brands.map((brand, index) => (
          <div key={index} className="filter-option">
            <label>
              <input
                type="checkbox"
                checked={selectedBrands.includes(brand)}
                onChange={() => toggleBrand(brand)}
              />
              <span>{brand}</span>
            </label>
          </div>
        ))}
      </aside>

      {/* Main Content Area */}
      <main className="main-content">
        <div className="header">
          <h1>Mobile Products</h1>
        </div>

        <div className="products-grid">
          {filteredMobiles.map((item) => (
            <div key={item.id} className="product-card">
              <img src={item.image} alt={item.name} className="product-image" />
              <div className="product-info">
                <h3>{item.name}</h3>
                <p className="description">{item.description}</p>
                <p className="price">₹{item.price}</p>
                <p className="meta">
                  <strong>Storage:</strong> {item.storageOptions.join(", ")}
                </p>
                <p className="meta">
                  <strong>Colors:</strong> {item.colors.join(", ")}
                </p>
              </div>
              <button
                className="details-button"
                onClick={() => handleAddToCart(item)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Mobiles;
