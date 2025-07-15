import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import Portfolio from "./Components/Portfolio";
import Testimonials from "./Components/Testimonials";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resumeData: {},
    };
  }

  getResumeData() {
    fetch("/resumeData.json")
      .then((response) => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.json();
      })
      .then((data) => this.setState({ resumeData: data }))
      .catch((error) => {
        console.error("Fetch error:", error);
        alert(error);
      });
  }

  componentDidMount() {
    this.getResumeData();
  }

  render() {
    const { resumeData } = this.state;

    return (
      <div className="App">
        <Navbar /> {/* ✅ DarkModeToggle is already inside this */}
        <Header data={resumeData.main} /> <hr />
        <About data={resumeData.main} /> <hr />
        <Resume data={resumeData.resume} /> <hr />
        <Portfolio data={resumeData.portfolio} /> <hr />
        <Testimonials data={resumeData.testimonials} />
        <Contact data={resumeData.main} /> <hr />
        <Footer data={resumeData.main} />
      </div>
    );
  }
}

export default App;
