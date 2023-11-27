import * as St from "../components/mainbox";
import { Children, useState } from "react";
import styled from "@emotion/styled";
import { MainLayout, MainWrap, MainTitle } from "../layout/homeLayout";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import DailyBox from "../components/DailyBox";
import TaskDailyBox from "../components/TaskDailyBox";
import dayjs from "dayjs";
import TodoList from "../components/TodoList";

const HoverWrap = styled.div`
  cursor: pointer;
    &:hover{
      color: gray;
    }
`
const Home = () => {
  const [current, setCurrent] = useState(1);
  const today = dayjs();
  const mon = today.day(current).format("YY/MM/DD");
  const sun = today.day(current+6).format("YY/MM/DD");

  return (
    <MainWrap>
      <HoverWrap>
        <MdArrowBackIos
          size={50}
          onClick={() => {
            setCurrent(current - 7);
          }}
        />
      </HoverWrap>
      <MainLayout>
        <div style={{ width: "100%" }}>
          <h1 style={{ textAlign: "center" }}>Weekly TodoList</h1>
          <MainTitle>
            <h2 style={{ marginTop: "0px" }}>
              {mon} ~ {sun}
            </h2>
          </MainTitle>
        </div>
        <St.MainBox>
          <DailyBox>월요일
            <TodoList todos={[]}></TodoList>
          </DailyBox>
          <DailyBox>화요일</DailyBox>
          <DailyBox>수요일</DailyBox>
          <DailyBox>목요일</DailyBox>
          <DailyBox>금요일</DailyBox>
        </St.MainBox>
        <St.TaskBox>
          <TaskDailyBox>월요일</TaskDailyBox>
          <TaskDailyBox>화요일</TaskDailyBox>
          <TaskDailyBox>수요일</TaskDailyBox>
          <TaskDailyBox>목요일</TaskDailyBox>
          <TaskDailyBox>금요일</TaskDailyBox>
        </St.TaskBox>
      </MainLayout>
      <HoverWrap>
        <MdArrowForwardIos
          size={50}
          onClick={() => {
            if (current < 1) {
              setCurrent(current + 7);
            }
          }}
        />
      </HoverWrap>
    </MainWrap>
  );
};

export default Home;
