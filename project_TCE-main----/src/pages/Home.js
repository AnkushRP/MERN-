import React, { useEffect, useState } from "react";
import Layout from "./../components/Layout/Layout";
import { Link } from "react-router-dom";
import Banner from "../images/banner.jpeg";
import "../styles/HomeStyles.css";

const Home = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("/api/menu")
      .then((res) => res.json())
      .then((data) => setMenu(data))
      .catch((err) => console.error("Failed to fetch menu:", err));
  }, []);

  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="headerContainer">
          <h1>Food Website</h1>
          <p>Best Food In India</p>
          <Link to="/menu">
            <button>ORDER NOW</button>
          </Link>
        </div>

        {/* Dynamic Menu Display */}
        <div className="menuList">
          {menu.map((item) => (
            <div key={item.id} className="menuItem">
              <h3>{item.name}</h3>
              <p>Price: ₹{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
