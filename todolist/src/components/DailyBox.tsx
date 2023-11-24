import * as St from '../components/mainbox'
import { ReactNode } from 'react';
import { Line } from './line';

interface Dated {
  children: ReactNode;
}


const DailyBox = ({children}: Dated) => {
  return (
    <St.DailyBox>
      {children}
      <Line/>
    </St.DailyBox>
  )
}

export default DailyBox;