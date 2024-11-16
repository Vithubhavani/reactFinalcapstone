const ValidateForm=(name,username,email,mobile)=>{
   let valid=true;
   let invalid={
      name:false,
      username:false,
      email:false,
      mobile:false
   }
   if(username===''||email===''||name===''||mobile===''){
   valid=false;
   invalid={
      name:!name,
      username: !username,
      email: !email,
      mobile:!mobile   
   };
   } 
   const emailRegEx=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
   const mobileRegEx=/^\d{10}$/;
   
   if(!emailRegEx.test(email) || !mobileRegEx.test(mobile)){
   invalid={...invalid,email:!emailRegEx.test(email),mobile:!mobileRegEx.test(mobile) }
   valid=false
   }
   return{
      valid,
      invalid
   }
   
}

export default ValidateForm