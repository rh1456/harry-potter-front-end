import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import Page from './pages/NewHouse'
import Page2 from './pages/Students'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import NewStudent from './pages/NewHouse'
import HogwartStudents from './pages/Students'

const App = () => {
  return (
    <Router>
      <header>
        <h1>Welcome to my SPA</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Go Home</Link>
            </li>
            <li>
              <Link to="/house/new">Create Hogwarts House</Link>
            </li>
            <li>
              <Link to="/student">Hogwarts Students</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/house/new" component={NewHouse}></Route>
        <Route exact path="/student" component={HogwartStudents}></Route>
        <Route path="*" component={NotFound}></Route>
      </Switch>
    </Router>
  )
}

export default App
