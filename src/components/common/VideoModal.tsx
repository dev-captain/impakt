/* eslint-disable jsx-a11y/media-has-caption */
import {
  Center,
  Modal,
  VStack,
  SimpleGrid,
  ModalContent,
  ModalOverlay,
  Circle,
  GridItem,
} from '@chakra-ui/react';
import { I, Common } from '@/components';
import useModalStore from '@/hooks/store/useModalStore';

function VideoModal() {
  const { modal, show, onClose } = useModalStore((state) => state);

  return (
    <VStack
      // h="1100vh"
      // w="1000vw"
      h="100%"
      w="full"
      zIndex={1000}
      position="absolute"
      backdropFilter="auto"
      backdropBlur="xl"
      display={show ? 'auto' : 'none'}
    >
      <Modal onClose={onClose} isOpen={show} isCentered size="2xl">
        <ModalOverlay bgColor="blackAlpha.300" />
        <ModalContent
          bgColor="gray.600"
          borderRadius="24px"
          position="relative"
          w="calc(100% - 80px)"
        >
          <VStack overflow="hidden" w="full" borderTopRadius="24px" position="relative">
            {modal.path && (
              <video width="100%" height="100%" controls autoPlay>
                <source src={modal.path || 'assets/images/video.mov'} type="video/mp4" />
              </video>
            )}
            {modal.isYoutubeVideo && (
              <VStack
                overflow="hidden"
                w="full"
                height="0"
                paddingBottom="56.25%"
                position="relative"
                borderRadius="24px"
              >
                <iframe
                  width="100%"
                  height="500px"
                  src={`${modal.youtubeUrl}?autoplay=1`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{
                    left: '0',
                    top: '0',
                    position: 'absolute',
                    height: '100%',
                    width: '100%',
                  }}
                />
              </VStack>
            )}
            {/* <iframe
              width="853"
              height="480"
              src="https://www.youtube.com/watch?v=XrgNOdkFIgk"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            /> */}
          </VStack>
          <Circle
            onClick={onClose}
            _hover={{ cursor: 'pointer' }}
            top={-10}
            right={{ base: '-5', md: '-10' }}
            size={12}
            zIndex={100}
            position="absolute"
            w={{ base: '20px', md: '50px' }}
          >
            <I.Cross />
          </Circle>
          {!modal.hideButtons && (
            <SimpleGrid
              d="flex"
              p="16px"
              columns={2}
              spacing={6}
              align="center"
              justify="center"
              bgColor="rgba(0,0,0,0.78)"
              borderBottomRadius="20px"
              w="full"
            >
              <GridItem colSpan={1} w="full">
                <Common.DownloadButton
                  bg="linear-gradient(143.78deg, #DC143C 18.94%, #B22222 78.86%)"
                  width={{ base: 'auto' }}
                  iconName="Windows"
                  title="Download Windows"
                  link="https://impakt-build-artifacts.s3.us-east-2.amazonaws.com/Windows/Impakt_Windows_Installer_v1.0.0.zip"
                  pe="auto"
                />
              </GridItem>
              <GridItem colSpan={1} w="full">
                <Common.DownloadButton
                  bg="linear-gradient(143.78deg, #DC143C 18.94%, #B22222 78.86%)"
                  width={{ base: 'auto' }}
                  iconName="Apple"
                  title="Download Mac"
                  link="https://impakt-build-artifacts.s3.us-east-2.amazonaws.com/Mac/Impakt_Mac_v1.0.0.zip"
                  pe="auto"
                />
              </GridItem>
            </SimpleGrid>
          )}
        </ModalContent>
      </Modal>
    </VStack>
  );
}

export const Play = ({ onClick }: { onClick?: () => void | any }) => (
  <Center
    w="80px"
    h="80px"
    zIndex={2}
    borderRadius="40px"
    opacity="0.8"
    onClick={onClick}
    bgColor="blackAlpha.800"
    boxShadow="4px 4px 10px rgba(0, 0, 0, 0.12)"
  >
    <I.WhitePlay />
  </Center>
);

export default VideoModal;
