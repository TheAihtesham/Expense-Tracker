
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {

  const [signup, setSignup] = useState({
    name: "",
    email: "",
    password: ""
  })
  const Navigate = useNavigate();
  const handleSignup = (e) =>{
    const { name, value } = e.target;
    const copyInfo = {...signup};
    copyInfo[name] = value;
    setSignup(copyInfo);
    console.log(name, value)

  } 

  const handelChange = async (e) =>{
    e.preventDefault();
    const {name, email, password} = signup;
    if(!name || !email || !password){
      alert("Every field is required");
    }
    try{
      const url = "http://localhost:5000/test/signup";
      const res = await fetch(url, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(signup)
      });
      const result = await res.json()
      
      const { success, message } = result
      if(success){
        alert("Signin Success");
        Navigate('/test/login')
      }
      else{
        alert("something wrong")
      }
      console.log(result);
    }catch(err){
        alert(err)
    }
  }

  return (
    <div className='w-full'>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 space-y-6">
          <h2 className="text-3xl font-bold text-center text-gray-800">Create your account</h2>
          <form className="space-y-5" onSubmit={handelChange}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                onChange={handleSignup}
                type="text"
                id="name"
                name='name'
                value={signup.name}
                className="mt-1 p-2 block w-full rounded-xl border-gray-300 shadow-sm outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
              <input
                onChange={handleSignup}
                type="email"
                name='email'
                id="email"
                value={signup.email}
                className="mt-1 p-2 block w-full rounded-xl border-gray-300 shadow-sm outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                onChange={handleSignup}
                type="password"
                id="password"
                name='password'
                value={signup.password}
                className="mt-1 p-2 block w-full rounded-xl border-gray-300 shadow-sm outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                placeholder="••••••••"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-xl shadow hover:bg-blue-700 transition duration-300"
            >
              Register
            </button>
          </form>
          <p className="text-center text-sm text-gray-500">
            Already have an account?
            <Link to="/test/login" className="text-blue-600 hover:underline pl-2">Sign in</Link>
          </p>
        </div>
      </div>


    </div>
  )
}

export default Signup
