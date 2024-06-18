import React, { memo } from "react";
import { Form } from "react-bootstrap";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { postResponse } from "../../services/API/CommonAPI";

const InfoSchema = yup.object().shape({
  name: yup.string().required("Please Enter Name"),
  message: yup.string().required("Please Enter Message"),
  subject: yup.string().required("Please Enter Subject"),
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

function ContactUs() {
  return (
    <section>
      
      <div className="Contact_Us mt-120 mb-50">
        <div className="container">
          <div className="row g-4 align-items-center justify-content-center">
            <div className="col-xl-8 col-lg-10 col-12">
              <div className="Contact_Form">
                <h3>Contact Form</h3>
                <p>
                  We will respond to your inquiry as quickly as possible. In
                  order to help us review and consistently improve our services,
                  we appreciate any feedback.
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
                  onSubmit={async (value, { resetForm }) => {
                    const response = await postResponse(`public/message`, {
                      fullname: value.name,
                      phone: value.phone,
                      email: value.email,
                      message: value.message,
                      subject: value.subject
                    });
                    if (response.status === "success") {
                      resetForm();
                    }
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
                            Subject <span className="Required_Field">*</span>
                          </Form.Label>
                          <Form.Control
                            type="Text"
                            placeholder="Enter subject"
                            autoComplete="newPassword"
                            onBlur={handleBlur}
                            onChange={(e) => {
                              setFieldValue("subject", e.target.value);
                            }}
                            name="subject"
                            value={values?.subject}
                          />
                          {touched?.subject && errors?.subject && (
                            <>
                              <div className="error-text">
                                {errors?.subject}
                              </div>
                            </>
                          )}
                        </Form.Group>
                      </div>
                      <div className="col-12">
                        <Form.Group controlId="formBasicPassword">
                          <Form.Label>
                            Your Message{" "}
                            <span className="Required_Field">*</span>
                          </Form.Label>
                          <Form.Control
                            type="Text"
                            onBlur={handleBlur}
                            placeholder="Message"
                            as="textarea"
                            rows={3}
                            onChange={(e) => {
                              setFieldValue("message", e.target.value);
                            }}
                            name="message"
                            value={values?.message}
                          />
                          {touched?.message && errors?.message && (
                            <>
                              <div className="error-text">
                                {errors?.message}
                              </div>
                            </>
                          )}
                        </Form.Group>
                      </div>
                      <div className="col-12">
                        <button
                          type="button"
                          className=" CommonButton  btn btn-link "
                          onClick={handleSubmit}
                        >
                          Send Message
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

export default memo(ContactUs);
