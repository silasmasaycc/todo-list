import { useState, FormEvent } from "react";
import { Button, FormContainer, Input } from "./styles";
import plus from "../../assets/plus.svg";

interface TaskProps {
  id: number;
  text: string;
  isCompleted: boolean;
}

interface FormProps {
  handleAddTask: (task: TaskProps) => void;
}

export default function Form({ handleAddTask }: FormProps) {
  const [taskInput, setTaskInput] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const newTask: TaskProps = {
      id: new Date().getTime(),
      text: taskInput,
      isCompleted: false
    }

    handleAddTask(newTask);
    setTaskInput('');
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
      />
      <Button type="submit" disabled={!taskInput}>
        Criar
        <img src={plus} alt="ícone com operador de adição" />
      </Button>
    </FormContainer>
  )
}