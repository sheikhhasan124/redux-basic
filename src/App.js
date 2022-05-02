
import './App.css';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const counter = useSelector((state)=>state.counter)
  const dispatch = useDispatch()
  const inc =()=>{
    dispatch({type:'inc'})
  }
  const dec =()=>{
    dispatch({type:'dic'})
  }
  return (
    <div>
       <h2>counter app</h2>
       <h3>{counter}</h3>
       <button onClick={inc}>inc</button>
       <button onClick={dec}>dec</button>
    </div>
  );
}

export default App;
