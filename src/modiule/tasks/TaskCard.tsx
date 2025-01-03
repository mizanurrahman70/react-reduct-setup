import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ITask } from "@/types";

interface IProps {
    task: ITask
}
const TaskCard = ({ task }: IProps) => {
    return (
        <div className="d-flex justify-content-center">
            <Card>
                <h1 >{task.title}</h1>
                <p>{task.description}</p>
                <p>{task.dueDate}</p>
                <p>{task.isComplete}</p>
                <p className={cn(' rounded-md', { 
                    'bg-green-500': task.priority === 'low',
                    'bg-red-500': task.priority === 'high',
                    'bg-orange-500': task.priority === 'medium',

                 })}>
                    {task.priority}
                </p>
            </Card>
        </div>
    );
};

export default TaskCard;