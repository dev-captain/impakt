import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  Text,
  Box,
  HStack,
  VStack,
} from '@chakra-ui/react';

import { WarningIcon } from '@chakra-ui/icons';
import { Common } from '@/components';

interface ConfirmNewEmailProps {
  open: boolean;
  close: () => void;
}
const ConfirmNewEmail: React.FC<ConfirmNewEmailProps> = ({ open, close }) => {
  return (
    <Modal isOpen={open} scrollBehavior="inside" onClose={() => close()} isCentered>
      <ModalOverlay />
      <ModalContent padding={{ base: '1.5em', md: '2em' }}>
        <ModalHeader textAlign="center" padding="0px">
          <HStack justifyContent="center">
            <Box>
              <svg
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="80" height="80" rx="16" fill="#FEECEE" />
                <path
                  d="M56.0005 32L40.0005 42L24.0005 32V28L40.0005 38L56.0005 28V32ZM56.0005 24H24.0005C21.7805 24 20.0005 25.78 20.0005 28V52C20.0005 53.0609 20.4219 54.0783 21.1721 54.8284C21.9222 55.5786 22.9396 56 24.0005 56H56.0005C57.0614 56 58.0788 55.5786 58.8289 54.8284C59.5791 54.0783 60.0005 53.0609 60.0005 52V28C60.0005 26.9391 59.5791 25.9217 58.8289 25.1716C58.0788 24.4214 57.0614 24 56.0005 24Z"
                  fill="url(#paint0_linear_9844_36211)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_9844_36211"
                    x1="20.0005"
                    y1="40"
                    x2="60.0005"
                    y2="40"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#F04153" />
                    <stop offset="1" stopColor="#F27961" />
                  </linearGradient>
                </defs>
              </svg>
            </Box>
          </HStack>
          <Box padding="24px">
            <Text>Confrim Email</Text>
          </Box>
        </ModalHeader>
        <ModalCloseButton />
        <VStack
          align="center"
          justify="center"
          w="full"
          display="flex"
          flexWrap="wrap"
          justifyContent="flex-end"
          rowGap="24px"
        >
          <Box w="100%">
            <Text>
              An email has been sent to <span color="rgba(204, 76, 51, 1)">member@email.com</span>{' '}
              with a verification link. Please find the email and click the link. Your email address
              change will take effect once verified. Until then, you need to use your old email
              address for signing in.
            </Text>
          </Box>
          <Box
            w="100%"
            backgroundColor="rgba(242, 121, 97, 0.1)"
            display="inline-flex"
            borderRadius="5px"
            marginLeft="0px !important"
            padding="10px"
          >
            <WarningIcon color="rgba(204, 76, 51, 1)" margin="auto 9px" />
            <Text fontSize="14px" color="rgba(204, 76, 51, 1)" fontWeight="400">
              Can&apos;t find the email? Check your spam folder, or re-send the email.
            </Text>
          </Box>
          <HStack
            align="center"
            justify="flex-end"
            w="full"
            display="flex"
            rowGap="16px"
            columnGap="8px"
            marginLeft="0px !important"
          >
            <Box w={{ base: '80%', md: '35%', lg: '36%' }}>
              <Common.ImpaktButton height="48px" bg="rgba(238, 244, 246, 1)">
                <Text color="rgba(41, 50, 59, 1)" fontWeight="bold">
                  Resend
                </Text>
              </Common.ImpaktButton>
            </Box>
            <Box
              w={{ base: '80%', md: '35%', lg: '25%' }}
              marginLeft={{ base: '0px !important', md: '8px !important' }}
            >
              <Common.ImpaktButton
                height="48px"
                bgGradient="linear(to-t, rgba(240, 65, 83, 1), rgba(242, 121, 97, 1))"
              >
                <Text color="white" fontWeight="bold">
                  Continue
                </Text>
              </Common.ImpaktButton>
            </Box>
          </HStack>
        </VStack>
      </ModalContent>
    </Modal>
  );
};

export default ConfirmNewEmail;
