import { HStack } from '@chakra-ui/react';
import { memo } from 'react';
import SocialIcon from './SocialIcon';

const SocialMediasArea = () => {
  return (
    <HStack top={10} zIndex={1} spacing={10} paddingTop={{ base: 8, md: 0 }}>
      <SocialIcon name="Discord" href="https://discord.gg/Wbx7j9DJwT" />
      <SocialIcon name="Twitter" href="https://twitter.com/demideuszin" />
    </HStack>
  );
};

export default memo(SocialMediasArea);
