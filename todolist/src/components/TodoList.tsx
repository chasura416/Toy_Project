import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: string[];
}

const TodoList = ({todos}: TodoListProps) => {
  return (
    <div style={{flex: '1 1 auto'}}>
      {todos.map((todo, index) => (
        <TodoItem key={index} text={todo} />
      ))}
    </div>
  )
}

export default TodoList;