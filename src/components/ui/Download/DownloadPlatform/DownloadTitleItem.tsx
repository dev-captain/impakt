import { Text } from '@chakra-ui/react';
import { FC } from 'react';

type Props = {
  title: string;
};
const DownloadTitleItem: FC<Props> = ({ title }) => {
  return (
    <Text
      fontSize={{ base: '32px', md: '72px' }}
      lineHeight={{ base: '36px', md: '72px' }}
      textStyle={{ base: 'black7', md: 'black8' }}
      textAlign={{ base: 'center', md: 'left' }}
      paddingTop={{ base: '0px', sm: '0px', md: '0px' }}
    >
      {title}
    </Text>
  );
};
export default DownloadTitleItem;
