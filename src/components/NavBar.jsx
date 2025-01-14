import { Link } from "react-router-dom";

export function NavBar({ cartCount }) {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid ">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/page1" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item d-flex align-items-center">
                <Link
                  to="/page2"
                  className="nav-link d-flex align-items-center"
                >
                  <i className="bi bi-cart"></i>
                  <span className="ms-2">{cartCount}</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
