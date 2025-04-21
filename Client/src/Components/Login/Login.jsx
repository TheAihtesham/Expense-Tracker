import React from 'react'
import { useState } from 'react'
import{ Link, useNavigate }from 'react-router-dom'
const Login = () => {

  const [login, setLogin] = useState({
      email: "",
      password: ""
    })
    const Navigate = useNavigate();
    const handleLogin = (e) =>{
      const { name, value } = e.target;
      const copyInfo = {...login};
      copyInfo[name] = value;
      setLogin(copyInfo);
      console.log(name, value)
  
    } 
  
    const handelChange = async (e) =>{
      e.preventDefault();
      const {email, password} = login;
      if(!email || !password){
        alert("Every field is required");
      }
      try{
        const url = "http://localhost:5000/test/login";
        const res = await fetch(url, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(login)
        });
        const result = await res.json()
        
        const { success, message, jwtToken, name, error } = result;
        if(success){
          alert("Login Success");
          localStorage.setItem('token', jwtToken)
          localStorage.setItem('loggedInUser', name);
          Navigate('/dashboard')
        }
        else if (error) {
          const details = error?.details[0].message;
          alert(details);
      } else if (!success) {
          alert(message);
      }
        console.log(result);
      }catch(err){
          alert(err)
      }
    }
  

  return (
    <div className='w-full'>
          <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 w-full">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-10 space-y-7">
              <h2 className="text-3xl font-bold text-center text-gray-800">Sign in to your account</h2>
              <form className="space-y-5" onSubmit={handelChange}>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
                  <input
                    type="email"
                    id="email"
                    name='email'
                    value={login.email}
                    onChange={handleLogin}
                    className="mt-1 block p-2 w-full rounded-xl border-gray-300 shadow-sm outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                  <input
                    type="password"
                    id="password"
                    name='password'
                    value={login.password}
                    onChange={handleLogin}
                    className="mt-1 p-2 block w-full rounded-xl border-gray-300 shadow-sm outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    placeholder="••••••••"
                  />
                </div>
               
                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-xl shadow hover:bg-blue-700 transition duration-300"
                >
                  Sign in
                </button>
              </form>
              <p className="text-center text-sm text-gray-500">
                Don't have an account?
                <Link to="/test/signup" className="text-blue-600 hover:underline pl-2">Register</Link>
              </p>
            </div>
          </div>
    
        </div>
  )
}

export default Login
