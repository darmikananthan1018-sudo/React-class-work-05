import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }) => (isActive ? "active" : "");

  return (
    <>
      {/* ***** Pre-Header Area Start ***** */}
      <div className="pre-header" id="top">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-sm-9">
              <div className="left-info">
                <ul>
                  <li>
                    <a href="tel:+00012345678">
                      <i className="fa fa-phone"></i>+000 1234 5678
                    </a>
                  </li>
                  <li>
                    <a href="mailto:infocompany@email.com">
                      <i className="fa fa-envelope"></i>infocompany@email.com
                    </a>
                  </li>
                  <li>
                    <a href="#top">
                      <i className="fa fa-map-marker"></i>St. London 54th Bull
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-sm-3">
              <div className="social-icons">
                <ul>
                  <li>
                    <a href="#top">
                      <i className="fab fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#top">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#top">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#top">
                      <i className="fab fa-google-plus"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ***** Pre-Header Area End ***** */}

      {/* ***** Header Area Start ***** */}
      <header className="header-area header-sticky">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                {/* ***** Logo Start ***** */}
                <NavLink to="/" className="logo">
                  <img
                    src="/assets/images/logo.png"
                    alt="Tale SEO Agency logo"
                    style={{ maxWidth: "112px" }}
                  />
                </NavLink>
                {/* ***** Logo End ***** */}

                {/* ***** Menu Start ***** */}
                <ul className={menuOpen ? "nav menu-active" : "nav"}>
                  <li>
                    <NavLink to="/" className={navLinkClass} end onClick={() => setMenuOpen(false)}>
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/faq" className={navLinkClass} onClick={() => setMenuOpen(false)}>
                      FAQs
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/about" className={navLinkClass} onClick={() => setMenuOpen(false)}>
                      About Us
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact" className={navLinkClass} onClick={() => setMenuOpen(false)}>
                      Contact
                    </NavLink>
                  </li>
                </ul>

                <a className="menu-trigger" onClick={() => setMenuOpen((open) => !open)}>
                  <span>Menu</span>
                </a>
                {/* ***** Menu End ***** */}
              </nav>
            </div>
          </div>
        </div>
      </header>
      {/* ***** Header Area End ***** */}
    </>
  );
}

export default Navbar;
