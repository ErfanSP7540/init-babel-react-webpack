import ReactDOM from 'react-dom'
import React from 'react'

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const Home = () => <h1>
                        <Link to="/about"> Click About</Link>
                        <Link to="/footer">Click Footer</Link>
                        <Link to="/asasd">Click NotFound</Link>
                    </h1>
const About = ()    => <h1>About Us</h1>
const Footer = ()   => <h1>Footer</h1>
const NotFound = () => <h1>NotFound</h1>

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/footer" component={Footer} />
      <Route  component={NotFound} />
    </Switch>
  </Router>
)

ReactDOM.render (<App />,document.getElementById('app')) 