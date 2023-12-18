import * as yup from 'yup';

const LoginValidation = yup.object({
  email: yup
    .string()
    .label('email')
    .email('Enter valid email ')
    .required('Email is required'),
  password: yup.string().label('password').required('Password is required'),
});

const SignupValidation = yup.object({
  name: yup.string().label('name').required('Name is required'),
  email: yup
    .string()
    .label('email')
    .email('Enter valid email')
    .required('Email is required'),
  password: yup.string().label('password').required('Password is required'),
});

const CardDetailValidation = yup.object({
    cardName: yup.string().label('cardName').required('Name is required'),
    cardNumber: yup
      .string()
      .label('cardNumber')
      .matches(/^\d{16}$/, 'Must be a 16-digit number') // Adjust the regex based on your card number requirements
      .required('Card Number is required'),
    password: yup.string().label('Password').required('Password is required'),
    expireDate: yup
      .string()
      .label('expireDate')
      .matches(/^\d{2}\/\d{2}$/, 'Must be in MM/YY format') // Adjust the regex based on your expiration date requirements
      .required('Expiration Date is required'),
    ccv: yup
      .string()
      .label('ccv')
      .matches(/^\d{3}$/, 'Must be a 3-digit number') // Adjust the regex based on your CCV requirements
      .required('CCV is required'),
  });
  
  


export {
  LoginValidation,
  SignupValidation,
  CardDetailValidation
};
