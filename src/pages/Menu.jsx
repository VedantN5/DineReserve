import React from "react";
import "../App.css";

const Menu = () => {
  const menu = {
    Starters: [
      { name: "Spring Rolls", price: 120 },
      { name: "Garlic Bread", price: 100 },
      { name: "Chilli Paneer", price: 150 },
    ],
    "Main Course": [
      { name: "Paneer Butter Masala", price: 240 },
      { name: "Veg Biryani", price: 200 },
      { name: "Butter Naan", price: 40 },
    ],
    Breakfast: [
      { name: "Idli Sambhar", price: 90 },
      { name: "Poha", price: 60 },
      { name: "Aloo Paratha", price: 80 },
    ],
    Drinks: [
      { name: "Cold Coffee", price: 120 },
      { name: "Fresh Lime Soda", price: 70 },
      { name: "Masala Chai", price: 50 },
    ],
    Desserts: [
      { name: "Gulab Jamun", price: 60 },
      { name: "Ice Cream", price: 90 },
      { name: "Rasgulla", price: 70 },
    ],
  };


  const images = ["/a.png", "/b.png", "/c.png", "/d.png", "/e.png"];

  return (
    <div className="menu-page">
      <header className="menu-header">
        <h1>Our Menu</h1>
      </header>

      <div className="menu-images">
        {images.map((url, i) => (
          <img key={i} src={url} alt={`Menu ${i + 1}`} />
        ))}
      </div>

      <div className="menu-categories">
        {Object.entries(menu).map(([category, items]) => (
          <div key={category} className="menu-category">
            <h2>{category}</h2>
            <ul>
              {items.map((item, i) => (
                <li key={i}>
                  <span>{item.name}</span>
                  <span className="price">₹{item.price}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
