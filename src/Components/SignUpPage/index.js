import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link, Redirect, useLocation } from "react-router-dom";
import { Authentication } from "../../services/API/LogInAPI";
import { Formik } from "formik";
import * as yup from "yup";
import { getResponse } from "../../services/API/CommonAPI";
import { GlobalContext } from "../../context/States/GlobalState";

const schema = yup.object().shape({
  firstName: yup.string().required("Please Enter First Name"),
  lastName: yup.string().required("Please Enter Last Name"),
  email: yup
    .string()
    .email("Must be a valid email")
    .max(255)
    .required("Please Enter Valid Email"),
  password: yup.string().max(50).required("Please Enter Password"),
  user_type: yup.string().required("Please Select User Type")
});
export default function SignUpPage() {
  const location = useLocation();
  const { storeLogin } = React.useContext(GlobalContext);
  const [state, setState] = React.useState({
    firstName: undefined,
    lastName: undefined,
    password: undefined,
    email: undefined,
    userType: undefined,
    redirect: false
  });

  const defaultData = async () => {
      const data = await getResponse(`role/`)
      setState({...state,role:data?.payload?.allRole})
  };

  const handleSubmitButton = async () => {

    const response = await Authentication("admin/signup", {
      firstName: state.firstName,
      lastName: state.lastName,
      role: state.userType,
      email: state.email,
      password: state.password
    });
    response && (await storeLogin(response?.payload));
    if (response?.result == 0) {
      window.location.href = "/";
    }
    return response;
  };

  React.useEffect(() => {
    defaultData()
  }, [])
  
  return (
    <>
      {/* {state.redirect ? (
        <>
          <Redirect
            to={{
              pathname: "/OTP",
              state: {
                user_type_id: state.userType,
                email: state.email,
                password: state.password,
                url: location.state?.url,
                id: location.state?.id
              }
            }}
          ></Redirect>
        </>
      ) : ( */}
        <Formik
          validationSchema={schema}
          onSubmit={handleSubmitButton}
          initialValues={{
            firstName: state.firstName,
            lastName: state.lastName,
            user_type: state.userType,
            email: state.email,
            password: state.password
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
                      <h2 className="text-center">Sign Up</h2>
                      <Form
                        noValidate
                        onSubmit={handleSubmit}
                        className="mt-15"
                      >
                        <Form.Group controlId="FirstName">
                          <Form.Label>First Name</Form.Label>
                          <Form.Control
                            onChange={(e) => {
                              setFieldValue("firstName", e.target.value);
                              setState({ ...state, firstName: e.target.value });
                            }}
                            onBlur={handleBlur}
                            name="firstName"
                            value={values.firstName}
                            // isValid={touched.firstName && !errors.firstName}
                            placeholder="Enter First Name"
                          />
                          {errors.firstName && touched.firstName ? (
                            <div className="error-text">{errors.firstName}</div>
                          ) : null}
                        </Form.Group>

                        <Form.Group className="mt-20" controlId="LastName">
                          <Form.Label>Last Name</Form.Label>
                          <Form.Control
                            onChange={(e) => {
                              setFieldValue("lastName", e.target.value);
                              setState({ ...state, lastName: e.target.value });
                            }}
                            name="lastName"
                            onBlur={handleBlur}
                            value={values.lastName}
            
                            // isValid={touched.lastName && !errors.lastName}
                            placeholder="Enter Last Name"
                          />
                          {errors.lastName && touched.lastName ? (
                            <div className="error-text">{errors.lastName}</div>
                          ) : null}
                        </Form.Group>

                        <Form.Group
                          className="mt-20"
                          controlId="formGroupEmail"
                        >
                          <Form.Label>Email address</Form.Label>
                          <Form.Control
                            type="email"
                            onBlur={handleBlur}
                            onChange={(e) => {
                              setFieldValue("email", e.target.value);
                              setState({ ...state, email: e.target.value });
                            }}
                            name="email"
                            value={values.email}
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
                            onBlur={handleBlur}
                            onChange={(e) => {
                              setFieldValue("password", e.target.value);
                              setState({ ...state, password: e.target.value });
                            }}
                            name="password"
                            value={values.password}
                            // isValid={touched.password && !errors.password}
                            placeholder="Enter Password"
                          />
                          {errors.password && touched.password ? (
                            <div className="error-text">{errors.password}</div>
                          ) : null}
                        </Form.Group>
                        
                        <Form.Group
                          className="mt-20"
                          controlId="formGroupSelect"
                        >
                          <Form.Label>Type of User</Form.Label>
                          <Form.Select
                            className="form-control"
                            id="inlineFormCustomSelect"
                            name="user_type"
                            onBlur={handleBlur}
                            value={values.user_type}
                            // isValid={touched.user_type && !errors.user_type}
                            onChange={(e) => {
                              setFieldValue("user_type", e.target.value);
                              setState({ ...state, userType: e.target.value });
                            }}
                          >
                            <option value="0" disabled selected>
                              Select User Type
                            </option>
                              {state?.role?.map((e)=>{
                                return (
                                  <option value={`${e._id}`}>{e.roleName}</option>
                                )
                              })}
                          </Form.Select>
                          {errors.user_type && touched.user_type ? (
                            <div className="error-text">{errors.user_type}</div>
                          ) : null}
                        </Form.Group>
                        <Button
                          variant="link"
                          disabled={isSubmitting}
                          className="w-100 mt-30 CommonButton"
                          type="submit"
                        >
                          Sign Up
                        </Button>
                        <span className="mt-15 d-block text-center fw-normal PageLink">
                          Already a member ?
                          <Link to="/login" className="text-blue">
                            Log In
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
      {/* )} */}
    </>
  );
}
