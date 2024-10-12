import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import './Login.css';

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div class = "wrapper">
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      <div className="bg-white w-full max-w-md border-2 p-8 border rounded-md">
        <div>
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-2xl">Login</h3>
            <Link to="/" className="text-gray-500 hover:text-gray-700">✕</Link>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <p className='m-1'>E-mail</p>
              <input
                className="border-2 border-gray-300 rounded-md p-2 w-full focus:border-blue-500 bg-white"
                type="email"
                placeholder='Enter Your E-Mail'
                {...register("email", { required: true })}
              />
              <br/>
               {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
              <p className='m-1'>Password</p>
              <input
                className="border-2 border-gray-300 rounded-md p-2 w-full bg-white"
                type="password"
                placeholder='Enter Your Password'
                {...register("password", { required: true })}
              />
              <br/>
              {errors.password && <span className='tet-sm text-red-500'>This field is required</span>}
            </div>
            <div className='mt-4 flex justify-around'>
              <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 transition duration-500'>Login</button>
              <p>Not Registered? {' '}
                <Link to="/Sign Up" className='underline text-blue-500 cursor-pointer'>
                  Sign Up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Login;