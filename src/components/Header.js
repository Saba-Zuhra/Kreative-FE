import React, { useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import SearchBox from "./SearchBox";
import Container from "react-bootstrap/Container";
import { useDispatch, useSelector } from "react-redux";
import { logout, setUserFromLocalStorage } from "../store/features/userSlice";
import { toast } from "react-toastify";

const Header = ({ sidebarIsOpen, setSidebarIsOpen }) => {
  const categories = ["Category1", "Category2", "Category3"];
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (!user.token && localStorage.getItem("user")) {
      dispatch(setUserFromLocalStorage());
    }
  }, [dispatch, user.token]);

  const handleLogout = () => {
    dispatch(logout());
    toast.success("Logout successful");
  };

  return (
    <>
      <header>
        <Navbar className="color-nav" variant="dark" expand="lg">
          <Container>
            <Button
              variant="dark"
              onClick={() => setSidebarIsOpen(!sidebarIsOpen)}
            >
              <i className="fas fa-bars"></i>
            </Button>

            <LinkContainer to="/">
              <Navbar.Brand className="market-lab">Market Lab</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <SearchBox />

              <Nav className="me-auto w-100 justify-content-end">
                <Link to={`/cart`} className="nav-link">
                  Cart
                </Link>
                {user.token ? (
                  <>
                    <Link className="nav-link" to="/contact">
                      Contact
                    </Link>
                    <Link className="nav-link" to={"/blog"}>
                      Blog
                    </Link>
                    <Link className="nav-link" to={"/about"}>
                      About
                    </Link>
                    <Link className="nav-link" to={"/"} onClick={handleLogout}>
                      Logout
                    </Link>
                  </>
                ) : (
                  <>
                    <Link className="nav-link" to="/signin">
                      Sign In
                    </Link>
                  </>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>

      <div
        className={
          sidebarIsOpen
            ? "active-nav side-navbar d-flex justify-content-between flex-wrap flex-column"
            : "side-navbar d-flex justify-content-between flex-wrap flex-column"
        }
      >
        <Nav className="flex-column text-white w-100 p-2">
          <Nav.Item>
            <strong>Categories</strong>
          </Nav.Item>
          {categories.map((category) => (
            <Nav.Item key={category}>
              <Link
                id="categories"
                to="#"
                onClick={() => setSidebarIsOpen(false)}
              >
                <Nav.Link>{category}</Nav.Link>
              </Link>
            </Nav.Item>
          ))}
        </Nav>
      </div>
    </>
  );
};

export default Header;
