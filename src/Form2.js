import React, { useEffect, useState } from "react";
import './Form2.css';

const Form2 = () => {

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmpassword: ''
    })

    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setFormErrors(validate(formData));
        setIsSubmit(true);
    }

    useEffect(()=> {
        console.log(formErrors);
        if(Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formData); 
        }
    }, [formErrors])

    const validate = (values) => {
        const error = {}

        if(!values.username) {
            error.username = "*Username is required!";
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(!values.email) {
            error.email = "*Email is required!";
        }
        else if (!emailRegex.test(values.email)) {
            error.email = "*This is not a valid email address!";
        }

        if(!values.password) {
            error.password = "*Password is required";
        }
        else if(values.password.length < 4) {
            error.password = "*Password must be at least 5 characters!";
        }
        else if(values.password.length > 12) {
            error.password = "*Password must be less than 12 characters!";
        }

        if(values.password !== values.confirmpassword) {
            error.confirmpassword = "*Passwords do not match";
        }
        else {
            error.confirmpassword = "";
        }

        return error;
         
    }

    return (
        <div className="main">
            <form onSubmit={handleSubmit}>
                <div>
                    <label className="label">Username</label>
                    <input
                        className="input"
                        type="text"
                        value={formData.username}
                        onChange={(e)=>setFormData({...formData, username: e.target.value})}
                    />
                    <p className='error'>{formErrors.username}</p>
                </div>
                <div>
                    <label className="label">Email</label>
                    <input
                        className="input"
                        type="email"
                        value={formData.email}
                        onChange={(e)=>setFormData({...formData, email: e.target.value})}
                    />
                    <p className='error'>{formErrors.email}</p>
                </div>
                <div>
                    <label className="label">Password</label>
                    <input
                        className="input"
                        type="password"
                        value={formData.password}
                        onChange={(e)=>setFormData({...formData, password: e.target.value })}
                    />
                    <p className='error'>{formErrors.password}</p>
                </div>
                <div>
                    <label className="label">Confirm Password</label>
                    <input
                        className="input" 
                        type="password"
                        value={formData.confirmpassword}
                        onChange={(e)=>setFormData({...formData, confirmpassword: e.target.value})}
                    />
                    <p className='error'>{formErrors.confirmpassword}</p>
                </div>
                <button type="submit" className='button'>Submit</button>
            </form>
        </div>
    )
}

export default Form2;