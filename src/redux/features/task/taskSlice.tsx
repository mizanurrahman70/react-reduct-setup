import { RootState } from "@/redux/store";
import { ITask } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';



interface InitialState {
    tasks:ITask[];
    filter: 'all' | 'high' | 'medium' | 'low';
}

const initialState:InitialState={
    tasks:[],
    filter:'all'
}

const taskSlice =createSlice({
    name:'task',
    initialState,
    reducers:{
        addTask:(state,action :PayloadAction<ITask>)=>{
            const id = uuidv4();
            const taskData ={
                ...action.payload,
                id,
                isFinite:false

            }
            state.tasks.push(taskData)
        }
    }
})
export const {addTask} = taskSlice.actions
export const selectTasks  = (state:RootState)=>{
    return state.todo.tasks
}
export const selectFilter =(state:RootState)=>{
    return state.todo.filter
}
export default taskSlice.reducer