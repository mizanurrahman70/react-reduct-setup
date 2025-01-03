import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './features/counters/counterSlice';
import taskReducer from './features/task/taskSlice.tsx'
 export const store = configureStore({
    reducer: {
        counter:counterReducer,
        todo:taskReducer
    }
})     

export type RootState = ReturnType<typeof store.getState>
export type appDispatch = typeof store.dispatch