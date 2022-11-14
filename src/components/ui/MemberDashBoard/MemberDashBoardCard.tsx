import { Box, BoxProps, forwardRef } from '@chakra-ui/react';

const MemberDashboardCard = forwardRef<BoxProps, 'div'>((props, ref) => {
  return (
    <Box
      id="member-dashboard-card"
      display="flex"
      bgColor="rgba(255, 255, 255, 1)"
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
