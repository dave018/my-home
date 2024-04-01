import React from "react";
import "./Menu.css"; // CSS 파일을 임포트합니다.

function Menu() {
  return (
    <div className="menu-container">
      <div className="menu">
        <a href="/scheduler" className="menu-item">
          Scheduler
        </a>
        <a href="/more_item" className="menu-item">
          more_item
        </a>
      </div>
    </div>
  );
}

export default Menu;
