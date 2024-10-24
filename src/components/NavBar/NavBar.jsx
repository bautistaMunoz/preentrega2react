import CartWidget from "./CartWidget"
import { BsBox } from "react-icons/bs";
import { Link } from "react-router-dom";

import "./navbar.css"

const NavBar = () => {
  return (
      <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
              <Link to="/" className="navbar-brand d-flex align-items-center">
                  <img src="../multimedia/bicicerveceralogo-removebg-preview.png" alt="Logo" className="logoMuma" />
                  <span className="title-brand">Cerveza Muma</span>
              </Link>
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
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                          <Link to="/category/rubia" className="nav-link">CERVEZA RUBIA</Link>
                      </li>
                      <li className="nav-item">
                          <Link to="/category/ipa" className="nav-link">CERVEZA IPA</Link>
                      </li>
                      <li className="nav-item">
                          <Link to="/category/honey" className="nav-link">CERVEZA HONEY</Link>
                      </li>
                      <li className="nav-item dropdown">
                          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                              EXTRAS
                          </a>
                          <ul className="dropdown-menu">
                              <li><Link to="/info/como-funciona" className="dropdown-item">COMO FUNCIONA</Link></li>
                              <li><Link to="/info/precios" className="dropdown-item">PRECIOS</Link></li>
                          </ul>
                      </li>
                  </ul>
                  <CartWidget />
              </div>
          </div>
      </nav>
  );
};

export default NavBar;
