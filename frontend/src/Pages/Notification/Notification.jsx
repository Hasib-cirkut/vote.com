import React from 'react'

import { useState, useEffect } from 'react'

import NotificationCard from './Components/NotificationCard'

const demoData = [
  { id: 1, title: 'Best Metallica Album' },
  { id: 2, title: 'Best Mohinerghoraguli Song' },
]

const Notification = () => {
  const [navInfo] = useState('notification')

  useEffect(() => {
    localStorage.setItem('navInfo', navInfo)
  }, [])

  return (
    <React.Fragment>
      <div className="flex flex-col mx-auto space-y-4 max-w-2xl">
        {demoData.map((item) => {
          return <NotificationCard title={item.title} key={item.id} />
        })}
      </div>
    </React.Fragment>
  )
}

export default Notification
