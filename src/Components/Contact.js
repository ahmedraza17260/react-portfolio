import React from "react";
import emailjs from "emailjs-com";

// import React, { useState } from "react";

const Contact = ({ data }) => {
  // const [url, setUrl] = useState('mailto:test@example.com?subject=subject&body=body');
  // const [name, setName] = useState("");
  // const [subject, setSubject] = useState("");
  // const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");

  // console.log(data);

  // const handleClick = (e) => {
  //   e.preventDefault();
  //   window.open(`mailto:${email}?subject=${subject}&body=${name}: ${message}`);
  // };

  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "gmail",
        "PortfolioTemplate",
        e.target,
        "user_LTfJaD1P0OGKt61H6CoDR"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <section id="contact">
      <div className="row section-head">
        <div className="two columns header-col">
          <h1>
            <span>Get In Touch.</span>
          </h1>
        </div>

        <div className="ten columns">
          <p className="lead">{data?.message}</p>
        </div>
      </div>

      <div className="row">
        <div className="eight columns">
          <form className="contact-form" onSubmit={sendEmail}>
            <input type="hidden" name="contact_number" />
            <label>Name</label>
            <input required type="text" name="user_name" />
            <label>Email</label>
            <input required type="email" name="user_email" />
            <label>Subject</label>
            <input required type="text" name="user_subject" />
            <label>Message</label>
            <textarea required name="user_message" /> <br />
            <input className="submit" type="submit" value="Send" />
          </form>

          {/* <form id="contactForm" name="contactForm" onSubmit={sendEmail}>
            <fieldset>
            <div>
              <label htmlFor="contactName">
                Name <span className="required">*</span>
              </label>
              <input
                required
                value={name}
                type="text"
                size="35"
                id="contactName"
                name="name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="contactEmail">
                Email <span className="required">*</span>
              </label>
              <input
                required
                value={email}
                type="text"
                size="35"
                id="contactEmail"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="contactSubject">
                Subject<span className="required">*</span>
              </label>
              <input
                required
                value={subject}
                type="text"
                size="35"
                id="contactSubject"
                name="subject"
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="contactMessage">
                Message <span className="required">*</span>
              </label>
              <textarea
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                cols="50"
                rows="15"
                id="contactMessage"
                name="message"
              ></textarea>
            </div>
            <div>
              <button className="submit" type="submit">
                Submit
              </button>
            </div>

            <div>
                onClick={sendEmail}
                <button type="submit" onClick={handleClick} className="submit">
                  Submit
                </button>
                <span id="image-loader">
                  <img alt="" src="images/loader.gif" />
                </span>
              </div>
            </fieldset>
          </form> */}

          {/* <div id="message-warning"> Error boy</div>
          <div id="message-success">
            <i className="fa fa-check"></i>Your message was sent, thank you!
            <br />
          </div> */}
        </div>

        <aside className="four columns footer-widgets">
          <div className="widget widget_contact">
            <h4>Address and Phone</h4>
            <p className="address">
              {data?.name}
              <br />
              {data?.address.street} <br />
              {data?.address.city}, {data?.address.state} {data?.address.zip}
              <br />
              <span>{data?.phone}</span>
              <br />
              <span>{data?.phone1}</span>
              <br />
              <span>{data?.email}</span>
            </p>
          </div>

          <div className="widget widget_tweets"></div>
        </aside>
      </div>
    </section>
  );
};

export default Contact;
