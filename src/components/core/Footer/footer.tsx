/* eslint-disable jsx-a11y/media-has-caption */
import React, { memo } from 'react';
import {
  VStack,
  HStack,
  Box,
  Text,
  GridItem,
  SimpleGrid,
  // InputGroup,
  // InputLeftElement,
  // Input,
  Button,
  Link,
} from '@chakra-ui/react';
import HeroLayout from 'components/layouts/HeroLayout';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Keys from 'i18n/types';
// import Email from 'components/icons/Email';
// import useNewsletter from 'hooks/useNewsletter';
import NavBarLink from '../Navbar/NavBarLink';
import NavBarSocialIcons from '../Navbar/NavBarSocialIcons';
import ImpaktIcon from '../../icons/ImpaktIcon';

const ImpaktFooter = () => {
  const navigate = useNavigate();
  const { t } = useTranslation(`default`).i18n;
  // const [email, setEmail] = useState('');
  // const { sendData, loading } = useNewsletter();
  // const handleEmailOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setEmail(e.target.value);
  // };

  return (
    <HeroLayout
      pos="relative"
      removeTopPadding
      bgColor="#09090B"
      align="center"
      minH="auto !important"
      justify="flex-start"
    >
      <VStack width="100%">
        {/* <VStack w="100%">
          <HStack
            justifyContent="center"
            alignItems="flex-start"
            w={{ base: 'auto', lg: '1200px', xl: '1200px' }}
            paddingBottom={{ base: '48px', lg: '80px' }}
            borderBottom="1px solid rgba(255, 255, 255, 0.1)"
          >
            <SimpleGrid>
              <GridItem
                w={{ base: '100%', sm: '100%', md: '720px', lg: '720px' }}
                margin="auto"
                alignItems="center"
                justifyContent="center"
                display="flex"
              >
                {/* <VStack
                  w="full"
                  padding={{ base: '0px 10px', md: '0px 40px', lg: '0px' }}
                  rowGap="24px"
                  display="block"
                >
                  <Box mt="0 !important" mb="8px">
                    <Text color="#FFF" letterSpacing="-0.5px" textStyle="normal5">
                      {t(Keys.footer.getImpakt)}
                    </Text>
                  </Box>
                  <Box mt="0 !important" mb="32px !important">
                    <Text color="rgba(255, 255, 255, 0.4)" textStyle="regular201">
                      {t(Keys.footer.unsubscribe)}
                    </Text>
                  </Box>
                  <HStack spacing={4} w="full" flexWrap={{ base: 'wrap', md: 'nowrap' }}>
                    <Box w="full">
                      <InputGroup border="none" background="#121216" borderRadius="12px">
                        <InputLeftElement
                          pointerEvents="none"
                          height="60px"
                          width="60px"
                          borderEnd="1px solid rgba(255, 255, 255, 0.1)"
                          marginRight="16px"
                        >
                          <Email />
                        </InputLeftElement>
                        <Input
                          border="none"
                          type="email"
                          height="60px"
                          pl="80px"
                          minWidth={{ base: '100%', md: '503px' }}
                          placeholder="your@mail.com"
                          color="rgba(255, 255, 255, 0.4)"
                          textStyle="regular201"
                          _placeholder={{ color: 'rgba(255, 255, 255, 0.4)' }}
                          borderRadius="12px"
                          onChange={handleEmailOnChange}
                        />
                      </InputGroup>
                    </Box>

                    <Box
                      w="full"
                      mt={{ base: '16px !important', md: '0px !important' }}
                      ms={{ base: '0px !important', md: '16px !important' }}
                    >
                      <Button
                        isDisabled={loading}
                        background="rgba(240, 65, 83, 0.12)"
                        _hover={{ background: 'rgba(240, 65, 83, 0.2)' }}
                        color="#F04153"
                        fontSize="20px"
                        lineHeight="32px"
                        fontWeight="500"
                        paddingX="32px"
                        height="60px"
                        borderRadius="12px"
                        minWidth={{ base: '100%', md: '201px' }}
                        onClick={() => {
                          sendData({ email });
                        }}
                      >
                        {t(Keys.footer.stayUpdated)}
                      </Button>
                    </Box>
                  </HStack>
                </VStack> */}
        {/* </GridItem> */}
        {/* </SimpleGrid> */}
        {/* </HStack> */}
        {/* </VStack>  */}
        <VStack w="100%">
          <VStack w={{ base: 'auto', lg: '1200px', xl: '1200px' }}>
            <HStack
              justifyContent="flex-start"
              alignItems="flex-start"
              w="full"
              paddingTop={{ base: '48px', md: '80px' }}
            >
              <SimpleGrid w="full">
                <GridItem
                  w={{ base: '100%', sm: '100%', md: '100%', lg: '1200px' }}
                  margin="auto"
                  alignItems="center"
                  justifyContent="center"
                  display="flex"
                >
                  <HStack
                    w="full"
                    padding={{ base: '0px 10px', md: '0px' }}
                    rowGap={{ base: '32px', md: '24px' }}
                    display="flex"
                    flexWrap={{ base: 'wrap', md: 'nowrap' }}
                    justify="space-between"
                  >
                    <HStack
                      w="full"
                      display="flex"
                      justifyContent={{ base: 'space-between', md: 'start' }}
                    >
                      <Box onClick={() => navigate('/')} zIndex={100} mr="32px">
                        <ImpaktIcon width="111px" height="32px" />
                      </Box>
                      <Link href="/download" _hover={{ textDecoration: 'none' }}>
                        <Button colorScheme="red">{t(Keys.footer.downloadApp)}</Button>
                      </Link>
                    </HStack>

                    <HStack
                      justifyContent={{ base: 'center', md: 'flex-end' }}
                      mb={{ base: '32px !important', md: '0px !important ' }}
                      spacing="8px"
                      pl={{ base: '0px', md: '64px' }}
                      w="100%"
                    >
                      <NavBarSocialIcons />
                      {/* {!showDarkOrLightModeButton && (
                        <Box
                          as="button"
                          onClick={() => setColorMode(colorMode === 'dark' ? 'light' : 'dark')}
                        >
                          <Image
                            w="26px"
                            h="26px"
                            objectFit="contain"
                            src={colorMode === 'dark' ? dark : light}
                            {...hover}
                          />
                        </Box>
                      )} */}
                    </HStack>
                  </HStack>
                </GridItem>
              </SimpleGrid>
            </HStack>
            <HStack w="full" padding={{ base: '0px 10px', md: '0px' }}>
              <NavBarLink IsHeader={false} />
            </HStack>

            <HStack
              display={{ base: 'block', md: 'flex' }}
              textAlign={{ base: 'center', md: 'start' }}
              w="full"
              marginTop={{ base: '32px !important', md: '0px' }}
              justifyContent={{ base: 'center', md: 'flex-start' }}
              flexDir="row"
            >
              <Text color="rgba(255, 255, 255, 0.4)" textStyle="regular3">
                {t(Keys.footer.madeBy)}
              </Text>
              <Text color="rgba(255, 255, 255, 0.4)" textStyle="regular3">
                {t(Keys.footer.allRightReserved)}
              </Text>
            </HStack>
          </VStack>
        </VStack>
      </VStack>
    </HeroLayout>
  );
};

export default memo(ImpaktFooter);
