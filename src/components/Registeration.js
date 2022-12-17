import React, { useState } from 'react'
import bgImg from '../assets/img3.jpg';
import RegisterationField from './RegisterationField';
export default function Registeration() {


    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");
    
    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "Name"){
            setName(value);
        }
        if(id === "Email"){
            setEmail(value);
        }
        if(id === "Password"){
            setPassword(value);
        }
        if(id === "confirmPassword"){
            setconfirmPassword(value);
        }

    }
    const handleSubmit  = () => {
        console.log(Name)
    }
  return (
    <section>
        <div className="register">
            <div className="col-1">
                <h2>Sign In</h2>
                <span>register and enjoy the service</span>

                <form id='form' className='flex flex-col'>
                <RegisterationField className="username" htmlFor="Name" title="Name" type="text" id="Name" 
                value={Name}
                onChange={(e) => handleInputChange(e)}
                placeholder="Name"/>
                <RegisterationField className="emailid" htmlFor="Email" title="Email" type="email" id="Email" 
                onChange={(e) => handleInputChange(e)}
                value={Email} placeholder="Email"/>
                <RegisterationField className="password" htmlFor="Password" title="Password" type="password"
                onChange={(e) => handleInputChange(e)} 
                 id="Password" value={Password} placeholder="Password"/>
                <RegisterationField className="confirm-password" htmlFor="confirmPassword" title="Confirm Password" 
                onChange={(e) => handleInputChange(e)}
                type="password" id="confirmPassword" value={confirmPassword} placeholder="Confirm Password"/>
                <button onClick={()=>handleSubmit()} className='btn'>Sign In</button>
                <Link to="/Login">Already have an account?</Link>
                </form>

            </div>
            <div className="col-2">
                <img src={bgImg} alt="" />
            </div>
        </div>
    </section>
  )
}
