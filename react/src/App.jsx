import { useState } from 'react'
import reactLogo from './assets/react.svg'
import HelloButton from './HelloButton.jsx'
import './App.css'

function App() {
  return (
    <HelloButton
      onClick={() => alert(123)}
      tooltip={false}
    />
  )
}

export default App
