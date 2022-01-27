import { VStack, Text, HStack, Image, Box } from '@chakra-ui/react';
import Images from 'assets/images';
import { Socials } from 'data';
import { useNavigate } from 'react-router-dom';

const SmallScreenFooter = () => {
  const navigate = useNavigate();

  return (
    <VStack
      w="full"
      h="100%"
      bgColor="#1F2024"
      px={[4, 8, 12, 16, 40]}
      py={{ base: 16, md: 0 }}
      d={{ base: 'flex', md: 'none' }}
    >
      <VStack w="full">
        <HStack align="flex-start" justify="space-between" w="full">
          <Image onClick={() => navigate('/')} src={Images.Common.Logo} />
          <HStack justify={{ base: 'center', md: 'flex-end' }} spacing="32px" pl="64px">
            <Box as="a" target="_blank" href={Socials.twitter}>
              <Image
                w="32px"
                h="32px"
                opacity={0.6}
                objectFit="contain"
                src={Images.Common.Twitter}
              />
            </Box>
            <Box as="a" target="_blank" href={Socials.discord}>
              <Image
                w="30px"
                h="30px"
                opacity={0.6}
                objectFit="contain"
                src={Images.Common.Discord}
              />
            </Box>
          </HStack>
        </HStack>
        <HStack align="flex-start" justify="flex-start" w="full" spacing="40px" />
        <VStack spacing="8px" align="flex-start" w="full">
          <HStack display="flex" fontSize="12px" lineHeight="24px" flexDir="row" fontWeight="500">
            <Text fontWeight="400" opacity="0.6">
              Made by
            </Text>
            <Text marginLeft="4px">impakt.com</Text>
          </HStack>
          <Text fontSize="12px" lineHeight="16px" opacity="0.6">
            © 2021 Impakt. All rights reserved.
          </Text>
        </VStack>
      </VStack>
    </VStack>
  );
};

export default SmallScreenFooter;
