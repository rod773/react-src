import React from "react";
import { Outlet, Link } from "react-router-dom";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef } from "react";
import Footer from "../../components/Footer/Footer";
import { StyledLayout } from "./Layout.styled";

const Layout = () => {
  const ref = useRef(null);

  const options = {
    smooth: true,
  };

  return (
    <>
      <StyledLayout />
      <LocomotiveScrollProvider options={options} containerRef={ref}>
        <main data-scroll-container ref={ref}>
          <section data-scroll-section>
            <nav
              className="navbar navbar-expand-lg bg-primary
      "
            >
              <div className="container-fluid">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNavDropdown"
                  aria-controls="navbarNavDropdown"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarNavDropdown"
                >
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link to="/" className="nav-link">
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/blogs" className="nav-link">
                        Blogs
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/contact" className="nav-link">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </section>
          <section data-scroll-section>
            <Outlet />
          </section>
          <section data-scroll-section>
            <Footer />
          </section>
        </main>
      </LocomotiveScrollProvider>
    </>
  );
};

export default Layout;
