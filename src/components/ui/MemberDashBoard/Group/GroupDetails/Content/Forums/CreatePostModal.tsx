import {
  Box,
  Text,
  Modal,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalBody,
} from '@chakra-ui/react';
import * as React from 'react';
import { Common, Forms, I } from 'components';

interface CreatePostModalPropsI {
  isOpen: boolean;
  onClose: () => void;
}

const CreatePostModal: React.FC<CreatePostModalPropsI> = ({ onClose, isOpen }) => {
  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalHeader>
        <Text>Header</Text>
      </ModalHeader>
      <ModalContent>
        <ModalBody>
          <Box id="description-box" px="2px">
            {/* <Text
          color="#728BA3"
          textAlign="center"
          fontWeight="500"
          fontSize={{ md: '18px' }}
          marginBottom="24px"
        >
          Your group is where you’re doing fitness with others: friends, students, fans, colleagues,
          and just like-minded people.
        </Text> */}
          </Box>
          <Forms.CreatePostForm>
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
              onClick={onClose}
              leftIcon={<I.BackIcon />}
            >
              Back
            </Common.ImpaktButton>
            <Common.ImpaktButton
              onClick={onClose}
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
          </Forms.CreatePostForm>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
export default CreatePostModal;
