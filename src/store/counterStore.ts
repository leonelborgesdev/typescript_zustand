import create from "zustand";

interface CouterState{
    count: number
    title: string
}

export const useCounterStore=create<CouterState>((set)=>({
    count: 10,
    title: "Some title",
    increment: (value: number)=> set(state=> ({
        count: state.count + value
    }))
}))