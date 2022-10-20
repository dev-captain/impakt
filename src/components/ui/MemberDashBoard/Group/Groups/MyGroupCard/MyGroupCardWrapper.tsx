import * as React from 'react';
import { useAppSelector } from 'hooks';
import { Box } from '@chakra-ui/react';
import { Common, I } from 'components';
import { useNavigate } from 'react-router-dom';
import Images from '../../../../../../assets/images';
import GroupsCard from '../GroupsCard';
import { getImageFromS3AsUrl } from '../../../../../../utils';

const MyGroupCardHeader: React.FC = () => {
  const myGroups = useAppSelector((state) => state.groupsReducer.myGroups);
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
              member={m.group.memberCount ?? 0}
              img={
                // m.group.currentCoverImageId
                //   ? getImageFromS3AsUrl(m.group.currentCoverImage!.source)
                // :
                Images.group.logo
              }
              name={m.group.groupName}
              // eslint-disable-next-line no-underscore-dangle
              isPrivateGroup={m.group._private}
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
