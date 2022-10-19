import { Text, Box, GridItem, HStack, VStack } from '@chakra-ui/react';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import Card from '../Card';

const ImpaktTeamFounders: React.FC = () => {
  const { t } = useTranslation().i18n;

  const leadership = t('leadershipData.data', { returnObjects: true }) as object[];

  return (
    <VStack width="100%" mt="50px !important" padding={{ base: '1em', md: '0' }} k>
      <Box
        width="100%"
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
          Founders
        </Text>
        <HStack
          w="full"
          justifyContent={{ base: 'center', lg: 'center' }}
          flexWrap="wrap"
          rowGap="50px"
          columnGap="50px"
        >
          {leadership.map((d: any) => (
            <GridItem
              marginLeft="0 !important"
              key={d.name}
              w="full"
              maxW="275px"
              maxH="560px"
              p="24px 24px 24px"
              align="center"
              transitionDuration="150ms"
              justify="space-between"
              // bgColor="#fff"
              position="relative"
              borderRadius="20px"
              backdropFilter="blur(40px)"
              // boxShadow="0px 8px 15px -5px rgba(0, 0, 0, 0.8)"
            >
              <HStack w="full" align="center" justify="center">
                <Card company={d.company} fname={d.fname} lname={d.lname} />
              </HStack>
            </GridItem>
          ))}
        </HStack>
      </Box>
    </VStack>
  );
};

export default ImpaktTeamFounders;
