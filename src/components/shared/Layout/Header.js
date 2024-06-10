import React from "react";
import { BiDonateBlood, BiUserCircle } from "react-icons/bi";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const location = useLocation();
  // logout handler
  const handleLogout = () => {
    localStorage.clear();
    // alert("Logout Successfully");
    toast.success("Logout Successfully"); // Use toast for logout message

    navigate("/login");
  };

  return (
    <>
      <nav className="navbar">
        <div className="container-fluid ">
          <div className="navbar-brand h1 " style={{ fontSize: 35 }}>
            <BiDonateBlood color="red" /> BLOOD BANK APP
          </div>
          <ul className="navbar-nav flex-row">
            <li className="nav-item mx-3">
              <p className="nav-link " style={{ fontSize: 20 }}>
                <BiUserCircle style={{ fontSize: "22" }} /> Welcome{" "}
                {user?.name || user?.hospitalName || user?.organisationName}
                &nbsp;
                <span
                  className="badge bg-secondary"
                  style={{ color: "black", cursor: "pointer" }}
                >
                  {user?.role}
                </span>
              </p>
            </li>

            {/* {location.pathname === "/" ||
            location.pathname === "/donar" ||
            location.pathname === "/hospital" ? (
              <li className="nav-item mx-3">
                <Link to="/analytics" className="nav-link">
                  Analytics
                </Link>
              </li>
            ) : (
              <li className="nav-item mx-3">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
            )} */}

            {/* ....... */}

            {user?.role === "organisation" && (
              <>
                <li className="nav-item mx-3">
                  <Link
                    to={location.pathname === "/analytics" ? "/" : "/analytics"}
                    className="nav-link"
                  >
                    {location.pathname === "/analytics" ? "Home" : "Analytics"}
                  </Link>
                </li>
              </>
            )}
            {user?.role === "admin" && (
              <>
                <li className="nav-item mx-3">
                  <Link
                    to={location.pathname === "/" ? "/" : "/"}
                    className="nav-link"
                  >
                    {location.pathname === "/" ? "Home" : "Home"}
                  </Link>
                </li>
              </>
            )}
            {/* ......... */}

            <li className="nav-item mx-3">
              <button
                className="btn btn-danger"
                style={{
                  fontWeight: "bold",
                  color: "black",
                  backgroundColor: "red",
                }}
                onClick={handleLogout}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
