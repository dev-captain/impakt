import { useDisclosure, Text, Box } from '@chakra-ui/react';
import * as React from 'react';
import { Common, Forms, I } from 'components';
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
      <Forms.CreateGroupForm>
        <Common.ImpaktButton
          variant="transparent"
          _hover={{ backgroundColor: '#000', color: '#fff' }}
          _active={{ backgroundColor: 'transparent' }}
          _focus={{ boxShadow: 'none' }}
          border="2px solid #29323B"
          borderRadius="16px"
          color="#29323B"
          w={{ md: '152px', base: '120px' }}
          h={{ md: '64px', base: '54px' }}
          fontSize={{ md: '18px' }}
          fontWeight="700"
          mr={3}
          justifyContent="space-evenly"
          onClick={close}
          leftIcon={<I.BackIcon />}
        >
          Back
        </Common.ImpaktButton>
        <Common.ImpaktButton
          onClick={close}
          variant="black"
          colorScheme="#fff"
          w={{ md: '135px', base: '130px' }}
          h={{ md: '64px', base: '54px' }}
          backgroundColor="#29323B"
          borderRadius="16px"
          type="submit"
          fontSize={{ md: '18px' }}
          fontWeight="700"
        >
          Create
        </Common.ImpaktButton>
      </Forms.CreateGroupForm>
    </GroupsModal>
  );
};
export default CreateGroupModal;
