import { useState } from "react";
import Form from "../../components/Form";
import List from "../../components/List";
import { TodoContainer } from "./styles";

interface TaskProps {
  id: number;
  text: string;
  isCompleted: boolean;
}

export default function Todo() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  const handleAddTask = (task: TaskProps) => setTasks((state) => [...state, task]);

  const handleRemoveTask = (task: TaskProps) => setTasks((state) => state.filter((t) => t.id !== task.id));

  const handleTaskCompleted = (task: TaskProps) => setTasks((state) => state.map((t) => t.id === task.id
    ? ({ ...t, isCompleted: !t.isCompleted })
    : t
  ));

  return (
    <TodoContainer>
      <Form
        handleAddTask={handleAddTask}
      />
      <List
        tasks={tasks}
        handleTaskCompleted={handleTaskCompleted}
        handleRemoveTask={handleRemoveTask}
      />
    </TodoContainer>
  )
}