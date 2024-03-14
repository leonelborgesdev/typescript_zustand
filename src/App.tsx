import './App.css';
import { useCounterStore } from './store/counterStore';

function App() {

  const count= useCounterStore((state)=> state.count);

  return (
    <div className="App">
      <h1>Counter: {count}</h1>   
    </div>
  );
}

export default App;
