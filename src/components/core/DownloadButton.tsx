/* eslint-disable */
import { Button, color, HStack, Text, VStack } from '@chakra-ui/react';
import Icons from '../icons';

const DownloadButton = ({
  link,
  title,
  iconName,
  isHorizontal,
}: {
  link: string;
  title: string;
  isHorizontal?: boolean;
  iconName: 'Apple' | 'Windows';
}) => {
  const Wrapper = isHorizontal ? HStack : VStack;

  return (
    <Button
      as="a"
      w="full"
      h="full"
      py={'20px'}
      alignSelf="center"
      borderRadius="20px"
      bg="linear-gradient(143.78deg, #DC143C 18.94%, #B22222 78.86%)"
      href={link}
    >
      <Wrapper>
        {iconName === 'Apple' && <Icons.Apple opacity="1" color="white" />}
        {iconName === 'Windows' && <Icons.Window opacity="1" color="white" />}
        <Text fontSize="16px" lineHeight="20px" fontWeight="500" color="white" _hover={{color:"#0B1725"}}>
          {title}
        </Text>
      </Wrapper>
    </Button>
  );
};

export default DownloadButton;
