import { useState } from "react"
import Auth from "./components/Auth"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [auth, setAuth] = useState(true)

  if (localStorage.getItem("refresh-token") !== null) {
    setAuth(false)
  }

  return (
    <>
      {auth ? <Auth /> : <h1>Hello</h1>}
    </>
  )
}

export default App
