import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { HelloButton } from './HelloButton.jsx'
import './App.css'

function App() {
  const [loading, setLoading] = useState(false)
  return (
    <HelloButton
      onClick={() => setLoading(!loading)}
      loading={loading}
      variant="hello-btn-white-on-dark"
      hoverVariant="hello-btn-hover-flare"
      customLabel="ō&nbsp;&nbsp;&nbsp;Continue with Hellō Quickstart"
      tooltip={true}
      lang="fr"
    >
    </HelloButton>
  )
}

export default App
