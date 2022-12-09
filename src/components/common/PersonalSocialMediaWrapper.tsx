import { Box, Text } from '@chakra-ui/react';
import * as React from 'react';
import { I } from 'components';

interface PersonalSocialMediaWrapperPropsI {
  socialMedia?: {
    platform: 'Instagram' | 'TikTok' | 'Facebook' | 'Website' | 'Twitter' | 'LinkedIn';
    href: string;
  }[];
}

const PersonalSocialMediaWrapper: React.FC<PersonalSocialMediaWrapperPropsI> = ({
  socialMedia,
}) => {
  if (!socialMedia) return null;

  return (
    <>
      {socialMedia.map(({ platform, href }) => (
        <Box
          key={`${platform}-item`}
          as="a"
          href={href}
          borderRadius="8px"
          display="flex"
          justifyContent="center"
          paddingY="5px"
          marginBottom="5px"
          cursor="pointer"
          alignItems="center"
          transition="0.5s"
          backdropFilter="blur(40px)"
          color="rgba(255, 255, 255, 0.75)"
          backgroundColor="rgba(255, 255, 255, 0.1)"
          _hover={{ backgroundColor: '#FFF', color: '#000' }}
          rowGap="8px"
          columnGap="8px"
        >
          <Box bgColor="transparent">
            {platform === 'Instagram' && <I.IGIcon width="20px" />}
            {platform === 'TikTok' && <I.TikTokIcon width="20px" />}
            {platform === 'Facebook' && <I.FBIcon width="20px" />}
            {platform === 'Website' && <I.WebIcon width="20px" />}
            {platform === 'Twitter' && <I.TwitterIcon width="20px" />}
            {platform === 'LinkedIn' && <I.LinkedInIcon width="20px" />}
          </Box>
          <Box>
            <Text textStyle="semiBold165">{platform}</Text>
          </Box>
        </Box>
      ))}
    </>
  );
};

export default PersonalSocialMediaWrapper;
