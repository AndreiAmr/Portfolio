import { useContext } from 'react';
import { Flex } from '@chakra-ui/react';
import FilterButton from '../FilterButton';
import { TypeEnum, filtersOptions, filtersOptionsEnglish } from '../../utils';
import { Bounce } from 'react-awesome-reveal';
import { ControllerContext } from '@/infra/contexts/Controllers.context';
import { LanguageEnum } from '@/infra/contexts/types';

interface FiltersProps {
  filter: TypeEnum;
  changeFilter: (filter: TypeEnum) => void;
}

const Filters = ({ filter, changeFilter }: FiltersProps) => {
  const {
    items: { currentLangEnum, isAnimating },
  } = useContext(ControllerContext);

  return (
    <Flex gap="2vw" marginTop="1.3vh">
      <Bounce cascade delay={500} duration={500}>
        <FilterButton
          label="Todos"
          active={filter === TypeEnum.ALL}
          onClick={() => changeFilter(TypeEnum.ALL)}
          isAnimating={isAnimating}
        />

        {currentLangEnum === LanguageEnum.portugues
          ? filtersOptions.map((item) => {
              return (
                <FilterButton
                  label={item.label}
                  active={filter === item.type}
                  onClick={() => changeFilter(item.type)}
                  isAnimating={isAnimating}
                />
              );
            })
          : filtersOptionsEnglish.map((item) => {
              return (
                <FilterButton
                  label={item.label}
                  active={filter === item.type}
                  onClick={() => changeFilter(item.type)}
                  isAnimating={isAnimating}
                />
              );
            })}
      </Bounce>
    </Flex>
  );
};

export default Filters;
