import { forwardRef, StackProps, VStack } from '@chakra-ui/react';

const MemberDashboardCard = forwardRef<StackProps, 'div'>((props, ref) => {
  return (
    <VStack
      id="member-dashboard-card"
      display="flex"
      bgColor="rgba(255, 255, 255, 1)"
      boxShadow="light"
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
