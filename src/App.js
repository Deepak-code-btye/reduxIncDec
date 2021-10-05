import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { incNumber, decNumber } from './action';
const App = () => {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch()
  return (
    <>
      <center>
        <h2>Increment/Decrement No.</h2>
        <button onClick={() => dispatch(decNumber())}>-</button>
        <input type='text' value={myState} />
        <button onClick={() => dispatch(incNumber())}>+</button>

      </center>
    </>

  );
}

export default App;
