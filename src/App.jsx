import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  const [counter,setCounter] = useState(0);
  const [theme,setTheme] = useState(true);

  const increase = (event) =>{
    event.preventDefault();
    setCounter((currentCounter) => currentCounter + 1);
  }

  const diminish = (event) =>{
    event.preventDefault();
    setCounter((currentCounter) => currentCounter - 1);
  }

  const changeTheme = (event) =>{
    event.preventDefault();
    setTheme((current) => !current);
  }

  return (
    <section className='section'>
      <div className={theme ? 'theme-sure' : 'theme-dark'}>
        <div className='icon'>
          <button type='button' onClick={changeTheme}>
            {theme ? <i className="fas fa-moon" /> : <i class="fas fa-sun"></i>}
          </button>
        </div>

        <div className='count'>
          <h1>{counter}</h1>

          <button className='button-d' type='button'  onClick={diminish}>
            <i className='fas fa-minus' />
          </button>

          <button className='button-i' type='button'  onClick={increase}>
            <i className='fas fa-plus' />
          </button>
        </div>
        </div>
    </section>
  )
}

export default App
