import React from "react";
import { CiMail } from "react-icons/ci";
import { IoIosCall } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { validationSchema } from "./Validation/Validation";

function Contact() {
  return (
    <>
      <div id="Contact" className="md:w-9/12 w-10/12 mx-auto ">
        {/* Headings */}
        <div className="w-fit text-center mx-auto mb-10">
          <p className="text-md font-semibold text-slate-500">Contact Us</p>
          <h1 className="my-1 text-2xl md:text-3xl font-semibold text-blue-950">
            Get in Touch
          </h1>
        </div>

        <div className="md:flex justify-center gap-10 items-center">
          <div className="md:w-1/2">
            <h1 className="md:text-3xl text-xl  font-semibold">
              Send us Message
            </h1>
            <p className="text-justify py-3">
              Feel free to reach out through contact form or find our contact
              information below. Your feedback, questions, and suggestions are
              important to us as we strive to provide exceptional service to our
              university community.
            </p>
            <div className="flex  gap-2 py-2">
              <CiMail size={20} />
              <p>edusity@gmail.com</p>
            </div>
            <div className="flex gap-2 py-2">
              <IoIosCall size={20} />
              <p>+923123456789</p>
            </div>
            <div className="flex gap-1 py-2">
              <CiLocationOn size={30} />
              <p>
                Virtual University of Technology 1234 Online Campus Drive
                Virtual City, VR 56789
              </p>
            </div>
          </div>
          <div className="flex items-center md:w-1/2 justify-center md:my-0 my-5">
            <div className="w-full max-w-lg   p-3 shadow-md">
              <Formik
                initialValues={{ name: "", phone: "", email: "", message: "" }}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                  console.log(values);
                  setSubmitting(false);
                  resetForm();
                }}
              >
                {({ isSubmitting }) => (
                  <Form>
                    <div className="mb-4">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-2"
                      >
                        Name
                      </label>
                      <Field
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-4 py-2 bg-slate-600 border rounded-lg text-white focus:outline-none"
                      />
                      <ErrorMessage
                        name="name"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium mb-2"
                      >
                        Phone Number
                      </label>
                      <Field
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-2 bg-slate-600 border rounded-lg text-white focus:outline-none"
                      />
                      <ErrorMessage
                        name="phone"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-2"
                      >
                        Email
                      </label>
                      <Field
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-2 bg-slate-600 border rounded-lg text-white focus:outline-none"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium mb-2"
                      >
                        Message
                      </label>
                      <Field
                        as="textarea"
                        id="message"
                        name="message"
                        rows="4"
                        className="w-full px-4 py-2 bg-slate-600 border rounded-lg text-white focus:outline-none"
                      />
                      <ErrorMessage
                        name="message"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="w-full px-4 py-2 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        disabled={isSubmitting}
                      >
                        Submit
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
