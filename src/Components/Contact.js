import React from "react";
import emailjs from "@emailjs/browser";

const Contact = ({ data }) => {
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
            <input id="name" required type="text" name="user_name" />
            <label>Email</label>
            <input id="email" required type="email" name="user_email" />
            <label>Subject</label>
            <input id="subject" required type="text" name="user_subject" />
            <label>Message</label>
            <textarea id="message" required name="user_message" /> <br />
            <input className="submit" type="submit" value="Email" />
          </form>
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
              {/* <span>{data?.phone1}</span> */}
              {/* <br /> */}
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

// import emailjs from "emailjs-com";

// import React, { useState } from "react";

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

// function getOnWhatsapp() {
//   var name = document.getElementById("name").value;
//   var email = document.getElementById("email").value;
//   var subject = document.getElementById("subject").value;
//   var message = document.getElementById("message").value;
//   // var phone = document.getElementById("phone").value;

//   var url =
//     "https://wa.me/923232190116?text=" +
//     "Name: " +
//     name +
//     "%0a" +
//     "Email: " +
//     email +
//     "%0a" +
//     "Subject: " +
//     subject +
//     "%0a" +
//     "Message: " +
//     message;

//   window.open(url, "_blank").focus();
// }

// {
/* <form id="contactForm" name="contactForm" onSubmit={sendEmail}>
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
          </form> */
// }

// {
/* <div id="message-warning"> Error boy</div>
          <div id="message-success">
            <i className="fa fa-check"></i>Your message was sent, thank you!
            <br />
          </div> */
// }

// {
/* <input
              onClick={() => {
                getOnWhatsapp();
              }}
              className="submit"
              type="submit"
              value="Whatsapp"
            /> */
// }

// import ReCAPTCHA from "react-google-recaptcha";

// {
/* <ReCAPTCHA
              sitekey={process.env.REACT_APP_SITE_KEY}
              ref={captchaRef}
            /> */
// }

// const captchaRef = useRef(null);
// const token = captchaRef.current.getValue();

// const handleSubmit = (e) => {
//   e.preventDefault();
//   const token = captchaRef.current.getValue();
//   captchaRef.current.reset();
// };
