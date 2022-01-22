/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable */
import {
  Center,
  Modal,
  VStack,
  SimpleGrid,
  ModalContent,
  ModalOverlay,
  Circle,
  Text,
} from '@chakra-ui/react';
import Icons from 'components/icons';
import DownloadButton from 'components/core/DownloadButton';

type Props = {
  showPlayer?: boolean;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  path?: string;
  hideButtons?: boolean;
};

function VideoModal({
  isOpen,
  onOpen,
  onClose,
  path,
  showPlayer = true,
  hideButtons = false,
}: Props) {
  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay bgColor="blackAlpha.300" />
      <ModalContent bgColor="gray.600" borderRadius="24px" position="relative">
        <VStack overflow="hidden" w="full" borderTopRadius="24px">
          <video width="100%" height="100%" controls autoPlay>
            <source src={path || 'assets/images/video.mov'} type="video/mp4" />
          </video>
        </VStack>
        <Circle
          onClick={onClose}
          _hover={{ cursor: 'pointer' }}
          top={-10}
          right={-10}
          bg={'gray.700'}
          size={12}
          zIndex={100}
          position="absolute"
        >
          <Text fontSize={24}>X</Text>
        </Circle>
        {!hideButtons && (
          <SimpleGrid
            d="flex"
            p="16px"
            spacing={6}
            align="center"
            justify="center"
            bgColor="rgba(0,0,0,0.78)"
            borderBottomRadius="20px"
            flexDir={{
              base: 'column',
              md: 'column',
            }}
          >
            <DownloadButton
              iconName="Windows"
              title="Download Window"
              link="https://impakt-build-artifacts.s3.us-east-2.amazonaws.com/Windows/Impakt_Windows_Installer_v1.0.0.zip"
            />
            <DownloadButton
              iconName="Apple"
              title="Download Mac"
              link="https://impakt-build-artifacts.s3.us-east-2.amazonaws.com/Mac/Impakt_Mac_v1.0.0.zip"
            />
          </SimpleGrid>
        )}
      </ModalContent>
    </Modal>
  );
}

export const Play = ({ onClick }: { onClick: () => void | any }) => (
  <Center
    w="80px"
    h="80px"
    zIndex={2}
    borderRadius="40px"
    alignSelf="center"
    opacity="0.8"
    onClick={onClick}
    bgColor="blackAlpha.800"
    left={{
      base: 'auto',
      sm: 'auto',
      md: '40%',
      xl: '50%',
    }}
    boxShadow="4px 4px 10px rgba(0, 0, 0, 0.12)"
    position="absolute"
    d="flex"
  >
    <Icons.WhitePlay />
  </Center>
);

export default VideoModal;
