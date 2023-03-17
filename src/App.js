import React, { Component } from "react";
// import ReactGA from 'react-ga';
import $ from "jquery";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
// import Testimonials from "./Components/Testimonials";
// import Portfolio from "./Components/Portfolio";
import Navbar from "./Components/Navbar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      resumeData: {},
    };
  }

  getResumeData() {
    $.ajax({
      url: "/resumeData.json",
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function (xhr, status, err) {
        console.log(err);
        alert(err);
      },
    });
  }

  componentDidMount() {
    this.getResumeData();
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Header data={this.state.resumeData.main} /> <hr />
        <About data={this.state.resumeData.main} /> <hr />
        <Resume data={this.state.resumeData.resume} /> <hr />
         {/* <Portfolio data={this.state.resumeData.portfolio} /> <hr /> */}
         {/* <Testimonials data={this.state.resumeData.testimonials} /> */}
        <Contact data={this.state.resumeData.main} /> <hr />
        <Footer data={this.state.resumeData.main} />
      </div>
    );
  }
}

export default App;

// "https://olx-clone-raza-app.netlify.app/"
// "https://amazon-clone-raza-app.netlify.app/"
// "https://olx-clone-d2422.firebaseapp.com/"

// {
//         "title": "Whatsapp Clone",
//         "category": "Whatsapp Clone with React Javascript ",
//         "image": "whatsapp-clone.jpg",
//         "url": "https://whatsapp-clone-react-app.web.app/"
//       },

// {
//   "title": "OLX Clone",
//   "category": "OLX Clone with React Javascript ",
//   "image": "olx-clone.jpg",
//   "url": "https://olx-clone-raza-app.netlify.app/"
// },

// {
//   "title": "Diaries App",
//   "category": "Diaries App using React and Redux Toolkit with TypeScript ",
//   "image": "login.jpg",
//   "url": "https://raza-diaries-app.netlify.app/"
// },
// {
//         "title": "Expense Tracker",
//         "category": "Expense Tracker App with React/TypeScript it should be a Progressive Web App (PWA) with Offline Capability and Push Notifications",
//         "image": "expense.jpg",
//         "url": "https://expense-tracker-pwa-2fee8.web.app/"
// }
