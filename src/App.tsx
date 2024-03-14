import shallow from "zustand/shallow";
import { useCounterStore } from './store/counterStore';

function App() {

  const {title, count}= useCounterStore((state)=> ({
    count: state.count,
    title: state.title
  }), shallow);

  const {increment, getPosts}=useCounterStore();

  getPosts()

  return (
    <div className="App">
      <h1>{title}: {count}</h1>
      <button onClick={()=> increment(10)}>Increment by 10</button>
    </div>
  );
}

export default App;
