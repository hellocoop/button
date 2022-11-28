import { useState } from 'react'
import reactLogo from './assets/react.svg'
import HelloButton from './HelloButton.jsx'
import './App.css'

function App() {
  const [loading, setLoading] = useState(false)
  return (
    <HelloButton
      onClick={() => setLoading(!loading)}
      loading={loading}
      tooltip={true}
      style="hello-btn-white-on-dark"
      hoverStyle="hello-btn-hover-flare"
      language="fr"
    />
  )
}

export default App
