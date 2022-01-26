import { Button, useDisclosure, ButtonProps } from '@chakra-ui/react';

interface DownloadTutorialButtonProps extends ButtonProps {
  disclosure: ReturnType<typeof useDisclosure>;
}

const DownloadTutorialButton = ({ disclosure, ...buttonProps }: DownloadTutorialButtonProps) => (
  <Button
    px="80px"
    py="32px"
    fontSize="16px"
    lineHeight="24px"
    fontWeight="600"
    borderRadius="20px"
    onClick={disclosure.onOpen}
    w={{ base: 'full', sm: 'fit-content', md: 'auto' }}
    boxShadow="0px 4px 4px rgba(0, 0, 0, 0.15), 0px 4px 14px rgba(0, 0, 0, 0.16)"
    bgGradient="linear-gradient(143.78deg, #DC143C 18.94%, #B22222 78.86%)"
    {...buttonProps}
  >
    Download Tutorial
  </Button>
);

export default DownloadTutorialButton;
