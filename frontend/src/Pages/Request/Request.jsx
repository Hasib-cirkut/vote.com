import React, { useState, useEffect } from 'react'

import InputBox from './Components/InputBox'

import PropTypes from 'prop-types'

const Request = ({ location: { type } }) => {
  const [navInfo] = useState('request')

  const [reqType, setReqType] = useState('thread')

  useEffect(() => {
    localStorage.setItem('navInfo', navInfo)

    setReqType(() => type)
  }, [])

  return (
    <React.Fragment>
      <div className="items-center h-screen max-w-lg w-full mx-auto px-2">
        <div
          id="type"
          className={`text-white py-2 text-gray-900 font-semibold px-3 rounded w-full text-center ${
            type === 'thread' ? 'bg-yellow-300' : 'bg-green-300'
          }`}
        >
          <span>
            Requesting for {reqType} {reqType === 'thread' && <span>post</span>}
          </span>
        </div>

        <InputBox />
      </div>
    </React.Fragment>
  )
}

Request.propTypes = {
  location: PropTypes.object,
  type: PropTypes.string,
}

export default Request
