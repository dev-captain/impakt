/* eslint-disable jsx-a11y/iframe-has-title */
import {
  Box,
  GridItem,
  HStack,
  Image,
  SimpleGrid,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import Images from 'assets/images';
import HeroLayout from 'components/layouts/HeroLayout';
import { layoutPadding } from 'theme';
import { useTranslation } from 'react-i18next';
import keys from 'i18n/types';
import { ContactProps } from './ContactProps';

const DiscordSupport = () => {
  const { t } = useTranslation().i18n;
  const mode = useColorModeValue('dark', 'light');
  const bgColor = useColorModeValue('glass.800', 'glass.300');
  const textColor = useColorModeValue('glass.100', 'glass.700');

  return (
    <HeroLayout showFooter minH="20vh">
      <SimpleGrid {...ContactProps.sGrid} px={layoutPadding}>
        <GridItem
          colSpan={{
            base: 2,
            md: 1,
          }}
          maxH="350px"
          justifyContent="center"
          display={{ base: 'flex', md: 'none' }}
        >
          <Image src={Images.contactUs.discordPeter} objectFit="contain" />
        </GridItem>
        <GridItem
          colSpan={{
            base: 2,
            md: 2,
          }}
          justifyContent="center"
          display="flex"
        >
          <HStack
            {...ContactProps.mHStack}
            color={textColor}
            pb={{ base: '20px', md: '80px' }}
            flexDir={{ base: 'column', xl: 'row' }}
          >
            <Text textStyle={{ base: 'regular5', md: 'light7' }}>{t(keys.contact.joinOur)}</Text>
            <Text textStyle={{ base: 'bold5', md: 'bold7' }}>{t(keys.contact.discordSupport)}</Text>
          </HStack>
        </GridItem>
        <GridItem
          colSpan={{
            base: 2,
            md: 1,
          }}
          justifyContent="center"
          display="flex"
        >
          <VStack
            w="full"
            py="52px"
            overflow="hidden"
            bgColor={bgColor}
            borderRadius="28px"
            position="relative"
            px={{ base: '32px', md: '64px', xl: '100px' }}
          >
            <iframe
              width="100%"
              height="500"
              frameBorder="0"
              style={{ zIndex: 100 }}
              src={`https://discord.com/widget?id=923586211807895582&theme=${mode}`}
              sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
            />
            <Box {...ContactProps.gradients.first} />
            <Box {...ContactProps.gradients.second} />
          </VStack>
        </GridItem>
        <GridItem
          colSpan={{
            base: 2,
            md: 1,
          }}
          justifyContent="center"
          display={{ base: 'none', md: 'flex' }}
        >
          <Image src={Images.contactUs.discordPeter} />
        </GridItem>
      </SimpleGrid>
    </HeroLayout>
  );
};

export default DiscordSupport;
