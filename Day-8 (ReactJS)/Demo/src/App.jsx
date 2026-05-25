import Hello from './Hello.jsx' 
import reactLogo from './assets/react.svg'
import Bye from './Bye.jsx'
import './App.css'
import Propex from './Propex.jsx'

function App() {

  return (
    <>
      <h1>Hello World</h1>
      <Bye />
      <img src={reactLogo} />
      <Hello />

      <Propex name="Something" age="19" city="AMD"/>
    </>
  )
}

export default App