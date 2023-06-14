import React from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';
import login from '../../assets/images/login.png'

const Register = () => {
    return (
        <div className="hero min-h-screen container mx-auto">
      <div className="hero-content flex-col-reverse lg:flex-row gap-28 h-full">
        <div className="flex-shrink-0 max-w-[500px] w-full ">
          <img src={login} alt="" />
        </div>
        <div className="card flex-shrink-0 max-w-[500px] w-full shadow-2xl bg-base-100">
          <form className="card-body">
            <div>
                <h1 className="text-2xl mb-5 text-center font-bold">Sign Up</h1>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered rounded"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered rounded"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered rounded"
              />
              <label className="label">
                <Link to="/login">Forgot password?</Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <PrimaryButton>Register</PrimaryButton>
            </div>
            <div>
              <p className="text-[12px] font-bold text-center">
                Already have an account?{" "}
                <Link to='/login'><span className="text-[#19D3AE]">Please Login</span></Link>
              </p>
              <div className="divider">OR</div>
              <button className="btn btn-outline rounded w-full text-[#3A4256] text-[16px] font-[400]">Continue With Google</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    );
};

export default Register;