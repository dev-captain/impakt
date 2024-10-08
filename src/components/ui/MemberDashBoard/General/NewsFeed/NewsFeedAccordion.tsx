/* eslint-disable react/no-unused-prop-types */
import { Box, VStack, HStack } from '@chakra-ui/react';
import * as React from 'react';
import { I } from '@/components';
import { useNavigate } from 'react-router-dom';
import NewsFeedItem from './NewsFeedItem';
import routes from '../../../../../data/routes';
import { Socials } from '../../../../../data';
// import truncH from 'trunc-html';
// import { usePersistedDiscourseStore } from '../../../../lib/zustand';

// import { useAppSelector } from '../../../../hooks';

const NewsFeedAccordion: React.FC = () => {
  const navigate = useNavigate();
  const socialMedias = [
    { id: 1, bg: '#29323B', icon: <I.TiktokBigIcon />, href: Socials.tiktok },
    {
      id: 2,
      bg: 'linear-gradient(45deg, #EE0016 0.33%, #D20067 50.65%, #C0009F 100.33%);',
      icon: <I.InstagramBigIcon color="white" />,
      href: Socials.insta,
    },
    {
      id: 3,
      bg: '#F04153',
      icon: <I.YoutubeBigIcon />,
      href: Socials.youtube,
    },
    // {
    //   id: 4,
    //   bg: '#5662F6',
    //   icon: <I.DiscordBigIcon />,
    //   href: 'https://discord.gg/impaktlife',
    // },
    {
      id: 5,
      bg: '#36B9FF',
      icon: <I.TwitterBigIcon />,
      href: Socials.twitter,
    },
    {
      id: 7,
      bg: '#1877F2',
      icon: <I.FacebookBigIcon />,
      href: Socials.facebook,
    },
    {
      id: 8,
      bg: '#0A66C2',
      icon: <I.LinkedInBigIcon />,
      href: Socials.linkedin,
    },
  ];

  return (
    <VStack spacing="12px" w="full">
      {getStartedLinkItems?.map(({ title, href, order }) => (
        <NewsFeedItem
          title={title}
          href={href}
          order={order}
          key={`item-id-${order}`}
          onClick={(e) => {
            if (!href) return;
            if (!href.includes('https') || !href.includes('http')) {
              e.preventDefault();
              navigate(href);
            }
          }}
        />
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
            opacity="1"
            transition="all .2s linear"
            _hover={{ opacity: '0.6' }}
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
  { title: 'Join Our Community', href: routes.groupDetail(12), order: 1 },
  { title: 'Try vSports Minigames', href: 'https://vsports.me/', order: 2 },
  // {
  //   title: 'Try Fitness 2.0 on Web',
  //   href: 'https://fitness.impakt.com/?challengeId=1708',
  //   order: 3,
  // },
  { title: 'Download Fitness 2.0 App', href: '/download', order: 3 },
  { title: 'Follow us', href: undefined, order: 4 },
];

export default NewsFeedAccordion;
