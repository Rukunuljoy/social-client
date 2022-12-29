import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Components/Contexts/AuthProvider/AuthProvider';
import NavBar from '../../Components/NavBar/NavBar';

const Register = () => {
    const {createUser} = useContext(AuthContext)
    const Navigate = useNavigate()
    const {providerLogin} = useContext(AuthContext)

    const  handleSignUp = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email,password)
        .then(result =>{
            const user = result.user;
            Navigate('/')
            console.log(user)
        })
        .catch(err =>console.error(err))
        
    }
    const googleProvider = new GoogleAuthProvider()
    
    const handleGoogleSignIn=()=>{
      providerLogin(googleProvider)
      .then(result=>{
        const user = result.user;
        Navigate('/')
        console.log(user)
      })
      .catch(err=>console.error(err))
    }

    return (
       <>
         <NavBar></NavBar>
        <div className="hero w-full my-20">
        <div className="hero-content gap-10 grid md:grid-cols-2 flex-col lg:flex-row">
          <div className="text-center lg:text-left">
              <img className="w-3/4" src='/assets/istockphoto-1053404714-612x612.jpg' alt = ""/>
          </div>
          <div className="card  w-full max-w-sm shadow-2xl py-10 bg-base-100">
            <h1 className="text-5xl font-bold text-center mt-5">Register now!</h1>
            <form onSubmit={handleSignUp} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name='name'
                  placeholder="Enter your name here..."
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name='email'
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  name='password'
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                  <input className="btn btn-primary" type = "submit" value='register'/>
              </div>
              <button onClick={handleGoogleSignIn} className="btn btn-light">Google Login</button>
            </form>
                  <p className="text-center mb-10 ">Already have an account?<Link className="text-orange-600 font-bold" to="/login">Login</Link></p>
          </div>
        </div>
      </div>
       </>
    );
};

export default Register;