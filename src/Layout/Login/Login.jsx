import React, { useContext } from 'react';
import login from "../../assets/images/login/login.svg";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvaider/AuthProvaider';


const Login = () => {

    const { googleLogin ,signIn } = useContext(AuthContext);
    const handleLogin=event=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signIn(email , password)
        .then(result=>{
            console.log(result.user)
        })
        .catch(error=>{
            console.log(error)
        })
    }
    const handleGoogleLogin=()=>{
        googleLogin()
        .then((result) => {
            const user = result.user;
            console.log(user)
           
          }).catch((error) => {
            console.log(error)
          });
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex flex-col lg:flex-row">
                <div className="">
                    <img className='h-[500px]' src={login} alt="" />
                </div>
                <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Your email" name='email' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <h3>or login With</h3>
                        <div>
                           <button onClick={handleGoogleLogin}>
                            Login wiht google
                           </button>
                        </div>
                        <p className='text-center'>If you are new please <Link className='text-blue-600' to='/signup'>Register</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;