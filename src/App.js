import './styles/app.css'
import NavBar from './components/NavBar'
import Banner from './components/Banner'
import Projects from './components/Projects'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
function App() {
  return (
    <div className="App">
      <div className="app">
        <NavBar />

        <Switch>
          <Route path="/" component={Home} />
          <Route path="/projects" component={Projects} />
        </Switch>
      </div>
    </div>
  )
}

export default App
