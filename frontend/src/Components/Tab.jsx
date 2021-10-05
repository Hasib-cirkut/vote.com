import React from 'react'
import PropTypes from 'prop-types'

const Tab = ({ Icon, text, id, setSelected, selected }) => {
  return (
    <div
      onClick={() => setSelected(id)}
      id={id}
      className={`flex flex-row justify-center items-center 
								${selected === id ? 'py-1 px-4 bg-gray-800 rounded-md text-gray-100' : ''}`}
    >
      {Icon()}
      <div />

      <span className={`${selected === id ? 'ml-2 font-semibold' : 'hidden'}`}>
        {text}
      </span>
    </div>
  )
}

Tab.propTypes = {
  Icon: PropTypes.func,
  text: PropTypes.string,
  id: PropTypes.string,
  setSelected: PropTypes.func,
  selected: PropTypes.string,
}

export default Tab
