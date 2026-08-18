import { useState } from "react";
import { Link } from "react-router-dom";

const steps = [
  {
    label: "Project Introduction",
    title: "Best CSS Templates for you",
    body: (
      <>
        <p>
          Tale is the best SEO agency website template using Bootstrap
          v5.2.2 CSS for your company. It is a free download provided by
          TemplateMo. There are 3 pages, <Link to="/">Home</Link>,{" "}
          <Link to="/about">About</Link>, and <Link to="/faq">FAQ</Link>.
        </p>
        <div className="info">
          <span>Website Design</span>
          <span>User Interface</span>
          <span>User Experience</span>
          <span className="last-span">Digital Agency</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doers
          eiusmod tempor incididunt ut labore et dolore dolor dolor sit
          amet, consectetur adipicing elit, sed doers eiusmod.
        </p>
      </>
    ),
  },
  {
    label: "Work Development",
    title: "Detailed Information On What We Do",
    body: (
      <>
        <p>
          You are free to use this template for any purpose. You are not
          allowed to redistribute the downloadable ZIP file of Tale SEO
          Template on any other template website. Please contact us. Thank
          you.
        </p>
        <div className="info">
          <span>HTML CSS</span>
          <span>Bootstrap 5</span>
          <span>TemplateMo</span>
          <span className="last-span">Development</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doers
          eiusmod tempor incididunt ut labore et dolore dolor dolor sit
          amet, consectetur adipicing elit, sed doers eiusmod.
        </p>
      </>
    ),
  },
  {
    label: "Data Analysis",
    title: "Responsive HTML CSS Templates",
    body: (
      <>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doers
          eiusmod kent tempor incididunt ut labore et dolore dolor.
        </p>
        <div className="info">
          <span>SEO Trend</span>
          <span>Digital Agency</span>
          <span>Best Template</span>
          <span className="last-span">Development</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doers
          eiusmod tempor incididunt ut labore et dolore dolor dolor sit
          amet, consectetur adipicing elit, sed doers eiusmod.
        </p>
      </>
    ),
  },
  {
    label: "Project Finishing",
    title: "Detailed Information about SEO Techniques",
    body: (
      <>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doers
          eiusmod kent tempor incididunt ut labore et dolore dolor.
        </p>
        <div className="info">
          <span>Data Analysis</span>
          <span>SEO Trend</span>
          <span>Templates</span>
          <span className="last-span">Research</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doers
          eiusmod tempor incididunt ut labore et dolore dolor dolor sit
          amet, consectetur adipicing elit, sed doers eiusmod.
        </p>
      </>
    ),
  },
];

function Home() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <>
      <div className="page-heading">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 align-self-center">
              <div className="caption header-text">
                <h6>SEO DIGITAL AGENCY</h6>
                <div className="line-dec"></div>
                <h4>
                  Discover More <em>About Us</em>
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed doers eiusmod tempor incididunt ut labore et dolore.
                </p>
                <div className="main-button">
                  <Link to="/about">Discover More</Link>
                </div>
                <span>or</span>
                <div className="second-button">
                  <Link to="/faq">Check our FAQs</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-5 align-self-center">
              <img src="/assets/images/about-us-image.jpg" alt="About us" />
            </div>
          </div>
        </div>
      </div>

      <div className="video-info section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="video-thumb">
                <img src="/assets/images/video-thumb.jpg" alt="Video thumbnail" />
                <a href="https://youtube.com" target="_blank" rel="noreferrer">
                  <i className="fa fa-play"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="section-heading">
                <h2>Detailed Information On What We Do &amp; Who We Are</h2>
                <div className="line-dec"></div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed doers eiusmod tempor incididunt ut labore et dolore
                  dolor.
                </p>
              </div>
              <div className="skills">
                <div className="skill-slide marketing">
                  <div className="fill"></div>
                  <h6>SEO Marketing</h6>
                  <span>90%</span>
                </div>
                <div className="skill-slide digital">
                  <div className="fill"></div>
                  <h6>Digital Marketing</h6>
                  <span>80%</span>
                </div>
                <div className="skill-slide media">
                  <div className="fill"></div>
                  <h6>Social Media Management</h6>
                  <span>95%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="happy-clients section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading">
                <h2>
                  Our 4 Steps <em>To Success</em> &amp;{" "}
                  <span>Happy Clients</span>
                </h2>
                <div className="line-dec"></div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed doers.
                </p>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="naccs">
                <div className="tabs">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="menu">
                        {steps.map((step, index) => (
                          <div
                            key={step.label}
                            className={
                              (index === activeStep ? "active " : "") +
                              (index === steps.length - 1 ? "last-item" : "")
                            }
                            onClick={() => setActiveStep(index)}
                            style={{ cursor: "pointer" }}
                          >
                            <span>{step.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <ul className="nacc">
                        {steps.map((step, index) => (
                          <li
                            key={step.label}
                            className={index === activeStep ? "active" : ""}
                          >
                            {index === activeStep && (
                              <div>
                                <div className="row">
                                  <div className="col-lg-7">
                                    <h4>{step.title}</h4>
                                    <div className="line-dec"></div>
                                    {step.body}
                                  </div>
                                  <div className="col-lg-5 align-self-center">
                                    <img
                                      src="/assets/images/happyclient-01.jpg"
                                      alt="Happy client"
                                    />
                                  </div>
                                </div>
                              </div>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="cta section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h4>
                Are You Ready To Work &amp; Develop With Us ?
                <br />
                Don't Hesitate &amp; Contact Us !
              </h4>
            </div>
            <div className="col-lg-4">
              <div className="main-button">
                <Link to="/contact">Contact Us Now!</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
