import shallow from "zustand/shallow";
import { useCounterStore } from './store/counterStore';

function App() {

  const {title, count}= useCounterStore((state)=> ({
    count: state.count,
    title: state.title
  }), shallow);

  const increment=useCounterStore(state=> state.increment);

  return (
    <div className="App">
      <h1>{title}: {count}</h1>   
    </div>
  );
}

export default App;
