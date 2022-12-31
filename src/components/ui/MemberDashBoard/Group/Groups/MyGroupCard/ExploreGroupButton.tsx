import { useDisclosure, Text, Link } from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { Common, I } from '@/components';
import CreateGroupModal from '../CreateGroupModal/CreateGroupModal';

const ExploreGroupButton = () => {
  const { onOpen, onClose, isOpen } = useDisclosure();

  return (
    <Link as={ReactRouterLink} to="/explore" style={{ textDecoration: 'none' }}>
      <Common.ImpaktButton
        w="166px"
        h="56px"
        maxH="56px"
        borderRadius="12px"
        variant="secondary"
        padding="12px 24px"
        leftIcon={<I.SearchIcon />}
        onClick={onOpen}
      >
        <Text textStyle="semiBold20">Explore</Text>
      </Common.ImpaktButton>
      <CreateGroupModal isOpen={isOpen} onClose={onClose} isStandalone={false} />
    </Link>
  );
};
export default ExploreGroupButton;
