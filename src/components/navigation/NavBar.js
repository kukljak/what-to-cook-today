import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Navbar = ({ navStatus }) => {
    return (
        <nav className="navbar">
            <Link to="/" className="logo">
                Just try it in kitchen
            </Link>
            <div className="auth">
                {navStatus !== "loginPage" && (
                    <Link to="/login" className="login">
                        Login
                    </Link>
                )}
                {navStatus !== "registerPage" && (
                    <Link to="registration" className="register">
                        Register
                    </Link>
                )}
            </div>
        </nav>
    );
};

const mapStateToProps = function (state) {
    return {
        navStatus: state.navStatus,
    };
};

Navbar.propTypes = {
    navStatus: PropTypes.oneOf(["default", "loginPage", "registerPage"]),
};

export default connect(mapStateToProps)(Navbar);
