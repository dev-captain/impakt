import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  Text,
  VStack,
  IconButton,
} from '@chakra-ui/react';
import { I } from 'components';

import WaitlistForm from './WaitlistForm';
import SubmittedCard from './SubmittedCard';

export type WaitlistModalProps = {
  isOpen: boolean;
  isCloseButton?: boolean;
  onClose: () => void;
  headlineText?: string;
  subHeadlineText?: string;
  type: 'mobile' | 'invest';
};

const WaitlistModal: React.FC<WaitlistModalProps> = (props) => {
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  return (
    <Modal
      autoFocus={false}
      isCentered
      scrollBehavior="inside"
      isOpen={props.isOpen}
      onClose={props.onClose}
    >
      <ModalOverlay />
      <ModalContent
        w={{ base: '92%', md: '100%' }}
        maxW={{ base: '320px', md: '360px' }}
        borderRadius="3xl"
        boxShadow="0px 12px 30px -6px rgba(0, 6, 14, 0.12), 0px 24px 60px -12px rgba(0, 6, 14, 0.2);"
      >
        <ModalHeader>
          {props.isCloseButton && (
            <IconButton
              position="absolute"
              right="1em"
              top="1em"
              aria-label="whitelist-close-icon"
              bg="transparent"
              icon={<I.CloseIcon onClick={props.onClose} w="32px" h="32px" />}
              minW="min-content"
              h="fit-content"
              _focus={{ boxShadow: 'none' }}
            />
          )}
        </ModalHeader>
        <ModalBody p={{ base: '0 1em 1em 1em', md: '0 2em 2em 2em' }}>
          {!isSubmitted && (
            <VStack
              w="full"
              h="full"
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              rowGap="1em"
              wordBreak="break-word"
            >
              {props.headlineText && (
                <Text
                  fontSize={{ base: 'xl', md: '2xl' }}
                  fontWeight="medium"
                  color="#29323B"
                  isTruncated
                >
                  {props.headlineText}
                </Text>
              )}

              <VStack
                spacing="0"
                rowGap="1em"
                display="flex"
                flexDirection="column"
                alignItems="center"
                textAlign="center"
              >
                <I.VSportByImpaktIcon width="166px" height="64px" />
                {/* <Image src={Images.Common.VsportDark} w="168px" h="48px" /> */}
                {props.subHeadlineText && (
                  <Text
                    textStyle="regular201"
                    lineHeight={{ base: '26px', md: '28px' }}
                    color="fg-1"
                  >
                    {props.subHeadlineText}
                  </Text>
                )}
              </VStack>

              <WaitlistForm type={props.type} setIsSubmitted={setIsSubmitted} />
            </VStack>
          )}
          {isSubmitted && <SubmittedCard />}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default WaitlistModal;
