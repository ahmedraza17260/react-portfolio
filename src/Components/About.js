import React, { Component } from "react";

class About extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var profilepic = "images/" + this.props.data.image;
      var bio = this.props.data.bio;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone = this.props.data.phone;
      var phone1 = this.props.data.phone1;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img
              className="profile-pic"
              src={profilepic}
              alt="Ahmed Raza Profile Pic"
            />
            <br />
          </div>
          <div className="nine columns main-col">
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
            <h2>About Me</h2>

            <p style={{ fontWeight: "600", textAlign: "justify" }}>{bio}</p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>{name}</span>
                  <br />
                  <span>
                    {street}
                    <br />
                    {city} {state}, {zip}
                  </span>
                  <br />
                  <span>{phone}</span> <br />
                  <span>{phone1}</span>
                  <br />
                  <span>{email}</span>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a
                    href={resumeDownload}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button"
                  >
                    <i className="fa fa-download"></i>View Resume
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
