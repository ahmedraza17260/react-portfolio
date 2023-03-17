import React from "react";
import "../App.css";
// import DarkModeToggle from "./DarkModeToggle";

const Navbar = () => {
  const list = document.querySelectorAll(".list");

  function activeLink() {
    list.forEach((item) => item.classList.remove("active"));
    this.classList.add("active");
  }
  list.forEach((item) => item.addEventListener("click", activeLink));

  return (
    <div id="" className="navigation">
      <ul id="" className="nav">
        <li className=" list">
          <a className="" href="#home">
            <span class="icon">
              <ion-icon name="home-outline"></ion-icon>
            </span>
            <span class="text"> Home </span>
          </a>
        </li>
        <li class="list">
          <a className="" href="#about">
            <span class="icon">
              <ion-icon name="person-outline"></ion-icon>
            </span>
            <span class="text"> About </span>
          </a>
        </li>
        <li class="list">
          <a className="" href="#resume">
            <span class="icon">
              <ion-icon name="book-outline"></ion-icon>
            </span>
            <span class="text"> Education </span>
          </a>
        </li>
//         <li class="list">
//           <a className="" href="#portfolio">
//             <span class="icon">
//               <ion-icon name="code-working-outline"></ion-icon>
//             </span>
//             <span class="text"> Works </span>
//           </a>
//         </li>
        <li class="list">
          <a className="" href="#contact">
            <span class="icon">
              <ion-icon name="call-outline"></ion-icon>
            </span>
            <span class="text"> Contact </span>
          </a>
        </li>
        {/* <li><DarkModeToggle /></li> */}
        {/* <div className="indicator"></div> */}
      </ul>
    </div>
  );
};

export default Navbar;

/* <nav id=""> */
/* <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
          Hide navigation
        </a> */
/* </nav> */
