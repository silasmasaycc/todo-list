import clipboard from "../../assets/clipboard.png";
import remove from "../../assets/delete.svg";
import { ListContainer, ListContent, ListContentContainer, ListDelete, ListEmpty, ListInfoBadge, ListInfoContainer, ListInfoTitle } from "./styles";

interface TaskProps {
  id: number;
  text: string;
  isCompleted: boolean;
}

interface ListProps {
  tasks: TaskProps[];
  handleTaskCompleted: (task: TaskProps) => void;
  handleRemoveTask: (task: TaskProps) => void;
}

export default function List({
  tasks,
  handleTaskCompleted,
  handleRemoveTask
}: ListProps) {
  const tasksCompleted = tasks.filter((task) => task.isCompleted === true).length;

  console.log(tasks);

  return (
    <ListContainer>
      <ListInfoContainer>
        <div>
          <ListInfoTitle variant="blue-500">Tarefas criadas</ListInfoTitle>
          <ListInfoBadge>{tasks.length}</ListInfoBadge>
        </div>
        <div>
          <ListInfoTitle variant="purple-500">Concluídas</ListInfoTitle>
          <ListInfoBadge>
            {tasksCompleted} de {tasks.length}
          </ListInfoBadge>
        </div>
      </ListInfoContainer>

      {!tasks.length && (
        <ListEmpty>
          <img src={clipboard} alt="ícone de tarefas" />
          <h1>Você ainda não tem tarefas cadastradas</h1>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </ListEmpty>
      )}

      {!!tasks.length && (
        <ListContentContainer>
          {tasks.map((task) => (
            <div key={task.id}>
              <ListContent>
                <input
                  type="checkbox"
                  checked={task.isCompleted}
                  onChange={() => handleTaskCompleted(task)}
                />
                <span></span>
                {task.text}
              </ListContent>
              <ListDelete
                title="Remover Tarefa"
                onClick={() => handleRemoveTask(task)}
              >
                <img src={remove} alt="ícone de lixeira" />
              </ListDelete>
            </div>
          ))}
        </ListContentContainer>
      )}

    </ListContainer>
  )
}