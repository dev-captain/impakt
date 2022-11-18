import { Button, Text } from '@chakra-ui/react';
import React from 'react';

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
    <Button
      m="0 !important"
      onClick={onClick}
      w="120px"
      h="40px"
      maxW="120px"
      variant="ghost"
      borderRadius="8px"
      _focus={{ boxShadow: 'none' }}
      // _active={{ background: '', color: '#29323B' }}
      // _selected={{ color: '#29323B', borderColor: '#29323B' }}
      // _hover={{ background: '', color: isSelected ? '#fff' : '#000' }}
      _active={{ background: '', color: '', outline: 0, border: 0 }}
      _hover={{ background: '', color: '' }}
      color={isSelected ? '#fff' : 'fitnessGray'}
      fontWeight="500"
      marginRight="24px"
      fontSize={{ base: '14px', md: '18px' }}
      lineHeight="18px"
      background={isSelected ? '#29323B' : '#EEF4F6'}
      transition="background .3s ease-out"
    >
      <Text fontWeight="500" fontSize="18px" lineHeight="18px" color="#fff">
        {title}
      </Text>
    </Button>
  );
};
export default ChallengeModalTabTitleText;
