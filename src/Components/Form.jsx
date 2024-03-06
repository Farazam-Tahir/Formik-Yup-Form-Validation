import React, { useState } from 'react';
import {useFormik} from 'formik';
import { SignUpSchema } from '../schemas';

const Form = () => {

    const [inputData, setInputData] = useState({
        username : '',
        email : '',
        password : '',
        confirmPassword : ''
    });

    const attributes = [
        {
            name : 'username',
            type : 'text',
            placeholder : 'Enter your username',
            label : 'Username'
        },
        {
            name : 'email',
            type : 'email',
            placeholder : 'Enter your email',
            label : 'Email'
        },
        {
            name : 'password',
            type : 'password',
            placeholder : 'Password',
            label : 'Password'
        },
        {
            name : 'confirmPassword',
            type : 'password',
            placeholder : 'Confirm Password',
            label : 'Confirm Password'
        }
    ];

    const initialValues = {
        username : '',
        email : '',
        password : '',
        confirmPassword : ''
    }
    const {values, errors, touched, handleBlur, handleChange, handleSubmit} = useFormik({
        initialValues : initialValues,
        validationSchema : SignUpSchema,
        onSubmit : (values)=>{
                console.log(values);
            }

    });


  return (
    <form onSubmit={handleSubmit}>
      {attributes.map((attributes)=>{
        return(
        <div key={attributes.name} className='inputData'>
        <label htmlFor={attributes.name}>{attributes.label}</label>
        <input id={attributes.name} {...attributes}
        onChange={handleChange} onBlur={handleBlur} value={values[attributes.name]}/>
        {errors[attributes.name] && touched[attributes.name] ? <span className='errorMessage'>{errors[attributes.name]}</span>: null}
        </div>
      )})}
      <button type='submit'>Submit</button>
    </form>
  )
}

export default Form
