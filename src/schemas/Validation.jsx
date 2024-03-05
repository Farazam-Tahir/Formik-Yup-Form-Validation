import * as yup from 'yup';

export const Validation = yup.object({
    name : yup.string().min(3).max(16).required('Username is required'),
    email : yup.string().email().required('Username is required'),
    password : yup.string().min(6).required('Password should be minimum 6 characters'),
    confirmPassword : yup.string().required().oneOf([yup.ref('password'), null],'Password must match')
})