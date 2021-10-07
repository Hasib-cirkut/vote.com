import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { GoogleLogin } from 'react-google-login'
import { Link, Redirect } from 'react-router-dom'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  // eslint-disable-next-line no-undef
  const [clientId, setClientId] = useState(process.env.GOOGLE_AUTH_CLIENT_ID)

  useEffect(() => {
    return () => {
      setPassword(() => '')
    }
  }, [])

  async function responseGoogle(res) {
    //send the info back to server to cross check if the user already exists or not
    let response = await fetch(
      // eslint-disable-next-line no-undef
      `${process.env.VITE_LOCAL_API_URL}/user/gLogin`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(res.profileObj),
      }
    )
  }

  async function handleLogin() {
    const payload = {
      username,
      password,
    }

    const response = await axios.post(
      // eslint-disable-next-line no-undef
      `${process.env.VITE_LOCAL_API_URL}/user/login`,
      payload
    )

    if (response.data.message === 'user!found') {
      console.log('user!found')
    } else {
      const { token, user } = response.data

      // set jwt token in localstorage

      localStorage.setItem('token', token)

      user.password = ''

      // set userinfo as string in localstorage

      const tempUser = JSON.stringify(user)

      localStorage.setItem('user', tempUser)

      setUsername(() => '')
    }
  }

  if (localStorage.getItem('token')) {
    return <Redirect to="/" />
  } else {
    return (
      <React.Fragment>
        <div className="grid grid-rows-2 h-screen overflow-hidden bg-black text-gray-50 px-8 py-4">
          <div className="sm:max-w-sm sm:mx-auto sm:text-center">
            <div className="flex flex-col justify-around sm:h-full">
              <div className="py-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400 hover:cursor-pointer hover:text-yellow-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
              </div>

              <div className="space-y-2">
                <h1 className="text-2xl font-semibold">
                  Let{`'`}s sign you in.
                </h1>

                <div className="">
                  <p className="text-xl font-semibold text-gray-300">
                    Welcome Back.
                  </p>
                  <p className="text-xl font-semibold text-gray-300">
                    You have been Missed!
                  </p>
                </div>
              </div>

              <GoogleLogin
                clientId={clientId}
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
              />

              <div className="space-y-12 mt-14">
                <input
                  id="username"
                  className="input_box"
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => {
                    const value = e.target.value
                    setUsername(value)
                  }}
                />

                <input
                  id={`password`}
                  className="input_box"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => {
                    const value = e.target.value
                    setPassword(value)
                  }}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-end sm:max-w-sm sm:mx-auto sm:text-center">
            <div className="space-y-5 sm:mt-16">
              <div className="text-xs text-gray-500 text-center">
                <p>
                  Don{`'`}t have an account?{' '}
                  <Link to={`/register`}>
                    <span className="text-gray-200 font-bold hover:cursor-pointer">
                      Register
                    </span>
                  </Link>
                </p>
              </div>

              <div
                className="bg-white uppercase text-black text-xs font-bold text-center py-3 rounded-md cursor-pointer"
                onClick={handleLogin}
              >
                <p>Sign In</p>
              </div>

              <div className="hidden sm:flex sm:flex-col py-10 text-xs space-y-1.5 text-gray-600">
                <p className="">
                  Vote.com is an opensource community powered voting app.
                </p>

                <p className="">
                  Made with ❤️ using{' '}
                  <span className="text-green-400">NodeJs</span> and{' '}
                  <span className="text-blue-400">ReactJs</span>.
                </p>

                <p className="">
                  Created by:{' '}
                  <span className="text-white font-semibold hover:cursor-pointer">
                    AdibHasib
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Login
