import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Authentication } from "../../services/API/LogInAPI";
import { Formik } from "formik";
import * as yup from "yup";
import { GlobalContext } from "../../context/States/GlobalState";
// import { getResponse } from "../../Container/API/CommonAPI";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Must be a valid email")
    .max(255)
    .required("Please Enter Valid Email"),
  password: yup.string().max(50).required("Please Enter Password")
});
export default function LogIn() {
  const token =
    localStorage.getItem("login");
  const login =
    localStorage.getItem("login");
  const data = typeof login == "string" ? JSON.parse(login) : login;

  const { storeLogin } = React.useContext(GlobalContext);

  const [state, setState] = React.useState({
    password: undefined,
    email: undefined
  });
  const handleSubmitButton = async () => {
    const response = await Authentication("admin/login", state);
    response && (await storeLogin(response?.payload));
          window.location.href = "/";
    return response;
  };

  React.useEffect(() => {
    if (token) {
      // if (!data?.subscrition) {
      //   window.location.href = "/Subscription";
      // } else
      {
        window.location.href = "/";
      }
    }
  }, []);
  return (
    <>
      <Formik
        validationSchema={schema}
        onSubmit={handleSubmitButton}
        initialValues={{
          email: state.email,
          password: state.password,
        }}
      >
        {({
          handleSubmit,
          setFieldValue,
          isSubmitting,
          values,
          touched,
          errors,
          handleBlur
        }) => (
          <section className="CommonForm  mb-50">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-6 col-lg-8 col-md-10 col-12">
                  <div className="CommonForm_Outer">
                    <h2 className="text-center">Log In</h2>
                    <Form noValidate onSubmit={handleSubmit} className="mt-15">
                      <Form.Group controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={values.email}
                          onBlur={handleBlur}
                          onChange={(e) => {
                            setFieldValue("email", e.target.value);
                            setState({ ...state, email: e.target.value });
                          }}
                          // isValid={touched.email && !errors.email}
                          placeholder="Enter email"
                        />
                        {errors.email && touched.email ? (
                          <div className="error-text">{errors.email}</div>
                        ) : null}
                      </Form.Group>

                      <Form.Group
                        className="mt-20"
                        controlId="formGroupPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          name="password"
                          onBlur={handleBlur}
                          value={values.password}
                          onChange={(e) => {
                            setFieldValue("password", e.target.value);
                            setState({ ...state, password: e.target.value });
                          }}
                          // isValid={touched.password && !errors.password}
                          placeholder="Enter Password"
                        />
                        {errors.password && touched.password ? (
                          <div className="error-text">{errors.password}</div>
                        ) : null}
                      </Form.Group>

                      <Button
                        variant="link"
                        disabled={isSubmitting}
                        className="w-100 mt-30 CommonButton"
                        type="submit"
                      >
                        Log In
                      </Button>
                      <span className="mt-15 d-block text-center fw-normal PageLink">
                        {"Don't have an account?"}{" "}
                        <Link to="/SignUp" className="text-blue">
                          Sign Up{" "}
                        </Link>
                      </span>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </Formik>
    </>
  );
}
