import { Formik, Form, Field, ErrorMessage } from 'formik';
import React, { useState } from 'react';
import RegisterValidationSchema, {initialValues} from '../Validation/ValidationForm'
import { useRouter } from 'next/router';
import Link from 'next/link';
import { register } from '../utils';



const Register: React.FC = () => {

const[isRegistered,setIsRegistered] = useState(false);
const router = useRouter();
const [Data,setData] = useState({
  username:'',
  password:'',
  confirmPassword:'',
  subscribeToNewsLetter:false,
  gender:'',
  status:'',
  yearOfBirth:0,
});

const handleSubmit = (event:any) =>{
  event.preventDefauot();

  if(!!Form){
    register(Data).then(() => router.push('/products'));
    setIsRegistered(true);
  } else {console.error('something went wrong, try again');}
}

const handleChange = (event:any) => {
  const {name,value,type,checked} = event.target;
  setData((prevFormData) =>({
    ...prevFormData,
    [name]:type ==='checkbox' ?checked:value,
  }));
};
 
  return (
    <>
       You  have an account ? <Link  className='signUp-next' href ="/login">Login</Link>
    <Formik
initialValues={initialValues}
validationSchema={RegisterValidationSchema}
onSubmit={(values, { setSubmitting }) => {
   setTimeout(() => {
     alert(JSON.stringify(values, null, 2));
     setSubmitting(false);
   }, 400)

}}>   
    {({ isSubmitting }) => (

<Form className="bg-white p-6 rounded-lg" onSubmit={handleSubmit}>

  <div className="m-0 ">
    <ErrorMessage name="username" component="div" className="text-red-600 text-sm mt-0" />
    <label htmlFor="username" className="block mb-1 text-sm font-bold text-gray-800">Username</label>
    <Field name="username" {...handleChange} type="text" className="border border-gray-400 p-0 w-full rounded-lg" />
    
  </div>
  
  <div className="mb-0">
     <ErrorMessage name="password" component="div" className="text-red-600 w-2/3 text-sm mt-0 " />
    <label htmlFor="password" className="block mb-0 text-sm font-bold w-1/3 text-gray-800">Password</label>
    <Field name="password"  {...handleChange} type="password" className="border border-gray-400 p-0 w-full rounded-lg" />
    

  <div className="mb-0">
    <ErrorMessage name="confirmPassword" component="div" className="text-red-600 text-sm mt-0" />
    <label htmlFor="confirmPassword" className="block mb-0 text-sm font-bold text-gray-800">Confirm password</label>
    <Field name="confirmPassword"   {...handleChange} type="confirmPassword" className="border border-gray-400 p-0 w-full rounded-lg" />
    
  </div>

  <div className="mb-0">
    <ErrorMessage name="subscribeToNewsLetter" component="div" className="text-red-600 text-sm mt-0" />
    <label htmlFor="subscribeToNewsLetter" className="block mb-0 text-sm font-bold text-gray-800">Subscribe to news letter</label>
    <Field name="subscribeToNewsLetter"   {...handleChange} type="checkbox" className="border border-gray-400 p-2 w-full rounded-lg" />
    
  </div>

  <div className="mb-1">
    <ErrorMessage name="gender" component="div" className="text-red-600 text-sm mt-0" />
    <label htmlFor="gender" className="block mb-0 text-sm font-bold text-gray-800">Gender</label>
    <Field name="gender"   {...handleChange} as="select" className="border border-gray-400 p-1 w-full rounded-lg text-sm font-bold text-gray-800">
          <option className='text-sm font-bold text-gray-800' >male</option>
          <option  className='text-sm font-bold text-gray-800' >famale</option>
          <option   className='text-sm font-bold text-gray-800'>other</option></Field>
  </div>

  <div className="mb-1">
    <ErrorMessage name="Status" component="div" className="text-red-600 text-sm mt-0" />
    <label htmlFor="Status" className="block mb-0  text-sm font-bold text-gray-800 ">Status</label>
    <Field name="Status" as="select"  {...handleChange} defaultValue="male" className="border border-gray-400 p-1 w-full rounded-lg text-sm font-bold text-gray-800" >
            <option   className='text-sm font-bold text-gray-800'>Active</option>
          <option  className='text-sm font-bold text-gray-800' >Inactive</option></Field>
  </div>

  <div className="mb-1">
    <ErrorMessage name="yearOfBirth" component="div" className="text-red-600 text-sm mt-0" />
    <label htmlFor="yearOfBirth" className="block mb-0 text-sm font-bold text-gray-800">Year of birth</label>
    <Field name="yearOfBirth"  {...handleChange} type="text" pattern="[0-9]+(\.[0-9]{1,2})?" className="border border-gray-400 p-0 w-full rounded-lg" />  
  </div>

  </div>
  <button type="submit" disabled={isSubmitting} className="bg-indigo-500 text-white p-1 w-full mt-3 rounded-lg">
    Submit
  </button>
</Form>
)}
</Formik>
      </>
  );
};

export default Register;


