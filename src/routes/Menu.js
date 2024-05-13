import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css"; // CSS 파일을 임포트합니다.

function Menu() {
  return (
    <div className="menu-container">
      <div className="menu">
        <Link to="/scheduler" className="menu-item">
          Scheduler
        </Link>
        <a href="/more_item" className="menu-item">
          more_item
        </a>
      </div>
    </div>
  );
}

export default Menu;
