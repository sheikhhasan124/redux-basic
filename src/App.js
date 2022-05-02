
import './App.css';
import { useSelector } from 'react-redux';

function App() {
  const counter = useSelector((state)=>state.counter)
  return (
    <div>
       <h2>counter app</h2>
       <h3>{counter}</h3>
    </div>
  );
}

export default App;
