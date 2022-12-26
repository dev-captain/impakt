import { Box, Flex, HStack, Tooltip, forwardRef, BoxProps } from '@chakra-ui/react';
import { I } from '@/components';

interface InfoCardPropsI {
  LeftLogo?: any;
  isShowTooltip?: boolean;
  tooltipLabel?: string;
  onToolTipClick?: () => void;
  wFull?: boolean;
}
const InfoCard = forwardRef<BoxProps & InfoCardPropsI, 'div'>((props, ref) => {
  return (
    <HStack
      ref={ref}
      paddingX={{ base: '12px', lg: '19px' }}
      paddingY={{ base: '12px', lg: '16px' }}
      borderRadius="16px"
      backdropFilter="blur(40px);"
      background="rgba(28, 28, 40, 0.65)"
      id="info-card"
      w="100%"
      maxW={props.wFull ? 'full' : '500px'}
      justifyContent="space-between"
      {...props}
    >
      <HStack columnGap="0.5em" id="left">
        {props.LeftLogo && <Box>{props.LeftLogo}</Box>}
        <Box id="description" ml="0 !important">
          {props.children}
        </Box>
      </HStack>
      <Flex id="right" ml="0px !important">
        {props.isShowTooltip && (
          <Box ml="10px" cursor="pointer" id="tooltip">
            <Tooltip
              p="20px 20px"
              label={props.tooltipLabel}
              onClick={props.onToolTipClick}
              textStyle="semiBold16"
              hasArrow
              mt="3"
              textAlign="center"
              borderRadius="10px"
              bg="#121216"
              placement="top"
              closeOnClick={false}
            >
              <Box color="rgba(255,255,255,0.1) !important">
                <I.TooltipIcon width={{ base: '24px', lg: '32px' }} height="auto" />
              </Box>
            </Tooltip>
          </Box>
        )}
      </Flex>
    </HStack>
  );
});

export default InfoCard;
