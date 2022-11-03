import * as React from 'react';
import { VStack, Box, Text, GridItem, HStack } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import Card from '../Card';

const ImpaktTeamAdvisors: React.FC = () => {
  const { t } = useTranslation().i18n;
  const advisorTeam = t('advisorData.data', { returnObjects: true }) as object[];

  return (
    <VStack
      width="100%"
      mt={{ base: '20px !important', lg: '50px !important' }}
      padding={{ base: '1em', md: '0' }}
    >
      <Box
        width="100%"
        display="flex"
        justifyContent="center"
        flexWrap="wrap"
        // gap={{ md: '40px', base: '20px' }}
      >
        <Text
          width="100%"
          color="#35485a"
          fontSize="36px"
          fontWeight="700"
          textTransform="uppercase"
          textAlign="center"
        >
          Select Advisors
        </Text>
        <HStack
          w="full"
          maxW="1100px"
          justifyContent={{ base: 'center', lg: 'center' }}
          flexWrap="wrap"
          rowGap={{ base: '0', lg: '50px' }}
          columnGap="50px"
          margin="40px 0"
        >
          {advisorTeam.map((d: any) => (
            <GridItem
              marginLeft="0 !important"
              margin="20px 0 !important"
              key={d.name}
              w="full"
              maxW="275px"
              maxH="560px"
              p="24px 24px 24px"
              align="center"
              transitionDuration="150ms"
              justify="space-between"
              bgColor="#fff"
              position="relative"
              borderRadius="20px"
              backdropFilter="blur(40px)"
              boxShadow="0px 8px 15px -5px rgba(0, 0, 0, 0.8)"
            >
              <HStack w="full" align="center" justify="center">
                <Card
                  company={d.company}
                  title={d.job}
                  fname={d.fname}
                  lname={d.lname}
                  image={d.img}
                />
              </HStack>
            </GridItem>
          ))}
        </HStack>
      </Box>
    </VStack>
  );
};
export default ImpaktTeamAdvisors;
