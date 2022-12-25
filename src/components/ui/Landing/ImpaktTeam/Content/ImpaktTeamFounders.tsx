import { Text, Box, GridItem, HStack, VStack } from '@chakra-ui/react';
import * as React from 'react';
import Card from '../Card';
import Keys from '@/i18n/translations/en';

const ImpaktTeamFounders: React.FC = () => {
  const leadership = [Keys.leadershipData.data];

  return (
    <VStack
      width="100%"
      mt={{ base: '20px !important', lg: '50px !important' }}
      padding={{ base: '1em', md: '0' }}
      k
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
          Founders
        </Text>
        <HStack
          w="full"
          justifyContent={{ base: 'center', lg: 'center' }}
          flexWrap="wrap"
          rowGap={{ base: '0', lg: '50px' }}
          columnGap="50px"
          margin="40px 0"
        >
          {leadership.map((d: any) => (
            <GridItem
              marginLeft="0 !important"
              key={d.name}
              w="full"
              maxW="275px"
              margin="20px 0 !important"
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

export default ImpaktTeamFounders;
