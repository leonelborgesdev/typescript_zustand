import create from "zustand";

interface Post{
    id: number
    title: string
    body: string
}
interface CouterState{
    count: number
    title: string
    increment: (value:number) =>void
    posts: Post[]
}

export const useCounterStore=create<CouterState>((set)=>({
    count: 10,
    title: "Some title",
    posts: [],
    increment: (value: number)=> set(state=> ({
        count: state.count + value
    })),
    getPosts: async()=>{
        const res=await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts=await res.json()
        console.log(posts)
    }
}))