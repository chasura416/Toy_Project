import * as St from '../components/mainbox'
import { ReactNode } from 'react';
import { Line } from './line';

interface Dated {
  children: ReactNode;
}


const TaskDailyBox = ({children}: Dated) => {
  return (
    <St.TaskDailyBox>
      {children}
      <Line/>
    </St.TaskDailyBox>
  )
}

export default TaskDailyBox;