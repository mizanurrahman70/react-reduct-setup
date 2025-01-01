import './App.css'
import { decrement, increment } from './redux/features/counterSlice'
import { useAppDispatch, useAppSelector } from './redux/hook'

function App() {
  const dispatch = useAppDispatch()
  const {count} = useAppSelector((state) => state.counter)
  const handleIncrement= (amount:number) =>{
    dispatch(increment(amount))
  }
  const handleDecrement= ()=>{
    dispatch(decrement())
  }


  return (
    <>
      <div>
        <h1 >counter with reduce</h1>
        <button onClick={()=>handleIncrement(5)}>increment by 5</button>
        <button onClick={()=>handleIncrement(1)}>increment</button>
        <div>{count}</div>
        <button onClick={handleDecrement}>decrement</button> 
      </div>
    </>
  )
}

export default App
