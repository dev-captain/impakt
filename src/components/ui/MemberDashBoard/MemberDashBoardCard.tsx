import { Box, BoxProps, forwardRef } from '@chakra-ui/react';

const MemberDashboardCard = forwardRef<BoxProps, 'div'>((props, ref) => {
  return (
    <Box
      id="member-dashboard-card"
      display="flex"
      bgColor="rgba(255, 255, 255, 1)"
      boxShadow="0px 10px 10px -5px rgba(0, 6, 14, 0.08), 0px 20px 25px -5px rgba(0, 6, 14, 0.14);"
      p={{ base: '1.5em', lg: '2em' }}
      borderRadius="24px"
      alignItems="start"
      w="full"
      flexDir="column"
      ref={ref}
      {...props}
    />
  );
});

export default MemberDashboardCard;
