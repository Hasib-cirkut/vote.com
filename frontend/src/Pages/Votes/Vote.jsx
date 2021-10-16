import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Vote = ({ location: { state } }) => {
  const [data, setData] = useState([])

  useEffect(() => {
    async function getData() {
      let res = await fetch(
        `${import.meta.env.VITE_LOCAL_API_URL}/vote/?slug=${state._id}`
      )
      res = await res.json()

      return res
    }

    getData().then((res) => {
      setData(() => res)
    })
  }, [])

  return (
    <React.Fragment>
      <div id="body" className="flex-1 mx-auto max-w-2xl space-y-4 pb-36">
        <div className={`flex justify-between`}>
          <p>{state.title}</p>

          <Link
            to={{
              pathname: '/request',
              type: 'votePost',
            }}
          >
            <div
              className={`bg-white text-gray-800 rounded-sm text-sm font-medium px-2 py-1`}
            >
              Add Option
            </div>
          </Link>
        </div>

        <p>{state.genre}</p>
        <p>{state.desc}</p>

        {data.code === 'content!found' && (
          <h1>Currently No posts to vote. Maybe add some posts?</h1>
        )}
      </div>
    </React.Fragment>
  )
}

Vote.propTypes = {
  state: PropTypes.object,
  location: PropTypes.object,
}

export default Vote
