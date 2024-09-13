import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/footer";
import Section2 from "./Section2";
import Section3 from "./Section3";
function Home() {
  return (
    <>

<header class='header'>
<nav className="navbar ">
        <div className="container">
          <h1 className="logo lg-heading  text-light">WT</h1>
          <ul className="nav-items">
            <l1 className="nav-item">
              <Link to={"/"}>Home</Link>
            </l1>
            <l1 className="nav-item">
              <Link to={"/About"}>About</Link>
            </l1>
            <l1 className="nav-item">
              <Link to={"/Contact"}>Contact</Link>
            </l1>
          </ul>
        </div>
      </nav>
  
        <div class="header-content">
            <h1 class='lg-heading text-light main-heading'>travel the world</h1>
            <p class='text-light'>travel the world, experience the greateness, it's the best gift given by nature</p>
            <a href="#" class='btn btn-primary text-red md-heading'>Explore Places</a>
        </div>
    </header>

<Section2/>
<Section3/>

<Footer/>
</>
  );
}

export default Home;