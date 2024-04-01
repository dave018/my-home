import minimalWelcomePage from "../img/minimal_welcome_page.webp";
import naturalWelcomePage from "../img/natural_image.jpg";

import "./Home.css";
import Menu from "./Menu.js";

function Home() {
  return (
    <div className="home-background">
      <Menu />
      <h1 className="home-title">Welcome to My Website!</h1>
    </div>
  );
}

export default Home;
