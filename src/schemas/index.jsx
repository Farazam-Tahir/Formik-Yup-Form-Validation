import * as     Yup from 'yup';

export const SignUpSchema = Yup.object({
    username : Yup.string().min(3).max(16).required('Username is required'),
    email : Yup.string().email().required('Email is required'),
    password : Yup.string().min(6).required('Password should be minimum 6 characters'),
    confirmPassword : Yup.string()
    .required('Password must match')
    .oneOf([Yup.ref('password'), null],'Password must match')
})