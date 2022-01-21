/* eslint-disable jsx-a11y/media-has-caption */
import { Center, Modal, VStack, SimpleGrid, ModalContent, ModalOverlay } from '@chakra-ui/react';
import Icons from 'components/icons';
import DownloadButton from 'components/core/DownloadButton';

type Props = {
  showPlayer?: boolean;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

function VideoModal({ showPlayer = true, isOpen, onOpen, onClose }: Props) {
  return (
    <>
      {showPlayer && <Play onClick={onOpen} />}
      <Modal onClose={onClose} isOpen={isOpen} isCentered size="4xl">
        <ModalOverlay bgColor="blackAlpha.900" />
        <ModalContent overflow="hidden" bgColor="gray.600">
          <VStack overflow="hidden" w="full">
            <video width="100%" height="100%" controls autoPlay>
              <source src="assets/images/video.mov" type="video/mp4" />
            </video>
          </VStack>
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
              title="Download for Window"
              link="https://www.notion.so/desktop/mac/download"
            />
            <DownloadButton
              iconName="Apple"
              title="Download for Mac"
              link="https://www.notion.so/desktop/mac/download"
            />
          </SimpleGrid>
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
