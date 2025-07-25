import React, { Component } from "react";

class Portfolio extends Component {
  render() {
    if (!this.props.data) return null;

    const projects = this.props.data.projects.map((project) => {
      const projectImage = "images/portfolio/" + project.image;
      return (
        <div key={project.title} className="columns portfolio-item">
          <div className="item-wrap">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={project.url}
              title={project.title}
            >
              <img alt={project.title} src={projectImage} />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>{project.title}</h5>
                  <p>{project.category}</p>
                </div>
              </div>
              <div className="link-icon">
                <i className="fa fa-link"></i>
              </div>
            </a>
          </div>
        </div>
      );
    });

    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>
            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              {/* {projects} */}
              {projects.length > 0 ? (
                projects
              ) : (
                <p>No portfolio projects to display right now.</p>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
