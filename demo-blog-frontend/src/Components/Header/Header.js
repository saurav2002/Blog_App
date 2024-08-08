import React, { useState, useEffect, useContext, useRef } from "react";
import { Container, Dropdown, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import { withTranslation } from "react-i18next";

const Header = (props) => {
  const { t, i18n } = props;
  const authContext = useContext(AuthContext);
  const { isLoggedIn, userName, logout } = authContext;

  const [height, setHeight] = useState(0);
  const headerRef = useRef(null);

  useEffect(() => {
    const resizeHandler = () => {
      const height = headerRef.current.clientHeight;
      setHeight(height);
      props.onHeightChange(height);
    };

    resizeHandler(); // Call it initially
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [props]);

  const logoutHandler = () => {
    logout();
  };

  return (
    <Container
      fluid
      className="fixed-top border-bottom text-center bg-black text-white boxShadow"
      ref={headerRef}
    >
      <Navbar bg="black" expand="sm" variant="dark">
        <Container fluid>
          <Navbar.Brand to="/" as={NavLink} className="text-white">
            {t("home")}
          </Navbar.Brand>
          <Navbar.Brand to="/home" as={NavLink} className="text-white">
            {t("All Posts")}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
           

            {isLoggedIn ? (
              <Nav className="d-flex w-100">
                <Link
                  className="me-auto button btn btn-outline-light ms-1 my-2 text-decoration-none"
                  to="/new-post"
                  as={NavLink}
                  style={{backgroundColor:'blue'}}
                >
                  {t("newPost")}
                </Link>
                <div
                  className="btn align-self-center text-light"
                  style={{ cursor: "default" }}
                >
                  <span style={{color:'aliceblue', fontWeight:'600'}}>{`${t("signedInAs")}:  ${userName}`}</span>
                </div>
                <Link
                  className="button btn btn-outline-light me-1 my-2 text-decoration-none"
                  to="/"
                  as={NavLink}
                  onClick={logoutHandler}
                  style={{backgroundColor:'red'}}
                >
                  {t("logout")}
                </Link>
              </Nav>
            ) : (
              <Nav className="d-flex w-100 justify-content-end">
                <Link
                  className="button btn btn-outline-light me-1 my-1 text-decoration-none"
                  to="/login"
                  as={NavLink}
                >
                  {t("login")}
                </Link>
                <Link
                  className="button btn btn-outline-light me-1 my-1 text-decoration-none"
                  to="/register"
                  as={NavLink}
                >
                  {t("register")}
                </Link>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default withTranslation()(Header);
