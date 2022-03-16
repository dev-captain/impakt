/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import { VStack, Text, SimpleGrid, GridItem, HStack, Image, Box, Link } from '@chakra-ui/react';
import Images from 'assets/images';
import { Socials } from 'data';
import { useNavigate } from 'react-router-dom';
import { layoutPadding } from 'theme';
import { useTranslation } from 'react-i18next';
import keys from 'i18n/types';

const BigScreenFooter = ({
  bgColor,
  logo,
  textColor,
  twitter,
  youtube,
  discord,
}: {
  bgColor: string;
  logo: string;
  textColor: string;
  twitter: string;
  discord: string;
  youtube: string;
}) => {
  const { t } = useTranslation().i18n;
  const navigate = useNavigate();
  const _hover = {
    _hover: {
      transition: '0.2s ease',
      transform: 'scale(1.25)',
    },
  };

  return (
    <VStack
      h="100%"
      w="full"
      bgColor={bgColor}
      color={textColor}
      px={layoutPadding}
      py={{ base: 16, md: 0 }}
      d={{ base: 'none', md: 'flex' }}
    >
      <SimpleGrid columns={5} w="full">
        <GridItem colSpan={{ base: 5, md: 4 }}>
          <SimpleGrid columns={3} spacing="10px" h="216px" justifyContent="center" rowGap={4}>
            <GridItem colSpan={{ base: 3, md: 1 }} h="full" display={{ base: 'none', md: 'flex' }}>
              <VStack
                align={{ base: 'center', md: 'flex-start' }}
                spacing="16px"
                h="full"
                justify="center"
              >
                <Image src={logo || Images.Common.Logo} onClick={() => navigate('/')} />
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
                  <Link href="https://knowledgebase.impakt.com/terms-of-use?category=Terms-of-Use">
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
          <HStack justify={{ base: 'center', md: 'flex-end' }} spacing="32px" pl="64px">
            <Box as="a" target="_blank" href={Socials.twitter}>
              <Image
                maxW="30px"
                minW="30px"
                h="30px"
                opacity={0.6}
                objectFit="contain"
                src={twitter}
                {..._hover}
              />
            </Box>
            <Box as="a" target="_blank" href={Socials.discord}>
              <Image
                maxW="30px"
                minW="30px"
                h="30px"
                opacity={0.6}
                objectFit="contain"
                src={discord}
                {..._hover}
              />
            </Box>
            <Box as="a" target="_blank" href={Socials.youtube}>
              <Image
                maxW="30px"
                minW="30px"
                h="30px"
                opacity={0.6}
                objectFit="contain"
                src={youtube}
                {..._hover}
              />
            </Box>
          </HStack>
        </GridItem>
        <GridItem
          colSpan={{ base: 5, md: 1 }}
          h="full"
          display={{ base: 'flex', md: 'none' }}
          marginTop={4}
        >
          <VStack
            align={{ base: 'center', md: 'flex-start' }}
            spacing="16px"
            w="full"
            justify="center"
          >
            <Image src="assets/images/logo.png" />
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
            </VStack>
          </VStack>
        </GridItem>
      </SimpleGrid>
    </VStack>
  );
};

export default BigScreenFooter;
