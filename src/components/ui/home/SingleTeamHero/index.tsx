import { VStack } from '@chakra-ui/react';
import HeroLayout from 'components/layouts/HeroLayout';
import SingleTeamCard from './SingleTeamCard';

const SingleTeamHero = () => {
  return (
    <HeroLayout>
      <VStack px={[4, 8, 12, 16, 40]} w="full" py={{ base: 16, md: 0 }}>
        <SingleTeamCard />
      </VStack>
    </HeroLayout>
  );
};

export default SingleTeamHero;
