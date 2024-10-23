import "./header.css";
import { Container, Row } from "reactstrap";
import logo from "../../assets/images/eco-logo.png";
import user_icon from "../../assets/images/user-icon.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import useAuth from "../../custom-hooks/useAuth";
import { signOut } from "firebase/auth";
import { auth } from "../../fireBase.config";
import { toast } from "react-toastify";

const nav_link = [
  {
    path: "home",
    display: "Home",
  },
  {
    path: "shop",
    display: "Shop",
  },
  {
    path: "card",
    display: "Card",
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const menuref = useRef(null);
  const profileActionsRef = useRef(null);

  const navigate = useNavigate();
  const totalQuantity = useSelector((state) => state.card.totalQuantity);
  const { currentUser } = useAuth();
  // console.log("current user",currentUser);

  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky_header");
      } else {
        headerRef.current.classList.remove("sticky_header");
      }
    });
  };

  const logout = () => {
    signOut(auth)
      .then(() => {
        toast.success("Logged out");
        navigate("/home");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  useEffect(() => {
    stickyHeaderFunc();

    return () => window.removeEventListener("scroll", stickyHeaderFunc);
  });

  const menuToggle = () => menuref.current.classList.toggle("active_menu");

  const navigateToCard = () => {
    navigate("/card");
  };

  const toggleProfileActions = () =>
    profileActionsRef.current.classList.toggle("show_profileActions");

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav_wrapper">
            <div className="logo">
              <img src={logo} alt="Logo" />
              <div>
                <h1>Multimart</h1>
              </div>
            </div>

            <div className="navigation" ref={menuref} onClick={menuToggle}>
              <ul className="menu">
                {nav_link.map((item, i) => (
                  <li className="nav_item" key={i}>
                    <NavLink
                      to={item.path}
                      className={(navClasses) =>
                        navClasses.isActive ? "nav_active" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="nav_icons">
              <span className="fav_icon">
                <i className="ri-heart-line"></i>
                <span className="bagde">1</span>
              </span>
              <span className="card_icon" onClick={navigateToCard}>
                <i className="ri-shopping-bag-line"></i>
                <span className="bagde">{totalQuantity}</span>
              </span>
              <div className="profile">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 500 }}
                  src={currentUser ? currentUser.photoURL : user_icon}
                  alt="user_icon"
                  onClick={toggleProfileActions}
                />

                <div
                  className="profile_actions"
                  onClick={toggleProfileActions}
                  ref={profileActionsRef}
                >
                  {currentUser ? (
                    <span onClick={logout}>Logout</span>
                  ) : (
                    <div className="d-flex align-items-center justift-content-center flex-column">
                      <Link to="/sign-up">Signup</Link>
                      <Link to="/login">Login</Link>
                      <Link to="/dashboard">Dashboard</Link>
                    </div>
                  )}
                </div>
              </div>

              <div className="mobile_menu">
                <span onClick={menuToggle}>
                  <i className="ri-menu-line"></i>
                </span>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
