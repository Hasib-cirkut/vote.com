import React from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'

export default function RequestCard({
  title,
  desc,
  genre,
  _id,
  username,
  setRenderWrapper,
}) {
  async function handleRequestApproval(code) {
    if (code === 'approved') {
      let response = await axios.post(
        // eslint-disable-next-line no-undef
        `${process.env.VITE_LOCAL_API_URL}/request/approve`,
        { id: _id }
      )

      if (response.data.code === 'approved') {
        //re render the UI to show updated List
        setRenderWrapper()
      }
    } else {
      let response = await axios.post(
        // eslint-disable-next-line no-undef
        `${process.env.VITE_LOCAL_API_URL}/request/deny`,
        { id: _id, username }
      )

      if (response.data.code === 'denied') {
        setRenderWrapper()
      }
    }
  }

  return (
    <React.Fragment>
      <div
        id="requestCard"
        className="border-2 rounded-sm bg-black space-y-2 flex flex-col text-white px-4 py-2 text-gray-300"
      >
        <div>
          <div id="title" className="flex">
            <h4 className="">Title:</h4>

            <p className=" text-xl font-semibold px-4">{title}</p>
          </div>

          <div id="desc" className="flex">
            <h4 className="">Desc:</h4>

            <p className="px-4">{desc}</p>
          </div>

          <div id="genre" className="flex">
            <h4 className="">Genre:</h4>

            <p className="px-4">{genre}</p>
          </div>
        </div>

        <div className="flex flex-row justify-around">
          <a
            href="#"
            className="border px-4 py-1 rounded-sm text-white hover:bg-white hover:text-black"
            onClick={() => handleRequestApproval('approved')}
          >
            Approve
          </a>

          <a
            href="#"
            className="border px-4 py-1 rounded-sm text-white hover:bg-white hover:text-black"
            onClick={() => handleRequestApproval('denied')}
          >
            Deny
          </a>
        </div>
      </div>
    </React.Fragment>
  )
}

RequestCard.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  genre: PropTypes.string,
  _id: PropTypes.string,
  username: PropTypes.string,
  setRenderWrapper: PropTypes.func,
}
