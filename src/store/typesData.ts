interface Post{
    id: number
    title: string
    body: string
}
export interface CouterState{
    count: number
    title: string
    posts: Post[]
    increment: (value:number) =>void
    getPosts: ()=> Promise<void>
    clearStore: ()=>void
    multiply: (value:number)=>void
}
