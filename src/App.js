import './styles/app.css'
import NavBar from './components/NavBar'
import Projects from './components/Projects'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './components/Contact'
function App() {
  return (
    <div className="App">
      <div className="app">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </div>
    </div>
  )
}

export default App
