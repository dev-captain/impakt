import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Text,
  Input,
  useMediaQuery,
  useToast,
  CircularProgress,
} from '@chakra-ui/react';
import { useNavigate, useParams } from 'react-router-dom';
import * as React from 'react';
import { useAppDispatch } from 'hooks';
import { joinGroup } from '../../../../../lib/redux/slices/groups/actions/joinGroup';

const JoinGroup: React.FC = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { id } = useParams();

  React.useEffect(() => {
    handleJoinGroup();
  }, []);

  const handleJoinGroup = async () => {
    try {
      if (id) {
        await dispatch(joinGroup(id)).unwrap();
        toast({
          title: 'Success',
          description: `Joined Group successfully`,
          isClosable: true,
          duration: 8000,
          status: 'success',
        });
      }
    } catch (e: any) {
      toast({
        title: 'Error',
        description: `${e.response.data.message}`,
        isClosable: true,
        duration: 8000,
        status: 'error',
      });
    }

    navigate('/dashboard/groups');
  };

  return <CircularProgress isIndeterminate />;
};
export default JoinGroup;
