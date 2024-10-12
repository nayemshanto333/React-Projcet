import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container ">
        <a href="#">
          <img src="img/logo.png" alt="logo" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarToggler"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarToggler">
          <ul className="navbar-nav ms-auto gap-3">
            <li className="nav-item">
              <a href="" className="nav-link">
                Used Cars
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">
                Auctions
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">
                New Cars
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">
                Sell Cars
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">
                Local Dealers
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">
                Support
              </a>
            </li>
            <li className="nav-item NavButton">
              <a href="" className="nav-link text-info">
                <i class="bi bi-person-fill"></i> <span>Sign Up</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
