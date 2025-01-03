import { RootState } from "@/redux/store";
import { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";


interface InitialState {
    tasks:ITask[];
    filter: 'all' | 'high' | 'medium' | 'low';
}

const initialState:InitialState={
    tasks:[
        {
            id:'05',
            title:'Initial front end',
            description:'create home page and routing',
            dueDate:'2025-11',
            isComplete:false,
            priority:'high'
        },
        {
            id:'06',
            title:'create git hub',
            description:'create github page and routing',
            dueDate:'2025-11',
            isComplete:false,
            priority:'low'
        }
    ],
    filter:'all'
}

const taskSlice =createSlice({
    name:'task',
    initialState,
    reducers:{}
})
export const selectTasks  = (state:RootState)=>{
    return state.todo.tasks
}
export const selectFilter =(state:RootState)=>{
    return state.todo.filter
}
export default taskSlice.reducer