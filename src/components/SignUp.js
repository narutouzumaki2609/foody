import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
export default function SignUp() {
    const [credentials, setcredentials] = useState({ name: "", email: "", location: "", password: "" });
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(JSON.stringify(credentials))
        const response = await fetch('http://localhost:5000/api/createUser', {
            method: 'POST',
            body: JSON.stringify(credentials),
            headers: { 'Content-Type': 'application/json' }
        });
        if (response.ok) {
            throw new Error("Net response not ok")
        }
    }
    const onChange = (e) => {
        setcredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    return (
        <div className='d-flex justify-content-center aligh-items-center bg-primary'>
        <div className='p-3 bg-success w-25 m-5 sm'>
            <form onSubmit={handleSubmit}>
                
                <div className="mb-3">
                    <label htmlFor="name" className=''>Name</label>
                    <input type="text" className="form-control" name='name' value={credentials.name} onChange={onChange} placeholder="name" />
                </div>
                <div className="mb-3">
                    <label className='form-label' htmlFor="location">location</label>
                    <input type="text" className="form-control" name='location' value={credentials.location} onChange={onChange} placeholder="Location" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={credentials.email} onChange={onChange} placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="mb-3">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" name='password' value={credentials.password} onChange={onChange} placeholder="Password" />
                </div>
                <button type="submit" className="btn btn-primary m-3">Submit</button>
            </form>
        </div>
        </div>
    )
}
