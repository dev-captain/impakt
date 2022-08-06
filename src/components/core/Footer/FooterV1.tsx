import { useColorMode } from '@chakra-ui/react';
import Images from 'assets/images';
import BigScreenFooter from './BigScreenFooter';
import SmallScreenFooter from './SmallScreenFooter';

const Footer = () => {
  const { colorMode } = useColorMode();
  const bgColor = colorMode === 'light' ? 'glass.700' : 'glass.300';
  const textColor = colorMode === 'light' ? 'glass.100' : 'glass.700';

  return (
    <>
      <BigScreenFooter bgColor={bgColor} textColor={textColor} />
      <SmallScreenFooter bgColor={bgColor} textColor={textColor} />
    </>
  );
};

export default Footer;
