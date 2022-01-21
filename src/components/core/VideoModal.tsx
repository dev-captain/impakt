/* eslint-disable jsx-a11y/media-has-caption */
import { Center, Modal, VStack, SimpleGrid, ModalContent, ModalOverlay } from '@chakra-ui/react';
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
    <>
      {showPlayer && <Play onClick={onOpen} />}
      <Modal onClose={onClose} isOpen={isOpen} isCentered size="4xl">
        <ModalOverlay bgColor="blackAlpha.900" />
        <ModalContent overflow="hidden" bgColor="gray.600">
          <VStack overflow="hidden" w="full">
            <video width="100%" height="100%" controls autoPlay>
              <source src={path || 'assets/images/video.mov'} type="video/mp4" />
            </video>
          </VStack>
          {!hideButtons && (
            <SimpleGrid
              d="flex"
              p="16px"
              spacing={6}
              align="center"
              justify="center"
              bgColor="rgba(0,0,0,0.78)"
              flexDir={{
                base: 'column',
                md: 'row',
              }}
            >
              <DownloadButton
                iconName="Window"
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
    </>
  );
}

const Play = ({ onClick }: { onClick: () => void }) => (
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
