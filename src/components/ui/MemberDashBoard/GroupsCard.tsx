import * as React from 'react';
import { I } from 'components';
import { Box, Text, Image, Button, useMediaQuery } from '@chakra-ui/react';
import Images from 'assets/images';

interface GroupsCardPropsI {
  member: number;
  img: any;
  name: string;
}
const GroupsCard: React.FC<GroupsCardPropsI> = ({ member, img, name }) => {
  const [isLessThan1650] = useMediaQuery('(max-width: 1650px)');

  return (
    <Box display={{ lg: 'block' }} backgroundColor="#fff" borderRadius="24px">
      <Image src={img} objectFit="cover" minW="100%" zIndex="0" borderRadius="24px 24px 0 0" />
      <Box padding={isLessThan1650 ? '12px' : '24px'}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Text
            as="h1"
            textStyle="TitleBold64"
            fontSize={isLessThan1650 ? '16px' : '20px'}
            color="#1C1C28"
          >
            {name}
          </Text>
          <Box display="flex" alignItems="center">
            <I.PeopleIcon width={isLessThan1650 ? '26px' : '32px'} />
            <Text
              as="h1"
              textStyle="TitleBold64"
              fontSize={isLessThan1650 ? '16px' : '20px'}
              color="#1C1C28"
              marginLeft="6px"
            >
              {member}
            </Text>
          </Box>
        </Box>
        <Box display="flex" justifyContent="space-between" alignItems="center" marginTop="26px">
          <Box display="flex" position="relative">
            <Image src={Images.group.ellipse} zIndex="10" />
            <Image src={Images.group.ellipse} zIndex="9" position="absolute" left="27px" />
            <Image src={Images.group.ellipse} zIndex="8" position="absolute" left="53px" />
            <Image src={Images.group.ellipse} position="absolute" left="79px" />
          </Box>
          <Button
            border="1px solid #1C1C28"
            borderRadius="8px"
            color="#1C1C28"
            width={isLessThan1650 ? '100px' : '120px'}
            justifyContent="space-around"
            fontSize={isLessThan1650 ? '14px' : '16px'}
            backgroundColor="transparent"
            _hover={{ backgroundColor: 'transparent' }}
            _active={{ backgroundColor: 'transparent' }}
            _focus={{ boxShadow: 'none' }}
          >
            <I.CheckIcon />
            Joined
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
export default GroupsCard;
