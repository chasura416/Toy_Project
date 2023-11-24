import * as St from "../components/mainbox";
import { MainLayout } from "../layout/homeLayout";
import { MainWrap } from "../layout/homeLayout";
import DailyBox from "../components/DailyBox";
import TaskDailyBox from "../components/TaskDailyBox";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

const Home = () => {
  return (
    <MainWrap>
      <MdArrowBackIos size={50} />
      <MainLayout>
        <header>Weekly TodoList</header>
        <St.MainBox>
          <DailyBox>월요일</DailyBox>
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
      <MdArrowForwardIos size={50} />
    </MainWrap>
  );
};

export default Home;
