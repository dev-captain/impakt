import { Text } from '@chakra-ui/react';
import { FC } from 'react';

type Props = {
  title: string;
};
const TitleItem: FC<Props> = ({ title }) => {
  return (
    <Text
      textStyle="TitleBold72"
      fontSize={{ base: '64px', md: '90px' }}
      lineHeight={{ base: '64px', md: '90px' }}
      textAlign={{ base: 'center', md: 'left' }}
      paddingTop={{ base: '0px', sm: '0px', md: '0px' }}
    >
      {title}
    </Text>
  );
};
export default TitleItem;
