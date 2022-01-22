import { VStack } from '@chakra-ui/react';
import HeroLayout from 'components/layouts/HeroLayout';
import { layoutPadding } from 'theme';
import SingleTeamCard from './SingleTeamCard';

const SingleTeamHero = () => {
  return (
    <HeroLayout hideBlur>
      <VStack px={layoutPadding} w="full" py={{ base: 16, md: 32 }}>
        <SingleTeamCard />
      </VStack>
    </HeroLayout>
  );
};

export default SingleTeamHero;
