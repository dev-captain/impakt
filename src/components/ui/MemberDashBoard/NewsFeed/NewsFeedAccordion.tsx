/* eslint-disable react/no-unused-prop-types */
import { Box, VStack, Text, HStack } from '@chakra-ui/react';
import * as React from 'react';
import { I } from 'components';
import { useNavigate } from 'react-router-dom';
// import truncH from 'trunc-html';
// import { usePersistedDiscourseStore } from '../../../../lib/zustand';

// import { useAppSelector } from '../../../../hooks';

const NewsFeedAccordion: React.FC = () => {
  const navigate = useNavigate();
  const socialMedias = [
    { id: 1, bg: '#29323B', icon: <I.TiktokBigIcon />, href: 'https://www.tiktok.com/@impaktlife' },
    {
      id: 2,
      bg: 'linear-gradient(45deg, #EE0016 0.33%, #D20067 50.65%, #C0009F 100.33%);',
      icon: <I.InstagramBigIcon />,
      href: 'https://www.instagram.com/impakt.life/',
    },
    {
      id: 3,
      bg: '#F04153',
      icon: <I.YoutubeBigIcon />,
      href: 'https://www.youtube.com/channel/UCxQBnTaxPdlmxMEfPwOuBPw/featured',
    },
    {
      id: 4,
      bg: '#5662F6',
      icon: <I.DiscordBigIcon />,
      href: 'https://discord.gg/impaktlife',
    },
    {
      id: 5,
      bg: '#36B9FF',
      icon: <I.TwitterBigIcon />,
      href: 'https://twitter.com/impaktlife',
    },
    {
      id: 7,
      bg: '#1877F2',
      icon: <I.FacebookBigIcon />,
      href: 'https://www.facebook.com/impakt.life',
    },
    {
      id: 8,
      bg: '#0A66C2',
      icon: <I.LinkedInBigIcon />,
      href: 'https://www.linkedin.com/company/impaktlife/',
    },
  ];

  return (
    <VStack spacing="12px" w="full">
      {getStartedLinkItems?.map(({ title, href, order }) => (
        <HStack
          as="a"
          href={href}
          target="_blank"
          onClick={(e) => {
            if (!href) return;
            if (!href.includes('https') || !href.includes('http')) {
              e.preventDefault();
              navigate(href);
            }
          }}
          w="full"
          key={`get-started-item-${order}`}
          background="#F5F8FA"
          borderRadius="1em"
          border="0"
          position="relative"
          p="1em"
          columnGap="12px"
          justifyContent="space-between"
        >
          <Box>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              id="order-box-dot"
              w="24px"
              h="24px"
              background="#4E6070"
              borderRadius="50%"
            >
              <Text color="#F5F8FA" lineHeight="100%">
                {order}
              </Text>
            </Box>
          </Box>
          <Box w="full" id="news-">
            <Text color="#29323B" fontWeight="400" fontSize="18px" lineHeight="26px">
              {title}
            </Text>
          </Box>

          {href && (
            <Box transform="rotate(270deg)">
              <I.DropIcon />
            </Box>
          )}
        </HStack>
      ))}
      {/* // ocial medias */}
      <HStack
        flexWrap="wrap"
        justifyContent="flex-start"
        rowGap="12px"
        columnGap="12px"
        alignItems="flex-start"
        w="full"
        spacing="0"
      >
        {socialMedias.map(({ id, bg, icon, href }) => (
          <Box
            key={id}
            display="flex"
            w={{ base: '48px', md: '60px' }}
            bg={bg}
            h={{ base: '48px', md: '60px' }}
            justifyContent="center"
            alignItems="center"
            as="a"
            href={href}
            borderRadius="12px"
            target="_blank"
          >
            {icon}
          </Box>
        ))}
      </HStack>
    </VStack>
  );
};

const getStartedLinkItems = [
  { title: 'Explore Groups', href: '/d/g', order: 1 },
  { title: 'Try vSports Minigames', href: 'https://vsports.me/', order: 2 },
  { title: 'Download Fitness App', href: '/download', order: 3 },
  { title: 'Follow us', href: undefined, order: 4 },
];

export default NewsFeedAccordion;
