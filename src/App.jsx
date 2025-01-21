import './App.css'
import { useSelector , useDispatch } from 'react-redux'
import { increment , decrement } from './action/index.js'

function App() {
  const count = useSelector(state => {
    return console.log(state.count);
    
  } )
  

  return (
    <>
    <div className="App"></div>
    </>
  )
}

export default App
