import React, { Component } from "react";
import "../App.css";

class Footer extends Component {
  render() {
    if (this.props.data) {
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
      <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">{networks}</ul>
            <ul>
              {/* <li>Modified with love by the Clever Programmer Team </li> */}
              <li>
                Design by{" "}
                <a
                  title="Styleshout"
                  href="https://ahmedraza-portfolio.netlify.app/"
                >
                  Ahmed Raza
                </a>
              </li>
              {/* <li>All credit goes to Tim Baker</li> */}
            </ul>
            {/* <ul className="copyright">
              <li>All credit goes to Tim Baker</li> <br />
              <li>
                Design by
                <a
                  title="Styleshout"
                  href="https://ahmedraza-portfolio.netlify.app/"
                >
                  {" "}
                  Ahmed Raza
                </a>
              </li>
            </ul> */}
          </div>
          <a
            href="https://wa.me/+923232190116?text=Hi%20There!"
            className="whatsapp_float"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <i className="fa fa-whatsapp whatsapp-icon"></i>
          </a>

          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open"></i>
            </a>
          </div>
        </div>
        <div className="">
          {/* <h4> Powered by Ahmed Raza </h4> */}
          {/* <a
            href="https://github.com/ahmedraza17260"
            rel="noopener noreferrer"
            target="_blank"
          > */}

          <h3>
            <a
              href="https://github.com/ahmedraza17260"
              rel="noopener noreferrer"
              target="_blank"
            >
              Copyright &copy; {new Date().getFullYear()}{" "}
            </a>
          </h3>
          {/* <h3> All Right Reserved </h3> */}
        </div>
        {/* <a
          href="https://www.revenuehits.com/lps/pubref/?ref=@RH@o8AkQ1f6g4piyzjlP_Hmoemci3uhSfe8ZZJCxAdeOqU"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://revenuehits.com/publishers/media/img/v4/728x90_v4.gif"
            alt="Ads"
            border="0"
          />
        </a> */}
      </footer>
    );
  }
}

export default Footer;
