import React from 'react'
import { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'

import Tab from './Tab'

import { motion } from 'framer-motion'

import {
  HomeIcon,
  SearchIcon,
  AddIcon,
  BellIcon,
  CogIcon,
} from '../Constants/Icons'

const BottomNavigation = () => {
  const [selected, setSelected] = useState()

  useEffect(() => {
    setSelected(() => {
      return localStorage['navInfo']
    })
  }, [selected])

  return (
    <React.Fragment>
      <div>
        <motion.section
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          className="block fixed inset-x-0 bottom-0 z-10 bg-blueGray-50 shadow h-auto w-full max-w-sm mx-auto rounded sm:mb-4 sm:max-w-md"
        >
          <div
            id="tabs"
            className="flex flex-row justify-around items-center h-full py-4"
          >
            <Link to="/">
              <Tab
                Icon={HomeIcon}
                text="Home"
                id="home"
                setSelected={setSelected}
                selected={selected}
              />
            </Link>

            <Link to="/search">
              <Tab
                Icon={SearchIcon}
                text="Search"
                id="search"
                setSelected={setSelected}
                selected={selected}
              />
            </Link>

            <Link
              to={{
                pathname: '/request',
                type: 'thread',
              }}
            >
              <Tab
                Icon={AddIcon}
                text="Request"
                id="request"
                setSelected={setSelected}
                selected={selected}
              />
            </Link>

            <Link to="/notification">
              <Tab
                Icon={BellIcon}
                text="Notification"
                id="notification"
                setSelected={setSelected}
                selected={selected}
              />
            </Link>

            <Link to="/settings">
              <Tab
                Icon={CogIcon}
                text="Settings"
                id="settings"
                setSelected={setSelected}
                selected={selected}
              />
            </Link>
          </div>
        </motion.section>
      </div>
    </React.Fragment>
  )
}

export default BottomNavigation
