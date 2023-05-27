import React from 'react'
import '../styles/App.css';
import {useState} from 'react';
import {signUpFormValidation} from '../utils/validation'




const App = () => {
  const [formDetail,setDetails]=useState({name:"",email:"",password:"",consent:false})
  const[errors,setErrors]=useState({})
 const handleNameChange=(event)=>{
     const field=event.target.id
     const value=event.target.value
     setDetails({...formDetail,[field]:value})
 }
 const handleSubmit=(event)=>{
  // event.preventDefault()
  const validationErrors=signUpFormValidation(formDetail)
  if(validationErrors){
    setErrors(validationErrors)
  }
 }
  
  return (
   <>
   <form onChange={handleNameChange} onSubmit={handleSubmit}>
   <label htmlFor='name'>Name:</label>
   <input type='text' id='name' value={formDetail.name}/>
   {errors.name && <span className="error">{errors.name}</span>}
   <label htmlFor='email'>Email:</label>
   <input type='email' id='email'/>
   {errors.email && <span className="error">{errors.email}</span>}
   <label htmlFor='password'>Password:</label>
   <input type='password' id='password' value={errors.password}/>
   {errors.password && <span className="error">{errors.password}</span>}
   <label htmlFor='consent'>Checkbox:</label>
   <input type='checkbox' id='consent' />
   <button type='submit'>Signup</button>
   </form>
   
   </>
  )
}


export default App;
