import React from 'react'
import whitelogo from '../assets/white-logo.png'

function Signup() {
    return (
        <div className='signup'>
            <div>
                <img style={{ maxWidth: 200 }} className="rounded mt-5 mx-auto d-block" src={whitelogo}></img>
            </div>
            <div className="container text-white m-5 mx-auto">
                <p className="text-center">Signup to apply for industry discounts</p>

            </div>
            
            {/* form container */}
            <div style={{ backgroundColor: "#eed393" }} className="container rounded">
                <form>
                    <div className="rounded p-2 mb-3">
                        <label className="form-label">Email address</label>
                        <input type="email" className="form-control"></input>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="p-2 mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control"></input>
                    </div>
                    <div className="p-2 mb-3">
                        <label className="form-label">Password Confirmation</label>
                        <input type="passwordConfirmation" className="form-control"></input>
                    </div>
                    
                    <button type="submit" className="m-3 btn btn-dark">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Signup;
