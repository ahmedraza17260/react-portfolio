import React, { Component } from "react";

class Resume extends Component {
  render() {
    if (this.props.data) {
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function (education) {
        return (
          <div key={education.school}>
            <h3>{education.school}</h3>
            <h3>{education.college}</h3>
            <h3>{education.university}</h3>
            <p className="info">
              {education.degree} <span>&bull;</span>
              <em className="date">{education.graduated}</em>
            </p>
            <p>{education.description}</p>
          </div>
        );
      });
      var work = this.props.data.work.map(function (work) {
        return (
          <div key={work.company}>
            <h3>{work.company}</h3>
            <p className="info">
              {work.title}
              <span>&bull;</span> <em className="date">{work.years}</em>
            </p>
            <p>{work.description}</p>
          </div>
        );
      });
      var workDalda = this.props.data.workDalda.map(function (workDalda) {
        return (
          <div key={workDalda.company}>
            <h3>{workDalda.company}</h3>
            <p className="info">
              {workDalda.title}
              <span>&bull;</span> <em className="date">{workDalda.years}</em>
            </p>
            <p>{workDalda.description}</p>
            <p>Test Perform</p>
            <dl>
              <li>Free Fatty Acid (FFA)</li>
              <li>Soap Content</li>
              <li>Detection of Iron Content</li>
              <li>Detection of Nickel Content</li>
              <li>Detection of Phosphorous Content</li>
              <li>Dilation</li>
              <li>Bleaching</li>
              <li>Moisture & Impurities (M&I)</li>
              <li>Slip Melting Point (SMP)</li>
              <li>Fatty Acid Methyl Ester (FAME)</li>
              <li>Vitamin A</li>
              <li>Clarity Test</li>
              <li>Strength of Citric Acid</li>
              <li>Peroxide Value (POV)</li>
              <li>Kries Test (KT)</li>
              <li>Total Fatty Matter (TFM)</li>
              <li>Mineral Oil Detection</li>
              <li>Line QDI</li>
              <li>Packaging QDI</li>
            </dl>
          </div>
        );
      });

      var skills = this.props.data.skills.map(function (skills) {
        var className = "bar-expand " + skills.name.toLowerCase();
        return (
          <li key={skills.name}>
            <span style={{ width: skills.level }} className={className}></span>
            <em>{skills.name}</em>
          </li>
        );
      });
    }

    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">{education}</div>
            </div>
          </div>
        </div>

        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Work</span>
            </h1>
          </div>

          <div className="nine columns main-col">{work}</div>
        </div>
        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Work</span>
            </h1>
          </div>

          <div className="nine columns main-col">{workDalda}</div>
        </div>

        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <p>{skillmessage}</p>

            <div className="bars">
              <ul className="skills">{skills}</ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
