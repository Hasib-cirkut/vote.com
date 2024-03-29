import React, { useState, useEffect } from 'react'

import RequestCard from './Components/RequestCard'
import { Link, Redirect } from 'react-router-dom'

export default function Dashboard() {
  const [data, setData] = useState([])

  const [type, setType] = useState('thread')

  const [render, setRender] = useState(false)

  const [userType] = useState(JSON.parse(localStorage.getItem('user')).type)

  function setRenderWrapper() {
    ;(() => {
      setRender((prev) => !prev)
    })()
  }

  useEffect(() => {
    async function getData() {
      let response = await fetch(
        `${import.meta.env.VITE_LOCAL_API_URL}/admin/threads`
      )

      response = await response.json()

      return response
    }

    getData().then((res) => setData(() => res))
  }, [render])

  if (
    (localStorage.getItem('token') && userType === 'root') ||
    userType === 'admin'
  ) {
    return (
      <React.Fragment>
        <div className="min-h-screen overflow-x-hidden w-screen bg-black">
          <div className="p-4 flex flex-col space-y-6 bg-black mx-auto max-w-2xl">
            <div className="flex flex-row justify-around text-xl text-white">
              <h1>Dashboard</h1>

              <Link to="/">
                <span>Home</span>
              </Link>
            </div>

            <div
              id="switch"
              className="flex flex-row py-1 px-1 space-x-2 mx-auto justify-around border rounded transition"
            >
              <div
                className={`px-8 py-2 rounded-sm font-semibold cursor-pointer ${
                  type === 'thread'
                    ? 'bg-white text-black'
                    : 'text-white hover:bg-gray-900'
                }  `}
                onClick={() => {
                  setType(() => 'thread')
                }}
              >
                <h2>threads</h2>
              </div>

              <div
                className={`px-8 py-2 rounded-sm font-semibold cursor-pointer ${
                  type === 'votes'
                    ? 'bg-white text-black'
                    : 'text-white hover:bg-gray-900'
                }  `}
                onClick={() => {
                  setType(() => 'votes')
                }}
              >
                <h2>votes</h2>
              </div>
            </div>

            <div className="">
              <div id="requestArea" className=" space-y-4 px-2 bg-black my-10">
                {type === 'thread'
                  ? data.map((item) => {
                      return (
                        item.type === 'thread' && (
                          <RequestCard
                            {...item}
                            setRenderWrapper={setRenderWrapper}
                            key={item._id}
                          />
                        )
                      )
                    })
                  : data.map((item) => {
                      return (
                        item.type !== 'thread' && (
                          <RequestCard
                            {...item}
                            setRenderWrapper={setRenderWrapper}
                            key={item._id}
                          />
                        )
                      )
                    })}
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  } else {
    return <Redirect to="/login" />
  }
}
