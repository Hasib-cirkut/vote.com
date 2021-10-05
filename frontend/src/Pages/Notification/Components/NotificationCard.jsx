import React from 'react'
import PropTypes from 'prop-types'

const NotificationCard = ({ title }) => {
  return (
    <div className="">
      <div className="bg-gray-800 text-gray-50 px-4 py-4 text-lg rounded-sm">
        <h3>
          Your request for <span className="text-blue-400">{title}</span> has
          been accepted. You can find the changes{' '}
          <span className="text-blue-500 cursor-pointer">here</span>.
        </h3>
      </div>
    </div>
  )
}

NotificationCard.propTypes = {
  title: PropTypes.string,
}

export default NotificationCard
