import { Container } from '@chakra-ui/react';

const SelectedNavbarLinkBorder = () => {
  return (
    <Container height="60px" w="140px" pos="absolute" bottom={0} centerContent>
      <Container
        height="120px"
        filter="blur(40px)"
        opacity="0.41"
        pos="absolute"
        top={10}
        zIndex={3}
        bgGradient="radial-gradient(50% 50% at 50% 50%, #FA1F31 58.11%, #FF7A00 100%)"
      />
      <Container
        bgGradient="linear-gradient(143.78deg, #DC143C 18.94%, #B22222 78.86%)"
        height="8px"
        position="absolute"
        bottom="-4px"
        w="140px"
        zIndex={2}
        borderRadius="10px"
      />
    </Container>
  );
};

export default SelectedNavbarLinkBorder;
