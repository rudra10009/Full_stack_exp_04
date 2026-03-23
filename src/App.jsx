import { useState } from 'react'

function App() {
  const [msg, setMsg] = useState('')

  return (
    <>
      <input placeholder="Enter name" />
      <button onClick={() => setMsg('Success')}>Submit</button>
      <p>{msg}</p>
    </>
  )
}

export default App