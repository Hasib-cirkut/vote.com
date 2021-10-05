import React, { useState, useEffect } from 'react'

import InputBox from './Components/InputBox'

const Request = () => {
  const [navInfo] = useState('request')

  const [type, setType] = useState('Thread')

  useEffect(() => {
    localStorage.setItem('navInfo', navInfo)
  }, [])

  return (
    <React.Fragment>
      <div className="items-center h-screen max-w-lg w-full mx-auto px-2">
        <div
          id="type"
          className={`text-white py-2 text-gray-900 font-semibold px-3 rounded w-full text-center ${
            type === 'Thread' ? 'bg-yellow-300' : 'bg-green-300'
          }`}
        >
          <span>
            Requesting for {type} {type === 'Thread' && <span>post</span>}
          </span>
        </div>

        <InputBox setType={setType} />
      </div>
    </React.Fragment>
  )
}

export default Request
