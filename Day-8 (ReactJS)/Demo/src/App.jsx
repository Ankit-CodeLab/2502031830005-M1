import Hello from './Hello.jsx' 
import reactLogo from './assets/react.svg'
import Bye from './Bye.jsx'
import './App.css'

function App() {

  return (
    <>
      <h1>Hello World</h1>
      <Bye />
      <img src={reactLogo} />
      <Hello />
    </>
  )
}

export default App