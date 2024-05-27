import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Field, Form, Formik } from "formik";
import { setNavStatus } from "../../redux/actions";
import { signIn } from "./utils/auth";
import PropTypes from "prop-types";

const Login = ({ setNavStatus }) => {
    useEffect(() => {
        setNavStatus("loginPage");

        return () => {
            setNavStatus("default");
        };
    }, []);

    return (
        <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={(values) => signIn(values.email, values.password)}
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
                            <button type="submit" className="auth-submit">
                                Sign In
                            </button>
                        </Form>
                    </div>
                );
            }}
        </Formik>
    );
};

Login.propTypes = {
    setNavStatus: PropTypes.func,
};

export default connect(null, { setNavStatus })(Login);
