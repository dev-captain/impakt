import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Common } from '@/components';
import { FC } from 'react';

interface HeroVideoEnterButtonPropsI {
  onClick: () => void;
}
const HeroVideoEnterButton: FC<HeroVideoEnterButtonPropsI> = ({ onClick }) => {
  return (
    <Common.ImpaktButton
      variant="transparent"
      maxW="348px"
      w="70%"
      h={{ base: '60px', md: '75px' }}
      borderRadius="10px"
      type="submit"
      border="3px solid white"
      fontSize={{ base: '21.7856px' }}
      fontWeight="600"
      margin="auto"
      display="flex"
      gap="5px"
      onClick={onClick}
    >
      Enter
      <ArrowForwardIcon />
    </Common.ImpaktButton>
  );
};
export default HeroVideoEnterButton;
