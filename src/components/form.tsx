import { useRef } from 'react';
import { Field, ErrorMessage, useFormik, FormikProvider } from 'formik';
import { FaWhatsapp } from 'react-icons/fa';

import { phoneValidator } from '../helpers';

interface FormData {
  text: string;
  phoneNumber: string;
}

const WaForm = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  function redirect(data: FormData) {
    const cleanedPhoneNumber = data.phoneNumber.trim().replaceAll(' ', '');
    window.location.href = `https://wa.me/+595${cleanedPhoneNumber}?text=${data.text}`;
  }

  const validatePhoneNumber = (values: FormData) => {
    const errors: { phoneNumber?: string } = {};
    const { validNumber } = phoneValidator(values.phoneNumber);
    if (!validNumber) errors.phoneNumber = 'Número de teléfono inválido';
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      phoneNumber: '',
      text: '',
    },
    onSubmit: redirect,
    validate: validatePhoneNumber,
  });

  return (
    <FormikProvider value={formik}>
      <form
        className="container"
        style={{
          maxWidth: '600px',
        }}
      >
        <div className="input-group my-2">
          <Field
            ref={inputRef}
            name="phoneNumber"
            type="text"
            className={`form-control ${
              formik.errors.phoneNumber ? 'is-invalid' : 'is-valid'
            }`}
            placeholder="Número de teléfono"
          />
        </div>
        <ErrorMessage name="phoneNumber" />
        <div className="input-group my-2">
          <Field
            name="text"
            type="textarea"
            className="form-control"
            rows={3}
            placeholder="Introduce el texto que deseas enviar"
            component="textarea"
          />
        </div>
        <button
          className="btn btn-large btn-success mt-3"
          disabled={!formik.dirty}
          type="submit"
        >
          Ir al whatsapp <FaWhatsapp />
        </button>
      </form>
    </FormikProvider>
  );
};

export default WaForm;
