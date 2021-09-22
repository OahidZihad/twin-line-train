import { useHistory } from "react-router-dom";

const Navbar = () => {
  const history = useHistory();
  const handleHome = () => {
    history.push("/home");
  };
  const handleDashboard = () => {
    // history.push("");
  };
  const handleLogin = () => {
    history.push("/login");
  };
  return (
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid">
        <div class="d-flex">
          <h2
            class="ms-5 active text-brand"
            aria-current="page"
            onClick={handleHome}
            style={{ cursor: "pointer", fontWeight: "bold" }}
          >
            Twin Line
          </h2>
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a
                class="nav-link ms-5 active"
                aria-current="page"
                onClick={handleHome}
                href="#home"
                style={{
                  cursor: "pointer",
                  fontWeight: "bold",
                  color: "#800000",
                }}
              >
                Home
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link ms-5"
                href="#login"
                onClick={handleLogin}
                style={{
                  cursor: "pointer",
                  fontWeight: "bold",
                  color: "#800000",
                }}
              >
                Login
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link ms-5"
                href="#Dashboard"
                onClick={handleDashboard}
                style={{
                  cursor: "pointer",
                  fontWeight: "bold",
                  color: "#800000",
                }}
              >
                Dashboard
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link ms-5"
                href="#reviews"
                style={{ fontWeight: "bold", color: "#800000" }}
              >
                Reviews
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link ms-5"
                href="#blog"
                style={{ fontWeight: "bold", color: "#800000" }}
              >
                Blog
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link ms-5"
                href="#contactUs"
                style={{ fontWeight: "bold", color: "#800000" }}
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
