import styled from "@emotion/styled";

export const MainLayout = styled.div`
  max-width: 1440px;
  height: 100%;
  background-color: beige;
  color: black;
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
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`