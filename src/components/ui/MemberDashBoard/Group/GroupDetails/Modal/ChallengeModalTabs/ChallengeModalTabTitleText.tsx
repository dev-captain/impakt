import React from 'react';
import { Common } from '../../../../../..';

interface ChallengeModalTabTitleTextPropsI {
  title: string;
  isSelected: boolean;
  onClick: () => void;
}
const ChallengeModalTabTitleText: React.FC<ChallengeModalTabTitleTextPropsI> = ({
  title,
  isSelected,
  onClick,
}) => {
  return (
    <Common.ImpaktButton
      m="0 !important"
      onClick={onClick}
      maxW="120px"
      _focus={{ boxShadow: 'none' }}
      _active={{ background: '', color: '#29323B' }}
      _selected={{ color: '#29323B', borderColor: '#29323B' }}
      _hover={{ background: '', color: isSelected ? '#fff' : '#000' }}
      color={isSelected ? '#fff' : 'fitnessGray'}
      fontWeight="500"
      marginRight="24px"
      fontSize={{ base: '14px', md: '18px' }}
      lineHeight="18px"
      background={isSelected ? '#29323B' : '#EEF4F6'}
      transition="background .3s ease-out"
    >
      {title}
    </Common.ImpaktButton>
  );
};
export default ChallengeModalTabTitleText;
