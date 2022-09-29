import * as React from 'react';
import { Box, Button, HStack } from '@chakra-ui/react';

import GroupCardWrapperHeader from '../GroupCardWrapperHeader';
import ExplorePrivateSection from './ExplorePrivateSection';
import ExplorePublicSection from './ExplorePublicSection';

const ExploreGroupCardWrapper: React.FC = () => {
  const [status, setStatus] = React.useState<String>('public');

  return (
    <HStack
      columnGap={{ md: '24px' }}
      rowGap="24px"
      justifyContent="flex-start"
      alignItems="flex-start"
      w="full"
      margin="30px 0"
      flexWrap={{ sm: 'wrap' }}
      display={{ sm: 'flex' }}
    >
      {/* here is the components */}
      <Box
        w="full"
        as="section"
        id="explore-group-section"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box>
          <GroupCardWrapperHeader title="Explore Groups" />
        </Box>
        <Box margin="20px 0">
          <Button
            color={status === 'public' ? '#fff' : '#000'}
            bg={status === 'public' ? '#29323B' : '#fff'}
            _hover={{
              backgroundColor: status === 'private' ? '#fff' : '#29323B',
              color: status === 'private' ? '#000' : '#fff',
            }}
            _focus={{ boxShadow: 'none' }}
            w="120px"
            h="38px"
            borderRadius="8px 0 0 8px"
            onClick={() => {
              setStatus('public');
            }}
          >
            Public
          </Button>
          <Button
            bg={status === 'private' ? '#29323B' : '#fff'}
            color={status === 'private' ? '#fff' : '#000'}
            _hover={{
              backgroundColor: status === 'public' ? '#fff' : '#29323B',
              color: status === 'public' ? '#000' : '#fff',
            }}
            _focus={{ boxShadow: 'none' }}
            w="120px"
            h="38px"
            borderRadius="0 8px 8px 0"
            onClick={() => {
              setStatus('private');
            }}
          >
            Private
          </Button>
        </Box>
      </Box>
      {status === 'private' ? <ExplorePrivateSection /> : <ExplorePublicSection />}
    </HStack>
  );
};
export default ExploreGroupCardWrapper;
