import { AddTaskModal } from '@/modiule/AddTaskModal';
import TaskCard from '@/modiule/tasks/TaskCard';
import { selectFilter, selectTasks } from '@/redux/features/task/taskSlice';
import { useAppSelector } from '@/redux/hook';


const Tasks = () => {
    const tasks =useAppSelector(selectTasks)
    const filter =useAppSelector(selectFilter)
    console.log({tasks},{filter})
    
    return (
        <div>
            <h1>task</h1>
            <AddTaskModal></AddTaskModal>
           <div className='grid grid-cols-2 gap-4'>
           {
                tasks.map((task)=>(<TaskCard task={task} key={task.id}></TaskCard>))
            }
           </div>
        </div>
    );
};

export default Tasks;