import * as React from 'react';
import { Grid, HStack } from '@chakra-ui/react';
import MyGroupCardWrapper from './MyGroupCardWrapper';

const MyGroupCard: React.FC = () => {
  return (
    <Grid
      mt="20px"
      gridTemplateColumns="repeat(auto-fill, minmax(282px, 1fr));"
      gridRowGap="24px"
      gridColumnGap="24px"
      justifyContent={{ base: 'center', md: 'space-between' }}
      // columnGap="24px !important"
      // rowGap="24px !important"
      w="full"
      // spacing="0"
      // flexWrap="wrap"
      // justifyContent={{ base: 'center', lg: 'flex-start' }}
    >
      <MyGroupCardWrapper />
    </Grid>
  );
};
export default MyGroupCard;
