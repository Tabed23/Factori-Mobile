const LoginInterface = {
  email: '',
  password: '',
};

const SignupInterface = {
  name: '',
  email: '',
  password: '',
};

const ForgotInterFace = {
  email: '',
};

const TempPassInterFace = {
  newPass: '',
  confirmPass: '',
};

const CreateJobInterface = {
  name: 'test',
  address: 'lahore',
  email: 'test@gmail.com',
  phone: '0900078609',
  job_notes:'nope'
};

const CreateLabelInterface = {
  lWidth: '',
  lHeight: '',
};
const PaymentCard = {
  name: '',
  cNumber: '',
  exDate: '',
  cvc: '',
};

const CreateOwnerProfile = v => {
  return {
    company_name: v?.company_name || '',
    first_name: v?.first_name || '',
    last_name: v?.last_name || '',
    email: v?.email || '',
    phone: v?.phone || '',
    nzbn: v?.nzbn || '',
    aupn: v?.aupn || '',
    gst_number: v?.gst_number || '',
  };
};

const CreateOwnerProfile2 = v => {
  return {
    address: v?.address || '',
    city: v?.city || '',
    country: 'New Zealand',
    password: '',
    confirm_password: '',
  };
};

const CompleteProfileInterface = v => {
  return {
    first_name: v?.first_name || '',
    last_name: v?.last_name || '',
    email: v?.email || '',
    phone: v?.phone || '',
  };
};

export {
  LoginInterface,
  SignupInterface,
  ForgotInterFace,
  TempPassInterFace,
  PaymentCard,
  CompleteProfileInterface,
  CreateJobInterface,
  CreateLabelInterface,
  CreateOwnerProfile,
  CreateOwnerProfile2,
};
