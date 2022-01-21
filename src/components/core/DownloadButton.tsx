import { Button, HStack, Text } from '@chakra-ui/react';
import Icons from '../icons';

const DownloadButton = ({
  link,
  title,
  iconName,
}: {
  link: string;
  title: string;
  iconName: 'Apple' | 'Window';
}) => (
  <Button as="a" href={link} bg="linear-gradient(143.78deg, #DC143C 18.94%, #B22222 78.86%)">
    <HStack>
      {iconName === 'Apple' && <Icons.Apple opacity="1" />}
      {iconName === 'Window' && <Icons.Window opacity="1" />}
      <Text fontSize="16px" lineHeight="20px" fontWeight="500">
        {title}
      </Text>
    </HStack>
  </Button>
);

export default DownloadButton;
