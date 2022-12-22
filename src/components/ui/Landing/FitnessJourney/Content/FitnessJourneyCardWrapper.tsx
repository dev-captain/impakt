import React from 'react';
import { Box, Text } from '@chakra-ui/react';
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
        <FitnessJourneyCard key={`item-${data.title}`} video={data.video} title={data.title}>
          {data.description}
        </FitnessJourneyCard>
      ))}
    </Box>
  );
};

const journeyData = [
  {
    video: 'https://d3mgxbfgxk1n2v.cloudfront.net/landing-page/Fun+Motion+Controlled+Games.mp4',
    title: 'Fun Motion Controlled Games',
    description: (
      <Text color="#1C1C28" maxWidth="280px">
        Flex your reflexes!{' '}
        <span>
          <a href="https://vsports.me/" rel="noreferrer" target="_blank">
            <b>Play </b>
          </a>
        </span>
        in your web browser now
      </Text>
    ),
  },
  {
    video: 'https://d3mgxbfgxk1n2v.cloudfront.net/landing-page/Social+Fitness+With+Friends.mp4',
    title: 'Social Fitness with Friends',
    description: (
      <Text color="#1C1C28" maxWidth="280px">
        We bring the studio to your home,. Hang out with old friends and make new ones, too!
      </Text>
    ),
  },
  {
    video: 'https://d3mgxbfgxk1n2v.cloudfront.net/landing-page/Not+Too+Busy+For+Lazy+Fitness.mp4',
    title: 'Not Too Busy for Lazy Fitness',
    description: (
      <Text color="#1C1C28" maxWidth="280px">
        Grab your phone, smack it to your face and start your magical transformation
      </Text>
    ),
  },
];
export default FitnestJourneyCardWrapper;
