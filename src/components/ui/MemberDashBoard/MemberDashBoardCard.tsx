import { Box, BoxProps, forwardRef } from '@chakra-ui/react';

const MemberDashboardCard = forwardRef<BoxProps, 'div'>((props, ref) => {
  return (
    <Box
      id="member-dashboard-card"
      display="flex"
      bgColor="rgba(28, 28, 40, 0.65)"
      p={{ base: '1.5em', lg: '2em' }}
      borderRadius="2rem"
      alignItems="start"
      w="full"
      ref={ref}
      {...props}
    />
  );
});

export default MemberDashboardCard;
