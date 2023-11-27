"use client";
import { Formik } from "formik";
import axios from "axios";
import styles from "../../styles/contact.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface FormValues {
  name: string;
  email: string;
  message: string;
}
export default function Form() {
  return (
    <article>
      <Formik
        initialValues={{
          name: "",
          email: "",
          message: "",
        }}
        validate={(values: FormValues) => {
          const errors: Partial<FormValues> = {};
          if (!values.name) {
            errors.name = "Requerido";
          }
          if (!values.email) {
            errors.email = "Requerido";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Correo electrónico no válido";
          }
          if (!values.message) {
            errors.message = "Requerido";
          }

          return errors;
        }}
        onSubmit={async (values, { resetForm }) => {
          try {
            const response = await axios.post(
              `https://formspree.io/${process.env.SEND_EMAIL}`,
              values
            );
            if (response.status === 200) {
              toast.success("El correo ha sido enviado correctamente!");
              resetForm();
            }
          } catch (error) {
            console.log(error);
            toast.error("Ha ocurrido un error al enviar el correo.");
          }
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <form className={styles.form} onSubmit={handleSubmit}>
            <p className="text-center text-black font-medium">
              Por favor, complete la siguiente información y me comunicaré con
              usted lo antes posible. Gracias.
            </p>
            <ul className="w-full flex flex-col gap-8">
              <li className="w-full flex flex-col gap-4">
                <label className="font-medium text-slateGray" htmlFor="name">
                  Nombre y Apellido
                </label>

                <input
                  className="border border-dimGray outline-none rounded-md shadow-md py-2 text-black pl-2"
                  type="text"
                  id="FirstNameAndLastName"
                  placeholder="ej: Martín Pérez"
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />

                {errors.name && touched.name && (
                  <p className="text-[#b91c1c]">{errors.name}</p>
                )}
              </li>
              <li className="w-full flex flex-col gap-2">
                <label className="font-medium text-slateGray" htmlFor="email">
                  Email
                </label>

                <input
                  className="border border-dimGray outline-none shadow-md rounded-md py-2 text-black pl-2"
                  type="email"
                  id="email"
                  placeholder="ej: correo@correo.com"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                {errors.email && touched.email && (
                  <p className="text-[#b91c1c]">{errors.email}</p>
                )}
              </li>
              <li className="w-full flex flex-col gap-2">
                <label className="font-medium text-slateGray" id="message">
                  Deja tu mensaje aquí
                </label>

                <textarea
                  className="h-[120px] border border-dimGray rounded-md shadow-md resize-none outline-none pl-2 pt-2 overflow-y-auto lg:h-[150px]"
                  id="message"
                  placeholder="Escribe algo"
                  name="message"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.message}
                ></textarea>
                {errors.message && touched.message && (
                  <p className="text-[#b91c1c]">{errors.message}</p>
                )}
              </li>
            </ul>
            <button className={styles.form__btn} type="submit">
              Enviar <i className="bx bx-send"></i>
            </button>
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
          </form>
        )}
      </Formik>
    </article>
  );
}
