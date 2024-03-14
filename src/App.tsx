import shallow from "zustand/shallow";
import { useCounterStore } from './store/counterStore';
import { useEffect } from "react";

function App() {

  const {title, count, posts}= useCounterStore((state)=> ({
    count: state.count,
    title: state.title,
    posts: state.posts
  }), shallow);

  const {increment, getPosts, clearStore, multiply}=useCounterStore();

  useEffect(()=>{
    getPosts()
  },[])

  return (
    <div className="App">
      <h1>{title}: {count}</h1>
      <button onClick={()=> increment(10)}>Increment by 10</button>
      <button onClick={()=>clearStore()}>
        ClearStore
      </button>
      <button onClick={()=>multiply(2)}>
        Multiply by 2
      </button>
      <hr />
      {JSON.stringify(posts)}
    </div>
  );
}

export default App;
