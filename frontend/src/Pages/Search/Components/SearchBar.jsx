import React, { useState, useEffect } from 'react'

import { motion } from 'framer-motion'

import PropTypes from 'prop-types'

const SearchBar = ({ setShowDialogue }) => {
  const [searchText, setSearchText] = useState('')

  useEffect(() => {
    if (searchText === '') {
      setShowDialogue(true)
    } else {
      setShowDialogue(false)
    }
  }, [searchText])

  async function handleTextChange(event) {
    event.preventDefault()

    setSearchText(() => {
      return event.target.value
    })
  }

  return (
    <React.Fragment>
      <div className="flex flex-row items-center p-4 max-w-lg mx-auto">
        <motion.div
          initial={{
            x: -50,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            type: 'spring',
            stiffness: 100,
          }}
          id="searchBar"
          className="flex-1  rounded"
        >
          <input
            value={searchText}
            type="text"
            placeholder="Search for threads."
            className="input_box"
            onChange={handleTextChange}
          />
        </motion.div>

        <motion.div
          initial={{
            x: 50,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            type: 'spring',
            stiffness: 100,
          }}
          id="searchBtn"
          className="rounded ml-2"
        >
          <button className="btn_white px-4">Search</button>
        </motion.div>
      </div>
    </React.Fragment>
  )
}

SearchBar.propTypes = {
  setShowDialogue: PropTypes.func,
}

export default SearchBar
