import { Box, HStack, VStack, Link, Text, Tooltip } from '@chakra-ui/react';
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
            {/* <Link href={tooltipLink}>{tooltipIcon}</Link> */}
            <Tooltip
              bg="#FFFFFF"
              borderRadius="16px"
              width="900px"
              boxShadow="0px 4px 6px -2px rgba(0, 0, 0, 0.12)"
              hasArrow
              label={
                <Text
                  color="#4E6070"
                  padding="5px"
                  dangerouslySetInnerHTML={{
                    __html: tooltipText,
                  }}
                />
              }
              mt="3"
              placement="top"
              closeOnClick={false}
            >
              <Link href={tooltipLink}>{tooltipIcon}</Link>
            </Tooltip>
            <Text
              textStyle="semiBold5"
              margin="0px 10px"
              color="#4E6070"
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
