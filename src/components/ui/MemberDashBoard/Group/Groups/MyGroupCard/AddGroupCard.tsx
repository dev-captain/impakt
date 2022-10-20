import { Box, useDisclosure } from '@chakra-ui/react';
import { I, Common } from 'components';
import MemberDashboardCard from '../../../MemberDashBoardCard';
import CreateGroupModal from '../CreateGroupModal/CreateGroupModal';

const AddGroupCard = () => {
  const { onOpen, onClose, isOpen } = useDisclosure();

  return (
    <>
      <Box
        marginStart="0 !important"
        w={{
          base: '100%',
          sm: '100%',
          md: '31%',
          lgx: '23%',
        }}
      >
        <MemberDashboardCard
          display="flex"
          backgroundColor="#fff"
          borderRadius="24px"
          padding={{ base: '100px 0', md: '0' }}
          height="100%"
          minHeight="300px"
          alignItems="center"
          justifyContent="center"
        >
          <Common.ImpaktButton
            variant="black"
            width={{ lgx: '238px', base: '200px', sm: '200px' }}
            height={{ lgx: '64px', base: '58px' }}
            fontWeight="700"
            borderRadius="16px"
            _focus={{ boxShadow: 'none' }}
            justifyContent="space-evenly"
            fontSize={{ lgx: '20px', base: '16px' }}
            onClick={onOpen}
            leftIcon={<I.UnionIcon />}
          >
            Create Group
          </Common.ImpaktButton>
        </MemberDashboardCard>
      </Box>
      <CreateGroupModal isOpen={isOpen} onClose={onClose} isStandalone={false} />
    </>
  );
};
export default AddGroupCard;
