import { useState } from "react";
import styled from "@emotion/styled";

interface AddTodoList {
  id: number;
  text: string;
  completed: boolean;
}

const TextBox = styled.input`
  
`
const TextBoxButton = styled.button`
  
`

const AddTodo = () => {
  const [write, setWrite] = useState<AddTodoList[]>([
    {
      id: 1,
      text: "할일 1",
      completed: false,
    },
    {
      id: 2,
      text: "할일 2",
      completed: false,
    },
  ]);

  const TextBoxHandler = () => {
    
  }
  const TextBoxButtonHandler = () => {
    
  }
  
  return (
    <>
      <form>
        <TextBox
          type="text"
          placeholder="내용 작성"
          onChange={TextBoxHandler}
        />
        <TextBoxButton
          onClick={TextBoxButtonHandler}
        >
          등록
        </TextBoxButton>
      </form>
    </>
  )
}

export default AddTodo;