
import { createWithEqualityFn } from "zustand/traditional";
import { CouterState } from "./typesData";

export const counterStore = createWithEqualityFn<CouterState>((set, get)=>({
    count: 10,
    title: "Some title",
    posts: [],
    increment: (value: number)=> set(state=> ({
        count: state.count + value
    })),
    getPosts: async()=>{
        const posts=await (await fetch('https://jsonplaceholder.typicode.com/posts')).json()
        set(state=>({
            ...state,
            posts
        }))
    },
    clearStore:()=>{
        set({}, true)
    },
    multiply: (value:number)=>{
        const { count }=get()
        set({ count: count * value})
    }
}))