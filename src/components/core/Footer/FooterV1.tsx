import { useColorMode } from '@chakra-ui/react';
import Images from 'assets/images';
import BigScreenFooter from './BigScreenFooter';
import SmallScreenFooter from './SmallScreenFooter';

const Footer = () => {
  const { colorMode } = useColorMode();
  const bgColor = colorMode === 'light' ? 'glass.700' : 'glass.300';
  const logo = colorMode === 'light' ? Images.Common.Logo : Images.Common.LogoLight;
  const discord = colorMode === 'light' ? Images.Common.Discord : Images.Common.DiscordLight;
  const twitter = colorMode === 'light' ? Images.Common.Twitter : Images.Common.TwitterLight;
  const textColor = colorMode === 'light' ? 'glass.100' : 'glass.700';
  const youtube = colorMode === 'light' ? Images.Common.Youtube : Images.Common.YoutubeLight;

  return (
    <>
      <BigScreenFooter
        logo={logo}
        bgColor={bgColor}
        youtube={youtube}
        discord={discord}
        twitter={twitter}
        textColor={textColor}
      />
      <SmallScreenFooter
        logo={logo}
        bgColor={bgColor}
        youtube={youtube}
        discord={discord}
        twitter={twitter}
        textColor={textColor}
      />
    </>
  );
};

export default Footer;
