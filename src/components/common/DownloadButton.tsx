/* eslint-disable */
import { Button, color, HStack, Text, VStack } from '@chakra-ui/react';
import { I } from 'components';
import './style.css';

const DownloadButton = ({
  link,
  title,
  iconName,
  isHorizontal,
  width,
  bg,
  pe,
}: {
  link: string;
  width: object;
  title: string;
  isHorizontal?: boolean;
  bg: string;
  pe: any;
  iconName: 'Apple' | 'Windows' | 'Android' | 'Ios' | '';
}) => {
  const Wrapper = isHorizontal ? HStack : VStack;

  return (
    <Button
      as="a"
      h="full"
      width={width}
      py={'16px'}
      alignSelf="center"
      borderRadius="16px"
      // bg="linear-gradient(143.78deg, #DC143C 18.94%, #B22222 78.86%)"
      bg={bg}
      href={link}
      target="  "
      _focus={{}}
      className="buttonHover"
      marginStart="0px !important"
      pointerEvents={pe}
    >
      <Wrapper>
        {iconName === 'Apple' && <I.Apple opacity="1" />}
        {iconName === 'Windows' && <I.Window opacity="1" />}
        {iconName === 'Android' && <I.AndroidIcon width="18" height="18" opacity="1" />}
        {iconName === 'Ios' && <I.IosIcon opacity="1" />}
        <Text fontSize="20px" lineHeight="32px" fontWeight="500" color="white">
          {title}
        </Text>
      </Wrapper>
    </Button>
  );
};

export default DownloadButton;
