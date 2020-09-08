import React, { Component } from 'react';
import '../App.css'

class Footer extends Component {
  render() {

    if (this.props.data) {
      var networks = this.props.data.social.map(function (network) {
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <footer>

        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
              {networks}
            </ul>

            <ul>
              <li>Modified with love by the Clever Programmer team ♥️</li>
            </ul>

            <ul className="copyright">
              <li>All credit goes to Tim Baker</li> <br />
              <li>Design by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></li>
            </ul>
          </div>
          <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
        </div>
        <div className="copyRight">
          <h4> Powered by Ahmed Raza </h4>
          <a href="https://github.com/ahmedraza17260" rel="noopener noreferrer" target="_blank" >
            <h3 > Copyright © 2020 Ahmed Raza </h3>
          </a>
          <h3 > All Right Reserved </h3></div>
      </footer>
    );
  }
}

export default Footer;
