

const LoginInterface = (email:string) => {

  return {
    email: email,
    password: '',
  };
};

  const SignupInterface = {
    name: '',
    email: '',
    password: '',
  };
  
  const CardDetailsInterface={
    cardName:'',
    cardNumber:'',
    password:'',
    expireDate:'',
    ccv:''
  }
 
  
  export {
    LoginInterface,
    SignupInterface,
    CardDetailsInterface
  };
  