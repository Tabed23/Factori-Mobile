import * as yup from 'yup';

const LoginvalidationSchema = yup.object({
  email: yup
    .string()
    .label('email')
    .email('Enter valid email ')
    .required('Email is required'),
  password: yup.string().label('password').required('Password is required'),
});

const SignupValidationSchema = yup.object({
  name: yup.string().label('name').required('Name is required'),
  email: yup
    .string()
    .label('email')
    .email('Enter valid email')
    .required('Email is required'),
  password: yup.string().label('password').required('Password is required'),
});

const ForgotvalidationSchema = yup.object({
  email: yup
    .string()
    .label('email')
    .email('Enter valid email')
    .required('Email is required'),
});

const TempPassvalidationSchema = yup.object({
  // oldPass: yup.string().label('oldPass').required('Password is required'),
  newPass: yup
    .string()
    .label('newPass')
    .required('Password is required')
    .min(8, 'Must be between 8 to 24 characters')
    .max(24)
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})[^-\s]+$/,
      'Include at least an upper case, lower case, and special character',
    ),
  confirmPass: yup
    .string()
    .label('confirmPass')
    .required('Password is required')
    .oneOf([yup.ref('newPass')], 'Passwords do not match')
    .matches(/^[^-\s]+$/, '* This field cannot contain only blankspaces'),
});

const CompleteProfilevalidationSchema = yup.object({
  first_name: yup.string().label('first_Name').required('Field is required'),
  last_name: yup.string().label('last_name').required('Field is required'),

  email: yup
    .string()
    .label('email')
    .email('Enter valid email')
    .required('Email is required'),

  phone: yup
    .string()
    .label('phone')
    .required('Mobile number is required')
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      'Phone number is not valid',
    ),
});

const CreateJobvalidationSchema = yup.object({
  name: yup.string().label('name').required('Name is required'),
  address: yup.string().label('address').required('Address is required'),

  email: yup
    .string()
    .label('email')
    .email('Enter valid email')
    .required('Email is required'),

  phone: yup
    .string()
    .label('phone')

    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      'Phone number is not valid',
    ),
    job_notes:yup.string().label('job_notes')
});
const CreateLabelvalidationSchema = yup.object({
  lWidth: yup.string().label('lWidth').required('Width detail is required'),
  lHeight: yup.string().label('lHeight').required('Height is required'),

  email: yup
    .string()
    .label('email')
    .email('Enter valid email')
    .required('Email is required'),

  phone: yup
    .string()
    .label('phone')

    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      'Phone number is not valid',
    ),
});

const CreateOwnerProfileSchema = yup.object({
  company_name: yup
    .string()
    .label('company_name')
    .required('Company name is required'),
  first_name: yup
    .string()
    .label('first_name')
    .required('First name is required'),
  last_name: yup
    .string()
    .label('last_name')
    .required('Last name is required'),
  email: yup
    .string()
    .label('email')
    .email('Enter valid email ')
    .required('Email is required'),
  phone: yup
    .string()
    .label('phone')
    .required('Phone number is required')
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      'Phone number is not valid',
    ),
  nzbn: yup.string().label('nzbn'),
  aupn: yup.string().label('aupn'),
  gst_number: yup.string().label('gst_number'),
});

const CreateOwnerProfileSchema2 = yup.object({
  address: yup.string().label('address').required('Address is required'),
  city: yup.string().label('city').required('City is required'),
  country: yup.string().label('country').required('Country is required'),
  password: yup
    .string()
    .label('password')
    .required('Password is required')
    .min(8, 'Must be between 8 to 24 characters')
    .max(24)
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})[^-\s]+$/,
      'Include at least an upper case, lower case, and special character',
    ),
  confirm_password: yup
    .string()
    .label('confirm_password')
    .required('Password is required')
    .oneOf([yup.ref('password')], 'Passwords does not match')
    .matches(/^[^-\s]+$/, '* This field cannot contain only blankspaces'),
});

export {
  LoginvalidationSchema,
  SignupValidationSchema,
  ForgotvalidationSchema,
  TempPassvalidationSchema,
  CompleteProfilevalidationSchema,
  CreateJobvalidationSchema,
  CreateOwnerProfileSchema,
  CreateLabelvalidationSchema,
  CreateOwnerProfileSchema2,
};
