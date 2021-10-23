import './styles/app.css'
import NavBar from './components/NavBar'
import Home from './pages/Home'

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
