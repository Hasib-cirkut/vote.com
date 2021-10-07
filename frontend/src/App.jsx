import React from 'react'

import Main from './Pages/Main/Main.jsx'
import Login from './Pages/Login/Login.jsx'
import Post from './Pages/Post/Post.jsx'
import Register from './Pages/Register/Register.jsx'
import Search from './Pages/Search/Search.jsx'
import Request from './Pages/Request/Request.jsx'
import Notification from './Pages/Notification/Notification.jsx'
import Settings from './Pages/Settings/Settings.jsx'
import Dashboard from './Pages/Dashboard/Dashboard.jsx'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Layout from './Layout'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/dashboard" exact component={Dashboard} />
        <Layout>
          <Route path="/" exact component={Main} />
          <Route path="/post" exact component={Post} />
          <Route path="/search" exact component={Search} />
          <Route path="/request" exact component={Request} />
          <Route path="/notification" exact component={Notification} />
          <Route path="/settings" exact component={Settings} />
        </Layout>
      </Switch>
    </BrowserRouter>
  )
}

export default App
