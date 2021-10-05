import React from 'react'
import { useState, useEffect } from 'react'

import ThreadCard from './Components/ThreadCard'

const Main = () => {
  const [navInfo, setNavInfo] = useState('home')
  const [data, setData] = useState([])

  useEffect(() => {
    setNavInfo(() => 'home')
    localStorage.setItem('navInfo', navInfo)

    async function getData() {
      // eslint-disable-next-line no-undef
      let response = await fetch(`${process.env.VITE_LOCAL_API_URL}/thread/`)

      response = await response.json()

      setData(() => {
        return response
      })
    }

    getData()
  }, [])

  return (
    <React.Fragment>
      <div id="body" className="flex-1 mx-auto max-w-2xl space-y-4 pb-36">
        {data.map((item) => {
          return <ThreadCard {...item} key={item._id} />
        })}
      </div>
    </React.Fragment>
  )
}

export default Main
