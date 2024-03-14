import create from "zustand";

interface CouterState{
    count: number
    title: string
    increment: (value:number) =>void
}

export const useCounterStore=create<CouterState>((set)=>({
    count: 10,
    title: "Some title",
    increment: (value: number)=> set(state=> ({
        count: state.count + value
    }))
}))