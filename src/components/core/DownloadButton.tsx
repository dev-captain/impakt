/* eslint-disable */
import {Button, HStack, Text, VStack} from '@chakra-ui/react';
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
  <Button as="a" href={link} bg="linear-gradient(143.78deg, #DC143C 18.94%, #B22222 78.86%)" height={100} width ={300} alignSelf="center" borderRadius="20px">
    <VStack>
      {iconName === 'Apple' && <Icons.Apple opacity="1" />}
      {iconName === 'Windows' && <Icons.Window opacity="1" />}
      <Text fontSize="16px" lineHeight="20px" fontWeight="500">
        {title}
      </Text>
    </VStack>
  </Button>
);

export default DownloadButton;
