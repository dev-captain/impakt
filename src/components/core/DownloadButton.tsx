/* eslint-disable */
import { Button, HStack, Text, VStack } from '@chakra-ui/react';
import Icons from '../icons';

const DownloadButton = ({
  link,
  title,
  iconName,
}: {
  link: string;
  title: string;
  iconName: 'Apple' | 'Windows';
}) => (
  <Button
    as="a"
    w="full"
    h="full"
    py={'32px'}
    href={link}
    alignSelf="center"
    borderRadius="20px"
    bg="linear-gradient(143.78deg, #DC143C 18.94%, #B22222 78.86%)"
  >
    <VStack>
      {iconName === 'Apple' && <Icons.Apple opacity="1" color="white" />}
      {iconName === 'Windows' && <Icons.Window opacity="1" color="white" />}
      <Text fontSize="16px" lineHeight="20px" fontWeight="500" color="white">
        {title}
      </Text>
    </VStack>
  </Button>
);

export default DownloadButton;
