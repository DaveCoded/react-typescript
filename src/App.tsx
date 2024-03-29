import React from 'react'
import logo from './logo.svg'
import './App.css'

import { Head } from './components/Head'
import { Button } from './components/Button'
import { Input } from './components/Input'

const App: React.FC = () => {
  return (
    <div className='App'>
      <Head title='hello' />
      <Button onClick={e => {
        e.preventDefault()
        console.log(e)
      }}>
        Hello World
      </Button>
      <Input />
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'>
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
