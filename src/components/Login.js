import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import bgImg from '../assets/img3.jpg';
import RegisterationField from './RegisterationField';

export default function Login() {


    const [Name, setName] = useState("");
    const [Password, setPassword] = useState("");
    
    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "Name"){
            setName(value);
        }
       
        if(id === "Password"){
            setPassword(value);
        }
        

    }
    const handleSubmit  = () => {
        console.log(Name)
    }
  return (
    <section>
        <div className="register">
            <div className="col-1">
                <h2>Sign Up</h2>
             

                <form id='form' className='flex flex-col'>
                <RegisterationField className="username" htmlFor="Name" title="Name" type="text" id="Name" 
                value={Name}
                onChange={(e) => handleInputChange(e)}
                placeholder="Name"/>
                <RegisterationField className="password" htmlFor="Password" title="Password" type="password"
                onChange={(e) => handleInputChange(e)} 
                 id="Password" value={Password} placeholder="Password"/>
               
                <button onClick={()=>handleSubmit()} className='btn'>Sign In</button>
                <Link to="/">Donot have an account yet?</Link>
                </form>

            </div>
            <div className="col-2">
                <img src={bgImg} alt="" />
            </div>
        </div>
    </section>
  )
}
