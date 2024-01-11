// import React, { useState } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css'
// export default function SignUp() {
//     const [credentials, setcredentials] = useState({ Username: "", email: "", location: "", password: "" });
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         console.log(JSON.stringify(credentials))
//         const response = await fetch('http://localhost:5000/api/createUser', {
//             method: 'POST',
//             body: JSON.stringify({ Username: credentials.Username, email: credentials.email, password: credentials.password, location: credentials.location }),
//             headers: { 'Content-Type': 'application/json' }
//         });
//         if (response.ok) {
//             throw new Error("Net response not ok")
//         }
//     }
//     const onChange = (e) => {
//         setcredentials({ ...credentials, [e.target.name]: e.target.value })
//     }
//     return (
//         // <div className='d-flex justify-content-center aligh-items-center bg-primary'>
//         // <div className='p-3 bg-success w-25 m-5 sm'>
//         //     <form onSubmit={handleSubmit}>

//         //         <div className="mb-3">
//         //             <label htmlFor="Name" className='form-label'>Name</label>
//         //             <input type="text" className="form-control" name='Name' value={credentials.Name} onChange={onChange} placeholder="name" />
//         //         </div>
//         //         <div className="mb-3">
//         //             <label className='form-label' htmlFor="location">location</label>
//         //             <input type="text" className="form-control" name='location' value={credentials.location} onChange={onChange} placeholder="Location" />
//         //         </div>
//         //         <div className="mb-3">
//         //             <label htmlFor="email">Email address</label>
//         //             <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={credentials.email} onChange={onChange} placeholder="Enter email" />
//         //             <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
//         //         </div>
//         //         <div className="mb-3">
//         //             <label htmlFor="password">Password</label>
//         //             <input type="password" className="form-control" id="exampleInputPassword1" name='password' value={credentials.password} onChange={onChange} placeholder="Password" />
//         //         </div>
//         //         <button type="submit" className="btn btn-primary m-3">Submit</button>
//         //     </form>
//         // </div>
//         // </div>
//         <div className='container' >
//             <form className='w-50 m-auto mt-5 border bg-dark border-success rounded' onSubmit={handleSubmit}>
//                 <div className="m-3">
//                     <label htmlFor="Username" className="form-label">Name</label>
//                     <input type="text" className="form-control" name='Username' value={credentials.Username} onChange={onChange} aria-describedby="emailHelp" />
//                 </div>
//                 <div className="m-3">
//                     <label htmlFor="email" className="form-label">Email address</label>
//                     <input type="email" className="form-control" name='email' value={credentials.email} onChange={onChange} aria-describedby="emailHelp" />
//                 </div>
//                 {/* <div className="m-3">
//               <label htmlFor="address" className="form-label">Address</label>
//               <fieldset>
//                 <input type="text" className="form-control" name='address' placeholder='"Click below for fetching address"' value={address} onChange={(e)=>setAddress(e.target.value)} aria-describedby="emailHelp" />
//               </fieldset>
//             </div> */}
//                 <div className="mb-3">
//                     <label className='form-label' htmlFor="location">location</label>
//                     <input type="text" className="form-control" name='location' value={credentials.location} onChange={onChange} placeholder="Location" />
//                 </div>
//                 <div className="m-3">
//                     <label htmlFor="password" className="form-label">Password</label>
//                     <input type="password" className="form-control" value={credentials.password} onChange={onChange} name='password' />
//                 </div>
//                 <button type="submit" className="m-3 btn btn-success">Submit</button>
//                 {/* <Link to="/login" className="m-3 mx-1 btn btn-danger">Already a user</Link> */}
//             </form>
//         </div>

//     )
// }

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function SignUp() {
    const [credentials, setCredentials] = useState({
        Username: '',
        email: '',
        location: '',
        password: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(JSON.stringify(credentials));
        console.log("tatti")
        try {
            console.log("tatti2")
            const response = await fetch('http://localhost:5000/api/createUser', {
                method: 'POST',
                body: JSON.stringify(credentials),
                headers: { 'Content-Type': 'application/json' }
            });
            console.log("tatti3")
            const json = await response.json()
            console.log(json);
            if (!response.ok) {
                throw new Error('Network response not ok');
            }

            // Handle success, e.g., redirect to another page
            console.log('User created successfully!');
        } catch (error) {
            console.error('Error creating user:', error.message);
        }
    };

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    return (
        <div className="container">
            <form className="w-50 m-auto mt-5 border bg-dark border-success rounded" onSubmit={handleSubmit}>
                <div className="m-3">
                    <label htmlFor="Username" className="form-label">
                        Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="Username"
                        value={credentials.Username}
                        onChange={onChange}
                        aria-describedby="emailHelp"
                    />
                </div>
                <div className="m-3">
                    <label htmlFor="email" className="form-label">
                        Email address
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={credentials.email}
                        onChange={onChange}
                        aria-describedby="emailHelp"
                    />
                </div>
                <div className="m-3">
                    <label htmlFor="password" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        name="password"
                        value={credentials.password}
                        onChange={onChange}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="location">
                        Location
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="location"
                        value={credentials.location}
                        onChange={onChange}
                        placeholder="Location"
                    />
                </div>
                <button type="submit" className="m-3 btn btn-success">
                    Submit
                </button>
            </form>
        </div>
    );
}
