/* eslint-disable */
import { Button, color, HStack, Text, VStack } from '@chakra-ui/react';
import Icons from '../icons';
import './style.css';

const DownloadButton = ({
  link,
  title,
  iconName,
  isHorizontal,
}: {
  link: string;
  title: string;
  isHorizontal?: boolean;
  iconName: 'Apple' | 'Windows' | '';
}) => {
  const Wrapper = isHorizontal ? HStack : VStack;

  return (
    <Button
      as="a"
      w={{base:'full', lg:'231px'}}
      h="full"
      py={'20px'}
      alignSelf="center"
      borderRadius="20px"
      bg="linear-gradient(143.78deg, #DC143C 18.94%, #B22222 78.86%)"
      href={link}
      target="_blank"
      _focus={{}}
      className="buttonHover"
    >
      <Wrapper>
        {iconName === 'Apple' && <Icons.Apple opacity="1" />}
        {iconName === 'Windows' && <Icons.Window opacity="1" />}
        <Text fontSize="14px" lineHeight="24px" fontWeight="500" color="white">
          {title}
        </Text>
      </Wrapper>
    </Button>
  );
};

export default DownloadButton;
