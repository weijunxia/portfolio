import './styles/app.css'
import NavBar from './components/NavBar'
import Projects from './components/Projects'
import {} from 'react-router-dom'
import Home from './pages/Home'
import Contact from './components/Contact'
function App() {
  return (
    <div className="App">
      <div className="app">
        <NavBar />
        <Home />
      </div>
    </div>
  )
}

export default App
