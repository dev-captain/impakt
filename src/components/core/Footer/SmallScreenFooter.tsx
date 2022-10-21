/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import { VStack, Text, HStack, Image, Box, Link } from '@chakra-ui/react';
import { Socials } from 'data';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import keys from 'i18n/types';

const SmallScreenFooter = ({
  bgColor,
  logo,
  textColor,
  twitter,
  discord,
  youtube,
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
      w="full"
      h="100%"
      color={textColor}
      bgColor={bgColor}
      px={[4, 8, 12, 16, 40]}
      py={{ base: 16, md: 0 }}
      d={{ base: 'flex', md: 'none' }}
    >
      <VStack w="full">
        <HStack align="flex-start" justify="space-between" w="full">
          <Image onClick={() => navigate('/')} src={logo} />
          <HStack justify={{ base: 'center', md: 'flex-end' }} spacing="8px" pl="64px">
            <Box as="a" target="_blank" href={Socials.twitter}>
              <Image
                minW="32px"
                h="32px"
                maxW="30px"
                opacity={0.6}
                objectFit="contain"
                src={twitter}
                {..._hover}
              />
            </Box>
            <Box as="a" target="_blank" href={Socials.discord}>
              <Image
                minW="32px"
                h="30px"
                maxW="30px"
                opacity={0.6}
                objectFit="contain"
                src={discord}
                {..._hover}
              />
            </Box>
            <Box as="a" target="_blank" href={Socials.youtube}>
              <Image
                minW="32px"
                h="30px"
                maxW="30px"
                opacity={0.6}
                objectFit="contain"
                src={youtube}
                {..._hover}
              />
            </Box>
          </HStack>
        </HStack>
        <HStack align="flex-start" justify="flex-start" w="full" spacing="40px" />
        <VStack spacing="8px" align="flex-start" w="full">
          <HStack display="flex" fontSize="12px" lineHeight="24px" flexDir="row" fontWeight="500">
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
    </VStack>
  );
};

export default SmallScreenFooter;
