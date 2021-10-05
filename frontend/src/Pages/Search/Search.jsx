import React, { useState, useEffect } from 'react'

import SearchBar from './Components/SearchBar'

import { motion } from 'framer-motion'

const Search = () => {
  const [navInfo] = useState('search')
  const [showDialogue, setShowDialogue] = useState(true)

  useEffect(() => {
    localStorage.setItem('navInfo', navInfo)
  }, [])
  return (
    <React.Fragment>
      <div id="body" className="flex-1 justify-center overflow-y-auto">
        <SearchBar setShowDialogue={setShowDialogue} />

        {showDialogue && (
          <motion.div
            className="py-4 mt-4 text-center"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 2,
            }}
          >
            <h3 className="text-3xl font-semibold">Search Away!</h3>
          </motion.div>
        )}
      </div>
    </React.Fragment>
  )
}

export default Search
