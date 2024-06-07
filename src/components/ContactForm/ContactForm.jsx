import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import { nanoid } from "nanoid";
import css from "./ContactForm.module.css";



const ContactForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={Yup.object({
        name: Yup.string().min(3).max(50).required(),
        number: Yup.string().min(3).max(50).required(),
      })}
      onSubmit={(values, { resetForm }) => {
        onSubmit({ ...values, id: nanoid() });
        resetForm();
      }}
    >
      <Form className={css.formContainer}>

        <div className={css.box}>
          <label className={css.label} htmlFor = "name">
            Name:
          </label>
          <Field className={css.field} type = "text" id = "name" name = "name"/>
          <ErrorMessage name="name" />
        </div>

        <div className={css.box}>
          <label className={css.label} htmlFor = "number" >
            Number:
          </label>
          <Field className={css.field} type="text" id="number" name="number" />
          <ErrorMessage name = "number" />
        </div>

        <button className={css.button} type = "submit">
          Add contact
        </button>

      </Form>
    </Formik>
  );
};

export default ContactForm;