import { AddIcon } from '@chakra-ui/icons';
import { useDisclosure, Text } from '@chakra-ui/react';
import { Common } from 'components';
import CreateGroupModal from '../CreateGroupModal/CreateGroupModal';

const CreateGroupButton = () => {
  const { onOpen, onClose, isOpen } = useDisclosure();

  return (
    <>
      <Common.ImpaktButton
        w="166px"
        h="56px"
        maxH="56px"
        borderRadius="12px"
        variant="orange"
        padding="12px 24px"
        leftIcon={<AddIcon />}
        onClick={onOpen}
      >
        <Text textStyle="semiBold20">Create</Text>
      </Common.ImpaktButton>
      <CreateGroupModal isOpen={isOpen} onClose={onClose} isStandalone={false} />
    </>
  );
};
export default CreateGroupButton;
