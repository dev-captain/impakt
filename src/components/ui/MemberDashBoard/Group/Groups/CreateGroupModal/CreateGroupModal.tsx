import { useDisclosure, Text, Box } from '@chakra-ui/react';
import * as React from 'react';
import { Forms } from 'components';
import { useNavigate } from 'react-router-dom';
import GroupsModal from '../../GroupsModal';

interface CreateGroupModalPropsI {
  isStandalone: boolean;
  isOpen?: boolean;
  onClose?: () => void;
}

const CreateGroupModal: React.FC<CreateGroupModalPropsI> = ({ isStandalone, onClose, isOpen }) => {
  const navigate = useNavigate();
  const props = isStandalone ? useDisclosure() : { isOpen, onClose, onOpen: () => null };

  const close = isStandalone
    ? () => {
        if (props.onClose) {
          props.onClose();
          navigate('/dashboard/groups');
        }
      }
    : props.onClose;

  React.useEffect(() => {
    if (isStandalone) {
      props.onOpen();
    }
  }, []);

  return (
    <GroupsModal
      modalTitle={{
        text: 'Create a Group',
        style: {
          color: 'rgba(41, 50, 59, 1)',
          fontSize: { lg: '48px', md: '48px', base: '30px' },
          paddingBottom: '0',
          fontWeight: '700',
          textAlign: 'center',
        },
      }}
      onClose={close!}
      isOpen={props.isOpen ?? false}
    >
      <Box id="description-box" px="2px">
        <Text
          color="#728BA3"
          textAlign="center"
          fontWeight="500"
          fontSize={{ md: '18px' }}
          marginBottom="24px"
        >
          Your group is where you’re doing fitness with others: friends, students, fans, colleagues,
          and just like-minded people.
        </Text>
      </Box>
      <Forms.CreateGroupForm onClose={close as any} />
    </GroupsModal>
  );
};
export default CreateGroupModal;
