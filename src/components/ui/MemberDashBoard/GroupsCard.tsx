import * as React from 'react';
import { I } from 'components';
import { Box, Text, Image } from '@chakra-ui/react';

interface GroupsCardPropsI {
  member?: number;
  img: any;
  name: string;
}
const GroupsCard: React.FC<GroupsCardPropsI> = ({ member, img, name, children }) => {
  return (
    <Box
      display="flex"
      backgroundColor="#fff"
      borderRadius="24px"
      minH="300px"
      flexDirection="column"
      _hover={{ boxShadow: '0px 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
    >
      <Image
        alt="Group thumbnail"
        src={img}
        objectFit="cover"
        w="100%"
        minW="100%"
        zIndex="0"
        h="172px"
        borderRadius="24px 24px 0 0"
        padding={{ lgx: '16px 16px 0 16px', base: '12px 12px 0 12px' }}
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
          {member && (
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
          )}
        </Box>
        <Box display="flex" justifyContent="space-between" alignItems="center" marginTop="26px">
          {/* <Box display="flex" position="relative">
            <Image src={Images.group.ellipse} zIndex="10" />
            <Image src={Images.group.ellipse} zIndex="9" position="absolute" left="27px" />
            <Image src={Images.group.ellipse} zIndex="8" position="absolute" left="53px" />
            <Image src={Images.group.ellipse} position="absolute" left="79px" />
          </Box> */}
          {children}
        </Box>
      </Box>
    </Box>
  );
};
export default GroupsCard;
