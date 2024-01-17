import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const RegisterValidationSchema = Yup.object().shape({
 username: Yup.string()
    .min(3, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
 password: Yup.string()
    .min(6, 'Password should be at least 6 characters').max(20,'not more then 20 characters')
    .required('Required'),
 confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Required'),
});

export const initialValues = {
 username: '',
 password: '',
 confirmPassword: '',
};

export default RegisterValidationSchema