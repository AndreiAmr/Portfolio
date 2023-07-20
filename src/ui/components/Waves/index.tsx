import { ControllerContext } from '@/infra/contexts/Controllers.context';
import { ThemeEnum } from '@/infra/contexts/types';
import {
  chakraDarkTheme,
  chakraTheme,
} from '@/infra/packages/chakraUI/theme.colors';
import { useContext } from 'react';

const Waves = () => {
  const {
    items: { theme },
  } = useContext(ControllerContext);

  const color =
    theme === ThemeEnum.dark
      ? chakraDarkTheme.colors.purple[800]
      : chakraTheme.colors.purple[800];

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" fill="none">
      <path
        fill={color}
        fill-opacity="1"
        d="M0,256L26.7,224C53.3,192,107,128,160,138.7C213.3,149,267,235,320,272C373.3,309,427,299,480,272C533.3,245,587,203,640,202.7C693.3,203,747,245,800,261.3C853.3,277,907,267,960,234.7C1013.3,203,1067,149,1120,160C1173.3,171,1227,245,1280,282.7C1333.3,320,1387,320,1413,320L1440,320L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"
      ></path>
    </svg>
  );
};

export default Waves;
