import { useRef } from 'react';
import { useRouter } from 'next/router';
import { Field, ErrorMessage, useFormik, FormikProvider } from 'formik';
import { FaWhatsapp } from 'react-icons/fa';

import { phoneValidator } from '../helpers';
import { getFromClipboard } from '../helpers/getFromClipboard';

interface FormData {
  text: string;
  phoneNumber: string;
}

const WaForm = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  function redirect(data: FormData) {
    const cleanedPhoneNumber = data.phoneNumber.trim().replaceAll(' ', '');
    router.push(
      `https://wa.me/${
        cleanedPhoneNumber.includes('+595') ||
        cleanedPhoneNumber.startsWith('595')
          ? cleanedPhoneNumber
          : `+595${cleanedPhoneNumber}`
      }?text=${data.text}`,
    );
  }

  const validatePhoneNumber = (values: FormData) => {
    const errors: { phoneNumber?: string } = {};
    const { validNumber } = phoneValidator(
      values.phoneNumber.trim().replaceAll(' ', ''),
    );
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

  const handleClipboard = async () => {
    try {
      const text = await getFromClipboard();

      if (text) {
        formik.setFieldValue('phoneNumber', text);
      } else {
        inputRef.current?.focus();
      }
    } catch (error) {
      console.error(error);
      formik.setErrors({
        phoneNumber: `Error al pegar el número de teléfono, por favor concede los permisos o pegalo manualmente.`,
      });
    }
  };

  return (
    <>
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
            <button
              type="button"
              className="btn btn-success"
              onClick={handleClipboard}
            >
              {'Pegar número'}
            </button>
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
        </form>
      </FormikProvider>
      <button
        className="btn btn-large btn-success mt-3"
        disabled={!formik.dirty}
        onClick={() => redirect(formik.values)}
      >
        Ir al whatsapp <FaWhatsapp />
      </button>
    </>
  );
};

export default WaForm;
