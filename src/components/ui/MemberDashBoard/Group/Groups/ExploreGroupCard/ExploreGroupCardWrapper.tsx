/* eslint-disable no-plusplus */
/* eslint-disable no-nested-ternary */
import * as React from 'react';
import { Box, Button, HStack } from '@chakra-ui/react';

import GroupCardWrapperHeader from '../GroupCardWrapperHeader';
import ExplorePrivateSection from './ExplorePrivateSection';
import ExplorePublicSection from './ExplorePublicSection';

import { useAppSelector } from '../../../../../../hooks';

const ExploreGroupCardWrapper: React.FC = () => {
  const [status, setStatus] = React.useState<'public' | 'private'>('public');
  const exploreGroups = useAppSelector((state) => state.groupsReducer.exploreGroups);
  if (exploreGroups.length === 0) return null;

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
      {/*    {exploreGroups.map((d) => {
         return (
           <Box
             key={d.id}
             cursor={!d.private ? 'pointer' : ''}
             w={{
               base: '100%',
               sm: '49%',
               md: '31%',
               lgx: '23%',
             }}
             onClick={(e: React.MouseEvent) => {
               e.preventDefault();
               e.stopPropagation();
                eslint-disable-next-line no-unused-expressions
               if (!d.private) {
                 navigate(`/dashboard/groups/group/${d.id}`);
               }
             }}
           >
             <GroupsCard
               img={
                 d.CurrentCoverImage?.source
                   ? `https:impakt-image-data-dev.s3.amazonaws.com/images/8479333ebdd04821b69cff7ba9c70f35.png`
                   : Images.group.img
               }
               member={d.memberCount}
               name={d.groupName}
             >
               <Box w="full" display="flex" alignItems="flex-end" justifyContent="flex-end">
                 <Box maxW="99px" maxH="38px">
                   <Common.ImpaktButton
                     variant={d.private ? 'black' : 'transparent'}
                     _hover={{
                       backgroundColor: d.private ? '#fff' : '#000',
                       color: d.private ? '#000' : '#fff',
                     }}
                     onClick={(e) => {
                       e.stopPropagation();
                       if (d.private) {
                         return handleRequestToJoinGroup(d.id);
                       }

                       return joinedGroup(String(d.id));
                     }}
                     borderRadius="8px"
                     fontWeight="600"
                     border="1px solid #1C1C28"
                     justifyContent="space-around"
                     fontSize="16px"
                     leftIcon={d.private ? <Box display="none" /> : <I.UnionIcon width="12px" />}
                   >
                     {d.private ? (d.Request?.status ? d.Request.status : 'Join') : 'Join'}
                   </Common.ImpaktButton>
                 </Box>
               </Box>
             </GroupsCard>
           </Box>
         );
       })}
      */}
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
