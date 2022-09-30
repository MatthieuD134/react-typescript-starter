import { Form, Formik, FormikHelpers } from 'formik';
import React, { useRef, useState } from 'react';
import SimpleField from '../common/CustomField/SimpleField';
import { RiUserFill } from 'react-icons/ri';
import { MdEmail } from 'react-icons/md';
import * as yup from 'yup';
import styles from './index.module.scss';
import emailjs from 'emailjs-com';
import { PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID } from '../../constants/emailjsConfig';

const initialValues = {
  name: '',
  email: '',
  message: '',
};

interface Values {
  name: string;
  email: string;
  message: string;
}

const validationSchema = yup.object().shape({
  name: yup.string().required('Please enter a valid name'),
  email: yup.string().required('Please enter a valid email').email('Please enter a valid email'),
  message: yup.string().required('Please enter a valid message'),
});

const ContactForm = () => {
  const ref = useRef<HTMLFormElement>(null);

  const [disable, setDisable] = useState(false);

  const onSubmit = (values: Values, formikHelpers: FormikHelpers<Values>) => {
    if (ref.current) {
      setDisable(true);
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, ref.current, PUBLIC_KEY).then(
        () => {
          formikHelpers.resetForm();
          setDisable(false);
        },
        (error) => {
          console.log(error.text);
          setDisable(false);
        }
      );
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ errors, touched, dirty, isValid }) => (
        <Form className={styles.form} ref={ref}>
          <SimpleField
            name='name'
            label='Name'
            icon={<RiUserFill />}
            error={errors.name}
            touched={touched.name}
          />
          <SimpleField
            name='email'
            label='Email'
            icon={<MdEmail />}
            error={errors.email}
            touched={touched.email}
          />
          <SimpleField
            name='message'
            label='Message'
            error={errors.message}
            touched={touched.message}
            as='textarea'
          />
          <button
            className={styles.submitBtn}
            type='submit'
            disabled={!(dirty && isValid) || disable}
          >
            {disable ? 'Sending Message...' : 'Send Message'}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
