import { DropdownMenu } from '@radix-ui/react-dropdown-menu'
import './App.css'
import { Button } from './components/ui/button'
import { ModeToggle } from './components/ui/mode-toggle'
import { decrement, increment } from './redux/features/counters/counterSlice'
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
        <Button onClick={()=>handleIncrement(5)}>increment by 5</Button> 
        <br />
        <br />
        <Button onClick={()=>handleIncrement(1)}>increment</Button>
        <div>{count}</div>
        <Button onClick={handleDecrement}>decrement</Button> 
        <ModeToggle></ModeToggle>
      </div>
    </>
  )
}

export default App
