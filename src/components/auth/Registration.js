import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Field, Form, Formik } from "formik";
import { setNavStatus } from "../../redux/actions";
import { signUp } from "./utils/auth";
import PropTypes from "prop-types";

const Registartion = ({ setNavStatus }) => {
    useEffect(() => {
        setNavStatus("registerPage");

        return () => {
            setNavStatus("default");
        };
    }, []);

    return (
        <Formik
            initialValues={{ email: "", password: "", confirmPassword: "" }}
            onSubmit={(values) => signUp(values.email, values.password)}
        >
            {() => {
                return (
                    <div className="auth-container">
                        <Form className="auth-form" id="auth-form">
                            <Field
                                className="auth-email auth-input"
                                type="email"
                                name="email"
                                placeholder="Email"
                                required
                            />
                            <Field
                                className="auth-password auth-input"
                                type="password"
                                name="password"
                                placeholder="Password"
                                required
                            />
                            <Field
                                className="auth-password-confirm auth-input"
                                type="password"
                                name="confirmPassword"
                                placeholder="Confirm Password"
                                required
                            />
                            <button type="submit" className="auth-submit">
                                Sign Up
                            </button>
                        </Form>
                    </div>
                );
            }}
        </Formik>
    );
};

Registartion.propTypes = {
    setNavStatus: PropTypes.func,
};

export default connect(null, { setNavStatus })(Registartion);
