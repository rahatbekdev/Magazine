import "../styles/admin-nav.css";
import { Container, Row } from "reactstrap";
import useAuth from "../custom-hooks/useAuth";

import { NavLink } from "react-router-dom";

const admin_nav = [
  {
    display: "Dashboard",
    path: "/dashboard",
  },
  {
    display: "All-Products",
    path: "/dashboard/all-products",
  },
  {
    display: "Orders",
    path: "/dashboard/orders",
  },
  {
    display: "Users",
    path: "/dashboard/users",
  },
];
const AdminNav = () => {
  const { currentUser } = useAuth();

  return (
    <>
      <header className="admin_header">
        <div className="admin_nav-top">
          <Container>
            <div className="admin_nav-wrapper-top">
              <div className="logo">
                <h2>Multimart</h2>
              </div>

              <div className="search_box">
                <input type="text" placeholder="search..." />
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
              <div className="admin_nav-top-right">
                <span>
                  <i className="ri-notification-2-line"></i>
                </span>
                <span>
                  <i className="ri-settings-2-line"></i>
                </span>
                <img src={currentUser && currentUser.photoURL} alt="" />
              </div>
            </div>
          </Container>
        </div>
      </header>

      <section className="admin_menu p-0">
        <Container>
          <Row>
            <div className="admin_navigation">
              <ul className="admin_menu-list">
                {admin_nav.map((item, i) => (
                  <li key={i} className="admin_menu-item">
                    <NavLink
                      className={(navClass) =>
                        navClass.isActive ? "active_admin-menu" : ""
                      }
                      to={item.path}
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default AdminNav;
