import { useState, useEffect } from 'react';
import * as S from './animations';

interface Percentage {
  color: string;
  percentage: number;
}

const Percentage = ({ color, percentage }: Percentage) => {
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    if (counter < percentage) {
      setTimeout(() => setCounter(counter + 1), 20);
    }
  }, [counter]);

  return (
    <S.AnimationBar deg={counter * 3.6} color={color}>
      <S.Progress> {counter}% </S.Progress>
    </S.AnimationBar>
  );
};

export default Percentage;
