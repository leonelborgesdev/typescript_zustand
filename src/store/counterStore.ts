import create from "zustand";

interface CouterState{
    count: number
}

export const useCounterStore=create<CouterState>(()=>({
    count: 10
}))