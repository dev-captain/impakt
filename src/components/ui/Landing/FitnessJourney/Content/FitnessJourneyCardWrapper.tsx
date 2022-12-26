import React from 'react';
import { Box } from '@chakra-ui/react';
import { isMobile } from 'react-device-detect';
import FitnessJourneyCard from './FitnessJourneyCard';

const FitnestJourneyCardWrapper: React.FC = () => {
  return (
    <Box
      display={{ base: 'block', md: 'flex' }}
      justifyContent="space-between"
      gap={{ lg: '35px', base: '22px' }}
      mt="40px"
    >
      {journeyData.map((data) => (
        <FitnessJourneyCard
          link={data.link}
          key={`item-${data.title}`}
          video={data.video}
          title={data.title}
          description={data.description}
        >
          {data.description}
        </FitnessJourneyCard>
      ))}
    </Box>
  );
};

const journeyData = [
  {
    link: 'https://vsports.me',
    video: 'https://d3mgxbfgxk1n2v.cloudfront.net/landing-page/Fun+Motion+Controlled+Games.mp4',
    title: 'Fun Motion Controlled Games',
    description: 'Flex your reflexes! Play in your web browser now',
  },
  {
    link: isMobile
      ? 'impakt://challenge?challengeId=1761'
      : 'https://fitness.impakt.com/?challengeId=1761&next=https://impakt.com',
    video: 'https://d3mgxbfgxk1n2v.cloudfront.net/landing-page/Social+Fitness+with+Friends.mp4',
    title: 'Social Fitness with Friends',
    description:
      'We bring the studio to your home. Hang out with old friends and make new ones, too!',
  },
  {
    link: isMobile
      ? 'impakt://challenge?challengeId=1809'
      : 'https://fitness.impakt.com/?challengeId=1809&next=https://impakt.com',
    video: 'https://impakt-static-files.s3.amazonaws.com/landing-page/not+busy.mp4',
    title: 'Not Too Busy for Lazy Fitness',
    description: 'Grab your phone, smack it to your face and start your magical transformation',
  },
];

export default FitnestJourneyCardWrapper;
