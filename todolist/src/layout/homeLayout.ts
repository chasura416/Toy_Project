import styled from "@emotion/styled";

export const MainLayout = styled.div`
  max-width: 1440px;
  height: 100%;
  background-color: blue;
  color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;  
  gap: 30px;
` 
export const MainWrap = styled.div`
  height: 100vh;
  display: flex; 
  justify-content: center;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
  background-color: beige;
  gap: 50px;
`

export const MainTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`