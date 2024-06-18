import React, { memo } from "react";
import { Form } from "react-bootstrap";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { postResponse } from "../../services/API/CommonAPI";

const InfoSchema = yup.object().shape({
  name: yup.string().required("Please Enter Name"),
  message: yup.string().required("Please Enter Message"),
  address: yup.string().required("Please Enter address"),
  email: yup
    .string()
    .email("Must be a valid email")
    .max(255)
    .required("Please Enter Valid Email"),
  phone: yup
    .string()
    .nullable()
    .required("Please Enter Phone Number")
    .min(8, "Minimum 8 Number Required")
    .max(12, "Maximum 12 Numbers can be accepted")
});

function SoilTeseting() {
  return (
    <section>
      
      <div className="Contact_Us mt-120 mb-50">
        <div className="container">
          <div className="row g-4 align-items-center justify-content-center">
            <div className="col-xl-8 col-lg-10 col-12">
              <div className="Contact_Form">
                <h3>Soil Testing</h3>
                <p>
                We offer two types of soil testing services: pick-up and drop-off. With our pick-up option, you 
                have the convenience of having the soil sample collected from your location. Please note that an 
                additional fee for courier services applies in this case. Alternatively, you can choose our drop-off
                 service, where you personally deliver the soil sample to a laboratory address conveniently located near you.
                </p>
                <Formik
                  enableReinitialize={true}
                  validationSchema={InfoSchema}
                  initialValues={{
                    name: "",
                    message: "",
                    subject: "",
                    email: "",
                    phone: ""
                  }}
                  onSubmit={() => {
                    window.location.href="/Payment";
                  }}
                >
                  {({
                    handleSubmit,
                    handleBlur,
                    setFieldValue,
                    values,
                    touched,
                    errors
                  }) => (
                    <div className="row g-4 mt-20">
                      <div className="col-xl-6 col-12">
                        <Form.Group controlId="formBasicPassword">
                          <Form.Label>
                            Your Name <span className="Required_Field">*</span>
                          </Form.Label>
                          <Form.Control
                            type="Text"
                            placeholder="Enter name"
                            onBlur={handleBlur}
                            onChange={(e) => {
                              setFieldValue("name", e.target.value);
                            }}
                            name="name"
                            value={values?.name}
                          />
                          {touched?.name && errors?.name && (
                            <>
                              <div className="error-text">{errors?.name}</div>
                            </>
                          )}
                        </Form.Group>
                      </div>
                      <div className="col-xl-6 col-12">
                        <Form.Group controlId="formBasicPassword">
                          <Form.Label>
                            Email <span className="Required_Field">*</span>
                          </Form.Label>
                          <Form.Control
                            type="mail"
                            placeholder="Enter email "
                            autoComplete="newPassword"
                            onBlur={handleBlur}
                            onChange={(e) => {
                              setFieldValue("email", e.target.value);
                            }}
                            name="email"
                            value={values?.email}
                          />
                          {touched?.email && errors?.email && (
                            <>
                              <div className="error-text">{errors?.email}</div>
                            </>
                          )}
                        </Form.Group>
                      </div>
                      <div className="col-xl-6 col-12">
                        <Form.Group controlId="formBasicPassword">
                          <Form.Label>
                            Phone No. <span className="Required_Field">*</span>
                          </Form.Label>
                          <Form.Control
                            type="tel"
                            placeholder="Enter Phone no "
                            onBlur={handleBlur}
                            autoComplete="newPassword"
                            name="phone"
                            value={values?.phone}
                            pattern="[0-9]*"
                            onInput={(evt) => {
                              const phoneNumber =
                                evt.target.validity.valid &&
                                evt.target?.value?.length < 13
                                  ? evt.target.value
                                  : values?.phone;
                              setFieldValue("phone", phoneNumber);
                            }}
                          />
                          {touched?.phone && errors?.phone && (
                            <>
                              <div className="error-text">{errors?.phone}</div>
                            </>
                          )}
                        </Form.Group>
                      </div>
                      <div className="col-xl-6 col-12">
                        <Form.Group controlId="formBasicPassword">
                          <Form.Label>
                            Address <span className="Required_Field">*</span>
                          </Form.Label>
                          <Form.Control
                            type="Text"
                            placeholder="Enter address"
                            autoComplete="newPassword"
                            onBlur={handleBlur}
                            onChange={(e) => {
                              setFieldValue("address", e.target.value);
                            }}
                            name="address"
                            value={values?.address}
                          />
                          {touched?.subject && errors?.subject && (
                            <>
                              <div className="error-text">
                                {errors?.address}
                              </div>
                            </>
                          )}
                        </Form.Group>
                      </div>
                      
                      <Form.Group
                          className="mt-20"
                          controlId="formGroupSelect"
                        >
                          <Form.Label>Type of Service</Form.Label>
                          <Form.Select
                            className="form-control"
                            id="inlineFormCustomSelect"
                            name="user_type"
                            onBlur={handleBlur}
                            value={values.user_type}
                            // isValid={touched.user_type && !errors.user_type}
                            onChange={(e) => {
                              setFieldValue("type", e.target.value);
                            }}
                          >
                            <option value="0" disabled selected>
                              Select User Type
                            </option>
                                  <option value={`1`}>Pick UP</option>
                                  <option value={`2`}>Drop Off</option>
                          </Form.Select>
                          {errors.user_type && touched.user_type ? (
                            <div className="error-text">{errors.user_type}</div>
                          ) : null}
                        </Form.Group>
                      <div className="col-12">
                        <button
                          type="button"
                          className=" CommonButton  btn btn-link "
                          onClick={() => window.location.href = "/Payment"}
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(SoilTeseting);
