import React, { Component } from "react";
import logo from "../images/logo.svg";
import { FaAlignRight, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  state = {
    isOpen: false
  };
  handleToggle = () => this.setState({ isOpen: !this.state.isOpen });
  render() {
    const {userState, logOut} = this.props;
    const { loggedIn } = userState;
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img src={logo} alt="Beach Resort" />
            </Link>
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            >
              <FaAlignRight className="nav-icon" />
            </button>
          </div>
          <div
            className={
              this.state.isOpen
                ? "nav-links-container show-nav"
                : "nav-links-container"
            }
          >
            <ul className={"nav-links"}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/rooms">Rooms</Link>
              </li>
            </ul>
            <ul className={"nav-links nav-links--user"}>
              <li>
                {loggedIn ? (
                  <Link to="/" onClick={logOut}>LogOut</Link>
                ) : (
                  <Link to="/user/registration">SignUp</Link>
                )}
              </li>
              <li>
                {loggedIn ? (
                  <Link to="/user/account">
                    <span>
                      <FaUser />
                    </span>{" "}
                    Account
                  </Link>
                ) : (
                  <Link to="/user/login">SignIn</Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
