import * as React from 'react';
import { Box } from '@chakra-ui/react';
import { Common, I } from 'components';
import { useNavigate } from 'react-router-dom';
import Images from '../../../../../../assets/images';
import GroupsCard from '../GroupsCard';
import { usePersistedGroupStore } from '../../../../../../lib/zustand';

const MyGroupCardHeader: React.FC = () => {
  const { myGroups } = usePersistedGroupStore();
  const navigate = useNavigate();

  return (
    <>
      {myGroups.map((m) => (
        <Box
          key={`group-${m.groupId}`}
          cursor="pointer"
          as="a"
          onClick={(e: any) => {
            e.preventDefault();
            navigate(`/dashboard/groups/group/${m.groupId}`);
          }}
          w={{
            base: '100%',
            sm: '100%',
            md: '31%',
            lgx: '23%',
          }}
        >
          <Box position="relative">
            <GroupsCard
              member={m.Group?.memberCount ?? 0}
              img={m.Group?.currentCoverImageId ? m.Group?.CurrentCoverImage : Images.group.logo}
              name={m.Group?.groupName}
              // eslint-disable-next-line no-underscore-dangle
              isPrivateGroup={m.Group?.private}
            >
              <Common.ImpaktButton
                variant="transparent"
                _hover={{ backgroundColor: '#000', color: '#fff' }}
                border="1px solid #1C1C28"
                borderRadius="8px"
                width={{ md: '112px', sm: '100px', base: '100px' }}
                justifyContent="space-around"
                fontSize={{ lgx: '16px', base: '14px' }}
                _focus={{ boxShadow: 'none' }}
                leftIcon={<I.CheckIcon />}
              >
                Joined
              </Common.ImpaktButton>
            </GroupsCard>
          </Box>
        </Box>
      ))}
    </>
  );
};
export default MyGroupCardHeader;
