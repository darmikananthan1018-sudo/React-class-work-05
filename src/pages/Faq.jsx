import { useState } from "react";
import { Link } from "react-router-dom";

const faqItems = [
  {
    question: "Sartorial Butcher Humblebrag",
    answer: (
      <p>
        Tale is the best SEO agency website template using Bootstrap
        v5.2.2 CSS for your company. It is a free download provided by
        TemplateMo. There are 3 pages, <Link to="/">Home</Link>,{" "}
        <Link to="/about">About</Link>, and <Link to="/faq">FAQ</Link>.
      </p>
    ),
  },
  {
    question: "Jean Shorts Microdosing",
    answer: (
      <p>
        You are free to use this template for any purpose. You are not
        allowed to redistribute the downloadable ZIP file of Tale SEO
        Template on any other template website. Please contact us. Thank
        you.
        <br />
        <br />
        Semiotics blog cray letterpress lo-fi vexillologist before they
        sold out swag YOLO schlitz. Coloring book roof party gentrify
        brunch.
      </p>
    ),
  },
  {
    question: "Waistcoat Aesthetic Polaroid",
    answer: (
      <p>
        Semiotics blog cray letterpress lo-fi vexillologist before they
        sold out swag YOLO schlitz. Coloring book roof party gentrify
        brunch.
        <br />
        <br />
        Fingerstache cronut taxidermy, echo park quinoa tumblr activated
        charcoal before they sold out.
      </p>
    ),
  },
  {
    question: "Dolores Accordion HTML5",
    answer: (
      <p>
        Pickled succulents bitters belly direct trade, shaman iceland raw
        denim kombucha cray offal. Food truck swag hell of tumblr poutine
        tilde live-edge shorts microdosing fixie succulents, viral everyday
        carry tattooed.
      </p>
    ),
  },
];

function Faq() {
  const [openIndex, setOpenIndex] = useState(0);
  const [form, setForm] = useState({
    email: "",
    website: "",
    phoneNumber: "",
    fullName: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

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
                  Most Frequently Asked <em>Questions</em> Here <em>?</em>
                </h4>
              </div>
            </div>
            <div className="col-lg-5">
              <img src="/assets/images/faqs-image.jpg" alt="FAQs" />
            </div>
          </div>
        </div>
      </div>

      <div className="happy-steps">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>Our 4 Steps To Success &amp; Happy Clients</h2>
            </div>
            <div className="col-lg-12">
              <div className="steps">
                <div className="row">
                  <div className="col-lg-3">
                    <div className="item">
                      <img
                        src="/assets/images/services-01.jpg"
                        alt=""
                        style={{ maxWidth: "66px", borderRadius: "50%", margin: "0 auto" }}
                      />
                      <h4>Project Introduction</h4>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="item">
                      <img
                        src="/assets/images/services-02.jpg"
                        alt=""
                        style={{ maxWidth: "66px", borderRadius: "50%", margin: "0 auto" }}
                      />
                      <h4>Work Development</h4>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="item">
                      <img
                        src="/assets/images/services-03.jpg"
                        alt=""
                        style={{ maxWidth: "66px", borderRadius: "50%", margin: "0 auto" }}
                      />
                      <h4>Data Analysis</h4>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="item last-item">
                      <img
                        src="/assets/images/services-04.jpg"
                        alt=""
                        style={{ maxWidth: "66px", borderRadius: "50%", margin: "0 auto" }}
                      />
                      <h4>Project Finishing</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="most-asked section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading">
                <h2>
                  Most <em>Frequently</em> Asked <span>Questions</span> ?
                </h2>
                <div className="line-dec"></div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed doers.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="accordions is-first-expanded">
                {faqItems.map((item, index) => (
                  <article className="accordion" key={item.question}>
                    <div
                      className="accordion-head"
                      onClick={() =>
                        setOpenIndex(openIndex === index ? -1 : index)
                      }
                      style={{ cursor: "pointer" }}
                    >
                      <span>{item.question}</span>
                      <span className="icon">
                        <i
                          className={
                            "icon fa " +
                            (openIndex === index
                              ? "fa-chevron-down"
                              : "fa-chevron-right")
                          }
                        ></i>
                      </span>
                    </div>
                    {openIndex === index && (
                      <div className="accordion-body">
                        <div className="content">{item.answer}</div>
                      </div>
                    )}
                  </article>
                ))}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="get-free-quote">
                <form id="free-quote" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="section-heading">
                        <h2>
                          Get a <em>Free Quote</em> Now
                        </h2>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <fieldset>
                        <input
                          type="text"
                          name="email"
                          id="email"
                          pattern="[^ @]*@[^ @]*"
                          placeholder="Your E-mail"
                          required
                          value={form.email}
                          onChange={handleChange}
                        />
                      </fieldset>
                    </div>
                    <div className="col-lg-12">
                      <fieldset>
                        <input
                          type="text"
                          name="website"
                          id="website"
                          placeholder="Website URL"
                          autoComplete="on"
                          required
                          value={form.website}
                          onChange={handleChange}
                        />
                      </fieldset>
                    </div>
                    <div className="col-lg-12">
                      <fieldset>
                        <input
                          type="tel"
                          name="phoneNumber"
                          id="phone-number"
                          placeholder="Phone Number"
                          autoComplete="on"
                          required
                          value={form.phoneNumber}
                          onChange={handleChange}
                        />
                      </fieldset>
                    </div>
                    <div className="col-lg-12">
                      <fieldset>
                        <input
                          type="text"
                          name="fullName"
                          id="full-name"
                          placeholder="Full Name"
                          autoComplete="on"
                          value={form.fullName}
                          onChange={handleChange}
                        />
                      </fieldset>
                    </div>
                    <div className="col-lg-12">
                      <fieldset>
                        <button type="submit" id="form-submit" className="orange-button">
                          Get Your Free Quote
                        </button>
                      </fieldset>
                    </div>
                    {submitted && (
                      <div className="col-lg-12">
                        <p>Thanks! We'll be in touch with your free quote shortly.</p>
                      </div>
                    )}
                  </div>
                </form>
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

export default Faq;
