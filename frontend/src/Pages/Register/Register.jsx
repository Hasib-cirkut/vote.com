import React, { useState } from 'react'

import { Redirect, Link } from 'react-router-dom'

const Register = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [password, setPassword] = useState('')

  const [userRegistered, setUserRegistered] = useState(false)

  // Error States

  const [userExists, setUserExists] = useState(false)

  async function handleRegister() {
    let displayName = `${firstName} ${lastName}`

    const payload = {
      username,
      email,
      displayName,
      password,
      type: 'basic',
    }

    let response = await fetch(
      // eslint-disable-next-line no-undef
      `${process.env.VITE_LOCAL_API_URL}/user/register`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      }
    )

    response = await response.json()

    if (response.success) {
      setUserRegistered(() => true)
    } else if (response.code === 11000) {
      //user already exists. show error

      setUserExists(() => true)
    }

    console.log(response)
  }

  async function handleDataChange(event, setState) {
    setState(() => {
      return event.target.value
    })
  }

  if (userRegistered) {
    return <Redirect to="/" />
  } else {
    return (
      <React.Fragment>
        <div className="flex flex-col justify-center h-screen overflow-hidden bg-black text-gray-50 px-8 py-4">
          <div className="sm:max-w-sm sm:mx-auto sm:text-center">
            <div className="flex flex-col justify-around sm:h-full">
              <div className="space-y-2">
                <h1 className="text-2xl font-semibold">
                  Register. It{`'`}s Free
                </h1>
              </div>

              <div className="space-y-12 mt-14">
                <input
                  id="username"
                  className="input_box"
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => handleDataChange(e, setUsername)}
                />

                <input
                  id="email"
                  className="input_box"
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => handleDataChange(e, setEmail)}
                />

                <input
                  id={`firstname`}
                  className="input_box"
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => handleDataChange(e, setFirstName)}
                />

                <input
                  id={`lastname`}
                  className="input_box"
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => handleDataChange(e, setLastName)}
                />

                <input
                  id={`password`}
                  className="input_box"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => handleDataChange(e, setPassword)}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-end sm:max-w-sm sm:mx-auto sm:text-center">
            <div className="space-y-5 sm:mt-16">
              {userExists && (
                <div className="text-base text-red-300 text-center">
                  <p>
                    User already exists. Choose a new username or try login.
                  </p>
                </div>
              )}
              <div className="text-xs text-gray-500 text-center">
                <p>
                  Already have an account?{' '}
                  <Link to={'/login'}>
                    <span className="text-gray-200 font-bold hover:cursor-pointer">
                      Login
                    </span>
                  </Link>
                </p>
              </div>

              <div
                className="bg-white uppercase text-black text-xs font-bold text-center py-3 rounded-md cursor-pointer"
                onClick={handleRegister}
              >
                <p>Register</p>
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

export default Register
