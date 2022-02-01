import { Box } from '@chakra-ui/react';
import Images from 'assets/images';

type Props = {
  isSpecificWidth?: boolean;
};

const ScreenVideo = ({ isSpecificWidth }: Props) => {
  return (
    <Box
      opacity="0.6"
      pos="absolute"
      backgroundPosition="center"
      bgImage={Images.Common.Peter}
      right={{ base: 'auto', xl: '16px' }}
      maxH={{ base: 'auto', sm: 'auto', md: '550px' }}
      minH={{ base: '140px', sm: '80%', md: '17vw', xl: '24vw' }}
      borderRadius={{ base: '2px', sm: '2px', md: '2px', xl: '4px' }}
      top={{ base: '16px', sm: '8px', md: '32px', xl: '32px', '2xl': '64px' }}
      backgroundSize={{ base: 'contain', sm: 'fill', md: 'center', xl: 'cover' }}
      minW={{ base: '240px', sm: '74%', md: '30vw', xl: '35vw', '2xl': '38vw' }}
      mx={{ base: 'auto', sm: '8vw', md: isSpecificWidth ? '5vw' : '8vw', xl: 'auto' }}
    />
  );
};

export default ScreenVideo;
