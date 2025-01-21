import './App.css'
import { useSelector , useDispatch } from 'react-redux'

function App() {
  const count = useSelector(state => {
    return console.log(state.count);
    
  } )
  

  return (
    <>
    <div className="App">
      <h1>Count: {count}</h1>
    </div>
    </>
  )
}

export default App
