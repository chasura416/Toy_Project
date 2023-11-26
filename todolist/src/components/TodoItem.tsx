import { useState } from "react"
import styled from "@emotion/styled";

interface TodoItemProps {
  text: string;
}

const TodoItemContainer = styled.div< {todo: boolean} >`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  text-decoration: ${(props) => (props.todo ? 'line-through' : 'none')};
`

const CheckBox = styled.input`
  margin-right: 8px;
`

const TodoItem = ({text}: TodoItemProps) => {
  const [todo, setTodo] = useState(false);
  
  const handleCheckBoxChange = () => {
    setTodo(!todo);
  };

  return (
    <TodoItemContainer>
      <CheckBox
        type="checkbox"
        checked={todo}
        onChange={handleCheckBoxChange}
        <div>{text}</div>
    </TodoItemContainer>
  )
}

export default TodoItem;