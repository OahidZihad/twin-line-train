import { useHistory } from "react-router-dom";

const Navbar = () => {
  const history = useHistory();
  const handleHome = () => {
    history.push("/home");
  };
  const handleDashboard = () => {
    history.push("/dashboard/tickets");
  };
  const handleLogin = () => {
    history.push("/login");
  };

  const handleLostAndFound = () => {
    history.push("/lostAndFound");
  };

  const handleTourGuide = () => {
    history.push("/tourGuide");
  };

  const handleStations = () => {
    history.push("/stations");
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
            Metro Rail
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
                onClick={handleStations}
                style={{
                  fontWeight: "bold",
                  color: "#800000",
                  cursor: "pointer",
                }}
              >
                Stations
              </a>
            </li>
            <li class="nav-item">
              <a
                onClick={handleTourGuide}
                class="nav-link ms-5"
                style={{
                  fontWeight: "bold",
                  color: "#800000",
                  cursor: "pointer",
                }}
              >
                Tour Guide
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link ms-5"
                onClick={handleLostAndFound}
                style={{
                  fontWeight: "bold",
                  color: "#800000",
                  cursor: "pointer",
                }}
              >
                Lost & Found
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link ms-5"
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
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
