export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg shadow-sm">
      <div className="container">
        <a className="navbar-brand" href="#">
          {/* <img src="/logo.png" height="30" alt="Logo" /> */}
          <h2>Vidyarthi Verse</h2>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="bi bi-list"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="categoryDropdown"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                Category
              </a>
              <ul className="dropdown-menu" aria-labelledby="categoryDropdown">
                <li>
                  <a className="dropdown-item text-dark" href="#">
                    Science
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Math
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
