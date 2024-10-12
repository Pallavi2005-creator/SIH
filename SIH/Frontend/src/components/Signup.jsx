 import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const onSubmit = (data) => console.log(data);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md ">
        <div className=" flex justify-between items-center mb-4">
          <h3 className="font-bold text-2xl">Sign Up</h3>
          <Link to="/" className="text-gray-500 hover:text-gray-700">✕</Link>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='mb-4'>
            <label htmlFor='name' className='block text-gray-700 text-sm font-bold mb-2 bg-white'>Name</label>
            <input
              id='name'
              className='border-2 w-full border-gray-300 rounded-md p-2 focus:border-blue-500 focus:outline-none bg-white'
              placeholder='Enter Your Name'
              {...register("name", { required: true })}
            />
            <br/>
            {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">E-mail</label>
            <input
              id="email"
              className="border-2 border-gray-300 rounded-md p-2 w-full focus:border-blue-500 focus:outline-none bg-white"
              type="email"
              placeholder='Enter Your E-Mail'
              {...register("email", { required: true })}
            />
            <br/>
            {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input
              id="password"
              className="border-2 border-gray-300 rounded-md p-2 w-full focus:border-blue-500 focus:outline-none bg-white"
              type="password"
              placeholder='Enter Your Password'
              {...register("password", { required: true })}
            />
            <br/>
            {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
          </div>
          <div className='flex flex-col sm:flex-row justify-between items-center'>
            <button className='bg-pink-500 text-white rounded-md px-4 py-2 hover:bg-pink-700 transition duration-300 mb-4 sm:mb-0'>
              Sign Up
            </button>
            <p className="text-sm">
              Already Registered?{' '}
              <Link to="/login" className='underline text-blue-500 hover:text-blue-700'
              >
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup