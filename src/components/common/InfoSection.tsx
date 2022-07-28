import { Box, HStack, VStack, Link, Text } from '@chakra-ui/react';
import MemberDashboardCard from 'components/ui/MemberDashBoard/MemberDashBoardCard';
import * as React from 'react';

interface InfoSectionPropsI {
  tooltipIcon?: any;
  tooltipText?: any;
  tooltipLink?: string;
}
const InfoSection: React.FC<InfoSectionPropsI> = ({ tooltipIcon, tooltipText, tooltipLink }) => {
  const tooltip = tooltipText !== 'undefined' ? tooltipText : '';

  return (
    <HStack
      columnGap="24px"
      rowGap="24px"
      justifyContent="flex-start"
      alignItems="flex-start"
      w="full"
      flexWrap={{ base: 'wrap', lg: 'nowrap' }}
      marginBottom="16px"
      mt={{ sm: '24px', lg: '0' }}
    >
      <VStack
        maxW={{ base: 'auto', lg: '708px' }}
        w={{ base: '100%', lg: '50%' }}
        justifyContent="flex-start"
        alignItems="flex-start"
        rowGap="24px"
      >
        <MemberDashboardCard
          flexDir="column"
          rowGap={{ base: '18px', lg: '32px' }}
          p={{ base: '12px' }}
          borderRadius="16px"
        >
          <Box
            display="flex"
            alignItems="center"
            letterSpacing="-0.04em !important"
            justifyContent="space-between"
            marginTop="0 !important"
            w="100%"
            id="whitelist-challange-description-box-2"
            position="relative"
            sx={{ svg: { minW: '20px', opacity: 0.5 } }}
          >
            <Link href={tooltipLink}>{tooltipIcon}</Link>
            <Text
              textStyle="semiBold5"
              margin="0px 10px"
              color="rgba(255, 255, 255, 0.75);"
              dangerouslySetInnerHTML={{
                __html: tooltip,
              }}
            />
          </Box>
        </MemberDashboardCard>
      </VStack>
    </HStack>
  );
};

export default InfoSection;
