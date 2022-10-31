/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import { VStack, Text, SimpleGrid, GridItem, HStack, Box, Link } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import keys from 'i18n/types';
import { I } from 'components';
import NavBarSocialIcons from '../Navbar/NavBarSocialIcons';

type Props = {
  bgColor: string;
  textColor: string;
};

const BigScreenFooter = ({ bgColor, textColor }: Props) => {
  const { t } = useTranslation().i18n;
  const navigate = useNavigate();

  return (
    <VStack
      h="100%"
      w="full"
      px="16px"
      bgColor={bgColor}
      color={textColor}
      py={{ base: 16, md: 0 }}
      d={{ base: 'none', md: 'flex' }}
    >
      <SimpleGrid columns={5} maxW="1200px" w="full">
        <GridItem colSpan={{ base: 5, md: 4 }}>
          <SimpleGrid columns={3} spacing="10px" h="216px" justifyContent="center" rowGap={4}>
            <GridItem colSpan={{ base: 3, md: 1 }} h="full" display={{ base: 'none', md: 'flex' }}>
              <VStack
                align={{ base: 'center', md: 'flex-start' }}
                spacing="16px"
                h="full"
                justify="center"
              >
                <Box cursor="pointer" onClick={() => navigate('/')} mr="32px">
                  <I.ImpaktIcon width="111px" height="32px" />
                </Box>
                <VStack spacing="8px" align={{ base: 'center', md: 'flex-start' }}>
                  <HStack
                    display="flex"
                    fontSize="12px"
                    lineHeight="24px"
                    flexDir="row"
                    fontWeight="500"
                  >
                    <Text fontWeight="400" opacity="0.6">
                      {t(keys.footer.madeBy)}
                    </Text>
                    <Text marginLeft="4px">impakt.com</Text>
                  </HStack>
                  <Text fontSize="12px" lineHeight="16px" opacity="0.6">
                    {t(keys.footer.allRightReserved)}
                  </Text>
                  <Link href="/terms-of-use">
                    <Text fontSize="13px" lineHeight="16px" opacity="0.6" fontWeight="500">
                      {t(keys.footer.termOfUse)}
                    </Text>
                  </Link>
                </VStack>
              </VStack>
            </GridItem>
            <GridItem colSpan={{ base: 3, md: 2 }} marginTop={{ base: 0, md: '60px' }}>
              <SimpleGrid columns={2} rowGap={1}>
                <GridItem colSpan={{ base: 2, md: 1 }}>
                  <VStack align={{ base: 'center', md: 'flex-start' }} />
                </GridItem>
                <GridItem colSpan={{ base: 2, md: 1 }} />
              </SimpleGrid>
            </GridItem>
          </SimpleGrid>
        </GridItem>
        <GridItem colSpan={{ base: 5, md: 1 }} marginTop={{ base: 0, md: '60px' }}>
          <NavBarSocialIcons />
        </GridItem>
      </SimpleGrid>
    </VStack>
  );
};

export default BigScreenFooter;
