import * as React from 'react';
import { VStack, Box, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import Card from '../Card';

const ImpaktTeamAdvisors: React.FC = () => {
  const { t } = useTranslation().i18n;
  const advisorTeam = t('advisorData.data', { returnObjects: true }) as object[];

  return (
    <VStack
      width="100%"
      padding={{ lgx: '0 350px', lg: '0 50px', base: '0 16px' }}
      mt="50px !important"
    >
      <Box
        maxW="1544px"
        width="100%"
        alignItems="flex-end"
        display="flex"
        justifyContent="center"
        flexWrap="wrap"
        gap={{ md: '40px', base: '20px' }}
      >
        <Text
          width="100%"
          color="#35485a"
          fontSize="36px"
          fontWeight="700"
          textTransform="uppercase"
          textAlign="center"
        >
          Advisors
        </Text>
        {advisorTeam.map((d: any) => (
          <Box width={{ lg: '27%', md: '30%', base: '100%' }}>
            <Card
              company={d.company}
              title={d.job}
              fname={d.fname}
              lname={d.lname}
              post={d.post}
              image={d.img}
            />
          </Box>
        ))}
      </Box>
    </VStack>
  );
};
export default ImpaktTeamAdvisors;
