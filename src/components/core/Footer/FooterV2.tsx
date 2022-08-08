/* eslint-disable jsx-a11y/media-has-caption */
import { memo } from 'react';
import { VStack, HStack, Box, Text, GridItem, SimpleGrid } from '@chakra-ui/react';
import { I, C, Common } from 'components';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Keys from 'i18n/types';
// import Email from 'components/icons/Email';
// import useNewsletter from 'hooks/useNewsletter';
import NavBarLink from '../Navbar/NavBarLink';
import NavBarSocialIcons from '../Navbar/NavBarSocialIcons';

const ImpaktFooter = ({ wFull = false }: { wFull?: boolean }) => {
  const navigate = useNavigate();
  const { t } = useTranslation(`default`).i18n;
  // const [email, setEmail] = useState('');
  // const { sendData, loading } = useNewsletter();
  // const handleEmailOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setEmail(e.target.value);
  // };

  return (
    <C.HeroLayout
      pos="relative"
      removeTopPadding
      bgColor="#09090B"
      align="center"
      minH="auto !important"
      justify="flex-start"
    >
      <VStack as="footer" width="100%">
        {/* <VStack w="100%">
          <HStack
            justifyContent="center"
            alignItems="flex-start"
            w={{ base: 'auto', lg: '1200px', xl: '1200px' }}
            paddingBottom={{ base: '48px', lg: '80px' }}
            paddingTop={{ base: '80px', lg: '160px' }}
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
          <VStack
            w={{ base: 'auto', lg: wFull ? 'full' : '1200px', xl: wFull ? 'full' : '1200px' }}
          >
            <HStack
              justifyContent="flex-start"
              alignItems="flex-start"
              w="full"
              paddingTop={{ base: '48px', md: '80px' }}
              paddingLeft={{ base: '0', lg: wFull ? '48px' : '0' }}
            >
              <SimpleGrid w="full">
                <GridItem
                  w={{ base: '100%', sm: '100%', md: '100%', lg: wFull ? 'full' : '1200px' }}
                  margin="auto"
                  alignItems="center"
                  justifyContent="center"
                  display="flex"
                >
                  <HStack
                    w="full"
                    padding={{ base: '0px 16px', md: '0px' }}
                    rowGap={{ base: '32px', md: '24px' }}
                    display="flex"
                    flexWrap={{ base: 'wrap', md: 'nowrap' }}
                    justify={{ base: 'space-between', lg: wFull ? 'flex-start' : 'space-between' }}
                  >
                    <HStack
                      w={{ base: 'full', lg: wFull ? 'min-content' : 'full' }}
                      display="flex"
                      justifyContent={{ base: 'space-between', md: 'start' }}
                    >
                      <Box onClick={() => navigate('/')} mr="32px">
                        <I.ImpaktIcon width="111px" height="32px" />
                      </Box>
                      <Box onClick={() => navigate('/download')}>
                        <Common.ImpaktButton>{t(Keys.footer.downloadApp)}</Common.ImpaktButton>
                      </Box>
                    </HStack>

                    <HStack
                      justifyContent={{ base: 'center', md: 'flex-end' }}
                      mb={{ base: '32px !important', md: '0px !important ' }}
                      spacing="8px"
                      pl={{ base: '0px', md: '64px', lg: wFull ? '50px' : '64px' }}
                      w={{ base: '100%', lg: wFull ? 'min-content' : '100%' }}
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
            <HStack w="full" padding={{ base: '0px 16px', md: '0px', lg: wFull ? '0 48px' : '0' }}>
              <NavBarLink IsHeader={false} />
            </HStack>

            <HStack
              display={{ base: 'block', md: 'flex' }}
              textAlign={{ base: 'center', md: 'start' }}
              w="full"
              marginTop={{ base: '32px !important', md: '0px' }}
              justifyContent={{ base: 'center', md: 'flex-start' }}
              flexDir="row"
              paddingLeft={{ base: '0', lg: wFull ? '48px' : '0' }}
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
    </C.HeroLayout>
  );
};

export default memo(ImpaktFooter);
