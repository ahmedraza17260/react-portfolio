import React, { Component } from "react";
// import DarkModeToggle from "./DarkModeToggle";

class Header extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var occupation = this.props.data.occupation;
      var description = this.props.data.description;
      // var city = this.props.data.address.city;
      var networks = this.props.data.social.map(function (network) {
        return (
          <li key={network.name}>
            <a rel="noopener noreferrer" target="_blank" href={network.url}>
              <i className={network.className}></i>
            </a>
          </li>
        );
      });
    }

    return (
      <header>
        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">I'm {name} .</h1>
            <h3>
              <span>{occupation}</span>
              <br /> {description}
              {/* I'm a {city} based <span>{occupation}</span>. {description}. */}
            </h3>
            <hr />
            <ul className="social">{networks}</ul>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;

/* <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current list">
              <a className="smoothscroll" href="#home">
                <span class="icon">
                  <ion-icon name="home-outline"></ion-icon>
                </span>
                <span class="text"> Home </span>
              </a>
            </li>
            <li class="list">
              <a className="smoothscroll" href="#about">
                <span class="icon">
                  <ion-icon name="person-outline"></ion-icon>
                </span>
                <span class="text"> About </span>
              </a>
            </li>
            <li class="list">
              <a className="smoothscroll" href="#resume">
                <span class="icon">
                  <ion-icon name="book-outline"></ion-icon>
                </span>
                <span class="text"> Education </span>
              </a>
            </li>
            <li class="list">
              <a className="smoothscroll" href="#portfolio">
                <span class="icon">
                  <ion-icon name="code-working-outline"></ion-icon>
                </span>
                <span class="text"> Works </span>
              </a>
            </li>
            <li class="list">
              <a className="smoothscroll" href="#contact">
                <span class="icon">
                  <ion-icon name="call-outline"></ion-icon>
                </span>
                <span class="text"> Contact </span>
              </a>
            </li>
            <div className="indicator"></div>

            <li>
              <DarkModeToggle />
            </li>
          </ul>
        </nav> */

// =================================================================================================

// {
/* <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li> */
// }
// {
/* <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li> */
// }
// {
/* <li>
              <a className="smoothscroll" href="#resume">
                Education
              </a>
            </li> */
// }
// {
/* <li>
              <a className="smoothscroll" href="#portfolio">
                Works
              </a>
            </li> */
// }
// {
/* <li>
              <a className="smoothscroll" href="#testimonials">
                Testimonials
              </a>
            </li> */
// }
// {
/* <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li> */
// }
