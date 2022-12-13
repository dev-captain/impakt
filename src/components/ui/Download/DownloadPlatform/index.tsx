import { memo } from 'react';
import {
  VStack,
  HStack,
  useColorModeValue,
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Image,
} from '@chakra-ui/react';
import Images from 'assets/images';
import { useTranslation } from 'react-i18next';
import keys from 'i18n/types';
import { I, C, Common } from 'components';
// import useModalStore from 'hooks/store/useModalStore';
import DownloadTitleItem from './DownloadTitleItem';
// import Gradient from './Gradient';

const DownloadPlatform = () => {
  const { t } = useTranslation(`default`).i18n;
  const text = useColorModeValue('glass.100', 'glass.700');
  const bgImage = useColorModeValue(
    Images.backgrounds.downloadAppBg,
    Images.backgrounds.downloadAppBg,
  );
  // const show = useModalStore((state) => state.setDownloadPage);
  // const [isLessThan768] = useMediaQuery('(max-width: 768px)');

  return (
    <C.HeroLayout
      showNavbar
      minH="70vh"
      spacing={10}
      pos="relative"
      bgImage={bgImage}
      align="center"
      justify="center"
    >
      <VStack color={text} w="full" pt={{ base: '20px', md: '0px' }}>
        <VStack maxW="1232px" w="full" px="16px">
          <HStack w="full" justify="center">
            <VStack
              align={{ base: 'center' }}
              spacing="22px"
              w={{ base: '100%', lg: 'auto' }}
              paddingX={{ base: '0', md: '40px' }}
              // flexDirection={{ base: 'column-reverse', sm: 'column-reverse', md: 'row' }}
            >
              <VStack align="inherit" marginBottom={{ base: '0', md: '15px' }}>
                <Box
                  bgClip="text"
                  color="white"
                  sx={{
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                  background="linear-gradient(0deg, rgba(212, 35, 89, 0.35) 14.58%, rgba(212, 35, 89, 0) 45.1%), #FFFFFF"
                >
                  <DownloadTitleItem title={t(keys.downloadPlateform.download)} />
                </Box>
                <Image src={Images.Common.Vsport} w={{ base: '120px', md: '300px', lg: '400px' }} />
              </VStack>
              <HStack
                flexWrap={{ base: 'wrap-reverse', lg: 'nowrap' }}
                background="rgba(28, 28, 40, 0.65)"
                display="flex"
                spacing={2}
                columnGap={3}
                rowGap={3}
                padding="16px"
                borderRadius="24px"
                order={{ base: '3', md: '2' }}
              >
                <Box
                  width="60px"
                  height="60px"
                  d={{ base: 'none', md: 'flex' }}
                  justifyContent="center"
                  alignItems="center"
                >
                  <I.DesktopIcon opacity="1" />
                </Box>

                <Common.DownloadButton
                  width={{ base: '100%', md: '315px' }}
                  bg="linear-gradient(143.78deg, #DC143C 18.94%, #B22222 78.86%)"
                  isHorizontal
                  iconName="Windows"
                  title="Download for Windows"
                  link="https://dyqq95qvqgziv.cloudfront.net/Impakt_Setup.exe"
                  pe="auto"
                />

                <Box
                  width={{ base: '100%', md: '282px' }}
                  marginTop={{ base: '12px !important', md: '0px !important' }}
                  marginStart="0px !important"
                >
                  <Common.DownloadButton
                    width={{ base: '100%', md: '282px' }}
                    bg="linear-gradient(143.78deg, #DC143C 18.94%, #B22222 78.86%)"
                    isHorizontal
                    iconName="Apple"
                    title="Download for Mac"
                    link="https://dyqq95qvqgziv.cloudfront.net/Impakt_Setup.pkg"
                    pe="auto"
                  />
                </Box>
                {/* <Box display="flex" w={{ base: 'full', md: 'auto' }} justifyContent="flex-end">
                  <Tooltip placement="auto" borderRadius="1em" label={<DownloadSpecBox />}>
                    <Box cursor="pointer" id="tooltip" position="relative">
                      <I.TooltipIcon width="24px" />
                    </Box>
                  </Tooltip>
                </Box> */}
              </HStack>
              <HStack
                flexWrap={{ base: 'wrap', lg: 'nowrap' }}
                background="rgba(28, 28, 40, 0.65)"
                display="flex"
                spacing={2}
                columnGap={3}
                padding="16px"
                borderRadius="24px"
                order={{ base: '2', md: '3' }}
              >
                <Box
                  width="60px"
                  height="60px"
                  d={{ base: 'none', md: 'flex' }}
                  justifyContent="center "
                  alignItems="center"
                >
                  <I.MobileIcon opacity="1" />
                </Box>
                <Box
                  width={{ base: '100%', md: '315px' }}
                  marginTop={{ base: '12px !important', md: '0px !important' }}
                  marginStart="0px !important"
                >
                  <Common.DownloadButton
                    width={{ base: '100%', md: '315px' }}
                    bg=""
                    isHorizontal
                    iconName=""
                    title="Launching soon for mobile"
                    link=""
                    pe="none"
                  />
                </Box>

                <Common.DownloadButton
                  width={{ base: '100%', md: '282px' }}
                  bg="linear-gradient(143.78deg, #DC143C 18.94%, #B22222 78.86%)"
                  isHorizontal
                  iconName=""
                  title="Join the waitlist"
                  link="https://play.google.com/store/apps/details?id=com.impakt.Minigames"
                  pe="auto"
                />
              </HStack>
            </VStack>
            {/* <VStack pos="relative" align="center" justify="center" onClick={show} cursor="pointer">
              <VStack pos="absolute" zIndex={2}>
                <I.Play />
              </VStack>
              <Image
                src={Images.downloadlaptop}
                maxH="636px"
                w="100%"
                pb={{
                  base: '32px',
                  lg: '0',
                }}
                zIndex={1}
              />
              <Gradient />
            </VStack> */}
          </HStack>
          <DownloadSpecBox />
        </VStack>
      </VStack>
    </C.HeroLayout>
  );
};

const DownloadSpecBox = () => {
  return (
    <VStack w="full" p="2em">
      <Box
        bgClip="text"
        color="white"
        sx={{
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
        background="linear-gradient(0deg, rgba(212, 35, 89, 0.35) 14.58%, rgba(212, 35, 89, 0) 45.1%), #FFFFFF"
      >
        <DownloadTitleItem title="Specs" />
      </Box>
      <Box
        w="full"
        display={{ base: 'block', md: 'flex' }}
        justifyContent="center"
        style={{ marginTop: '24px' }}
      >
        <TableContainer
          borderRadius={10}
          borderTopEndRadius={{ md: '0' }}
          borderBottomEndRadius={{ md: '0' }}
          w={{ base: 'full', md: 'auto' }}
          sx={{ marginTop: '0px !important' }}
        >
          <Table variant="striped" colorScheme="whiteAlpha" whiteSpace="pre-wrap">
            <Thead>
              <Tr bgColor="#0E0E11">
                <Th
                  textAlign="start"
                  color="#fff"
                  borderBottom={0}
                  textTransform="capitalize"
                  whiteSpace="normal"
                />
                <Th
                  textAlign="start"
                  color="#fff"
                  borderBottom={0}
                  textTransform="capitalize"
                  whiteSpace="normal"
                >
                  Recommended:
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td />
                <Td>Requires a 64-bit processor and operating system</Td>
              </Tr>
              <Tr>
                <Td>OS</Td>
                <Td>Windows 10 or later / macOS Catalina 10.15 or later</Td>
              </Tr>
              <Tr>
                <Td>CPU</Td>
                <Td>Intel Core i7 2.8GHz or equivalent</Td>
              </Tr>
              <Tr>
                <Td>RAM</Td>
                <Td>16 GB</Td>
              </Tr>
              <Tr>
                <Td>GPU</Td>
                <Td>NVidia GTX 960 or AMD equivalent</Td>
              </Tr>
              <Tr>
                <Td>Storage</Td>
                <Td>4 GB available space</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
        <TableContainer
          borderRadius={10}
          borderTopStartRadius={{ md: '0' }}
          borderBottomStartRadius={{ md: '0' }}
          w={{ base: 'full', md: 'auto' }}
          // sx={{ marginTop: '0px !important' }}
          marginTop={{ base: '24px', md: '0' }}
        >
          <Table variant="striped" colorScheme="whiteAlpha" whiteSpace="pre-wrap">
            <Thead>
              <Tr bgColor="#0E0E11">
                <Th display={{ md: 'none' }}> </Th>
                <Th
                  textAlign="start"
                  color="#fff"
                  borderBottom={0}
                  textTransform="capitalize"
                  whiteSpace="normal"
                >
                  Minimal:
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td display={{ md: 'none' }} />
                <Td>Requires a 64-bit processor and operating system</Td>
              </Tr>
              <Tr>
                <Td display={{ md: 'none' }}>OS</Td>
                <Td>Windows 10 or later / macOS Catalina 10.15 or later</Td>
              </Tr>
              <Tr>
                <Td display={{ md: 'none' }}>CPU</Td>
                <Td>Intel Core i5 2.5 GHz or equivalent</Td>
              </Tr>
              <Tr>
                <Td display={{ md: 'none' }}>RAM</Td>
                <Td>8 GB</Td>
              </Tr>
              <Tr>
                <Td display={{ md: 'none' }}>GPU</Td>
                <Td>Graphics: UHD Graphics 630</Td>
              </Tr>
              <Tr>
                <Td display={{ md: 'none' }}>Storage</Td>
                <Td>4 GB available space</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </VStack>
  );
};
export default memo(DownloadPlatform);
