import React, { useState } from 'react';
import {useFormik} from 'formik';
import { Validation } from '../schemas/Validation';

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
            type : 'confirmPassword',
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
    const {values, errors, handleBlur, handleChange, handleSubmit} = useFormik({
        initialValues : initialValues,
        validationSchema : Validation,
        onSubmit : (values)=>{
            console.log(values);
        }

    });
  return (
    <form onSubmit={handleSubmit}>
      {attributes.map((attributes)=>(
        <div key={attributes.name} className='inputData'>
        <label htmlFor={attributes.name}>{attributes.label}</label>
        <input id={attributes.name} {...attributes}
        onChange={handleChange} onBlur={handleBlur} value={values[attributes.name]}/>
        </div>
      ))}
      <button type='submit'>Submit</button>
    </form>
  )
}

export default Form
