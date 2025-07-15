import React, { Component } from "react";
// import DarkModeToggle from "./DarkModeToggle"; // Optional toggle

class Header extends Component {
  render() {
    const { data } = this.props;

    if (!data) return null;

    const { name, occupation, description, social } = data;

    const networks = social.map((network) => (
      <li key={network.name}>
        <a rel="noopener noreferrer" target="_blank" href={network.url}>
          <i className={network.className}></i>
        </a>
      </li>
    ));

    return (
      <header id="home">
        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">I'm {name}.</h1>
            <h3>
              <span>{occupation}</span>
              <br />
              {description}
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
