import React, { Component } from "react";

class About extends Component {
  render() {
    const data = this.props.data;

    if (!data) return <div>Loading About Section...</div>;

    const name = data.name;
    const profilepic = "images/" + data.image;
    const bio = data.bio;
    const street = data.address?.street || "";
    const city = data.address?.city || "";
    const state = data.address?.state || "";
    const zip = data.address?.zip || "";
    const phone = data.phone;
    const email = data.email;
    const resumeDownload = data.resumedownload;

    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img
              className="profile-pic"
              src={profilepic}
              alt={`${name} Profile Pic`}
            />
            <br />
          </div>

          <div className="nine columns main-col">
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
                  <span>{phone}</span>
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
                    <i className="fa fa-download"></i> View Resume
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
