/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import { VStack, Text, HStack, Box, Link } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import keys from '@/i18n/translations/en';
import { I } from '@/components';
import NavBarSocialIcons from '../../common/SocialIcons';

const SmallScreenFooter = ({ bgColor, textColor }: { bgColor: string; textColor: string }) => {
  const navigate = useNavigate();

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
          <Box cursor="pointer" onClick={() => navigate('/')} mr="32px">
            <I.ImpaktIcon width="111px" height="32px" />
          </Box>

          <NavBarSocialIcons />
        </HStack>
        <HStack align="flex-start" justify="flex-start" w="full" spacing="40px" />
        <VStack spacing="8px" align="flex-start" w="full">
          <HStack display="flex" fontSize="12px" lineHeight="24px" flexDir="row" fontWeight="500">
            <Text fontWeight="400" opacity="0.6">
              {keys.footer.madeBy}
            </Text>
            <Text marginLeft="4px">impakt.com</Text>
          </HStack>
          <Text fontSize="12px" lineHeight="16px" opacity="0.6">
            {keys.footer.allRightReserved}
          </Text>
          <Link href="/terms-of-use">
            <Text fontSize="13px" lineHeight="16px" opacity="0.6" fontWeight="500">
              {keys.footer.termOfUse}
            </Text>
          </Link>
        </VStack>
      </VStack>
    </VStack>
  );
};

export default SmallScreenFooter;
