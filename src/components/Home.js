import React from "react";
import "./Home.css";

function Home() {
  return (
    <div class="wrapper">
      <div class="multi_color_border"></div>
      <div class="top_nav">
        <div class="left">
          <div class="logo">
            <p>
              <span>Game</span>Store
            </p>
          </div>
          <div class="search_bar">
            <input type="text" placeholder="Search" />
          </div>
        </div>
        <div class="right">
          <ul>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">LogIn</a>
            </li>
            <li>
              <a href="#">SignUp</a>
            </li>
            <li>
              <a href="#">Cart</a>
            </li>
          </ul>
        </div>
      </div>
      <nav className="navbar sticky-top bg-light">
        <div class="bottom_nav">
          <ul>
            <li>
              <a href="#">PC</a>
            </li>
            <li>
              <a href="#">PlayStation</a>
            </li>
            <li>
              <a href="#">Xbox</a>
            </li>
            <li>
              <a href="#">Nintendo</a>
            </li>
            <li>
              <a href="#">Sega</a>
            </li>
            <li>
              <a href="#">Mobile</a>
            </li>
            <li>
              <a href="#">VR</a>
            </li>
          </ul>
        </div>
      </nav>

      <div class="banner">
        <img
          src="https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/hero/mwii/MWII-000-ARTREVEAL-TOUT.jpg"
          alt="banner_img"
        />
      </div>
    </div>
  );
}
export default Home;
