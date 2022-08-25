import * as React from 'react';
import { I } from 'components';
import { Box, Text, Image, Button } from '@chakra-ui/react';
import Images from 'assets/images';

interface GroupsCardPropsI {
  member: string;
  img: any;
  name: string;
}
const GroupsCard: React.FC<GroupsCardPropsI> = ({ member, img, name }) => {
  return (
    <Box
      display="flex"
      backgroundColor="#fff"
      borderRadius="24px"
      minH="300px"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Image
        src={img}
        objectFit="cover"
        w="100%"
        minW="100%"
        zIndex="0"
        borderRadius="24px 24px 0 0"
      />
      <Box padding={{ lgx: '16px', base: '12px' }}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Text
            as="h1"
            textStyle="TitleBold64"
            fontSize={{ lgx: '20px', base: '16px' }}
            color="#1C1C28"
          >
            {name}
          </Text>
          <Box display="flex" alignItems="center">
            <I.PeopleIcon width={{ lgx: '32px', base: '26px' }} />
            <Text
              as="h1"
              textStyle="TitleBold64"
              fontSize={{ lgx: '20px', base: '16px' }}
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
            width={{ lgx: '112px', base: '100px' }}
            justifyContent="space-around"
            fontSize={{ lgx: '16px', base: '14px' }}
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
