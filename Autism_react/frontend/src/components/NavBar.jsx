// Desc: This is the navigation bar component
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function NavBar() {
  let location = useLocation();
  let showSignInLink = location.pathname !== "/signin";

  return (
    <>
      {showSignInLink && (
        <nav className="navbar">
          <div className="navbar-container">
            <Link to="/" className="navbar-logo">
              <img src="../../images/MicrosoftTeams-image.png" alt="Logo" />
            </Link>

            <ul className="navbar-menu">
              <li className="navbar-item mx-6">
                <a href="./index.html" className="navbar-link">
                  HOME
                </a>
              </li>
              <li className="navbar-item mx-6">
                <a href="#" className="navbar-link">
                  What is Autism
                </a>
              </li>
              <li className="navbar-item mx-6">
                <a href="./support.html" className="navbar-link">
                  SUPPORT
                </a>
              </li>
              <li className="navbar-item mx-6">
                <Link to="/events" className="navbar-link">
                  EVENTS
                </Link>
              </li>
              <li className="navbar-item mx-6">
                <a href="./services.html" className="navbar-link">
                  SERVICE
                </a>
              </li>
              <li className="navbar-item mx-6">
                <Link to="/blog/1" className="navbar-link">
                  BLOG
                </Link>
              </li>
            </ul>
            <div className="navbar-sign">
              <Link to="/signin" className="navbar-signin">
                SIGN IN
              </Link>
              <Link to="/SignUp" className="navbar-create">
                CREATE
              </Link>
            </div>
          </div>
        </nav>
      )}
    </>
  );
}

export default NavBar;
