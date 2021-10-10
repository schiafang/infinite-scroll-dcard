import './App.css'
import logo from '../assets/logo.svg'
import Home from '../containers/Home'

function App() {
  return (
    <div id='App'>
      <header>
        <div className='header-left'>
          <a href='/'>
            <img src={logo} alt='logo' />
          </a>
          <input className='search-bar' placeholder='搜尋' disabled></input>
        </div>
      </header>
      <main>
        <Home />
      </main>
    </div>
  )
}

export default App
