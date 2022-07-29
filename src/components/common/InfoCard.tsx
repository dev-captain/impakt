import { Box, Flex, HStack, Tooltip, Image } from '@chakra-ui/react';
import * as React from 'react';

import TooltopIcon from '../../assets/svgs/tooltipIcon.svg';

interface InfoCardPropsI {
  LeftLogo?: any;
  isShowTooltip?: boolean;
  tooltipLabel?: string;
  onToolTipClick?: () => void;
  wFull?: boolean;
}
const InfoCard: React.FC<InfoCardPropsI> = ({
  LeftLogo,
  children,
  isShowTooltip,
  onToolTipClick,
  tooltipLabel,
  wFull = false,
}) => {
  return (
    <HStack
      paddingX={{ base: '12px', lg: '19px' }}
      paddingY={{ base: '12px', lg: '16px' }}
      borderRadius="16px"
      backdropFilter="blur(40px);"
      background="rgba(28, 28, 40, 0.65)"
      id="info-card"
      w="100%"
      maxW={wFull ? 'full' : '500px'}
      justifyContent="space-between"
    >
      <HStack columnGap="0.5em" id="left">
        {LeftLogo && <Box>{LeftLogo}</Box>}
        <Box id="description" ml="0 !important">
          {children}
        </Box>
      </HStack>
      <Flex id="right" ml="0px !important">
        {isShowTooltip && (
          <Box ml="10px" cursor="pointer" id="tooltip">
            <Tooltip
              p="20px 20px"
              label={tooltipLabel}
              onClick={onToolTipClick}
              textStyle="semiBold16 "
              hasArrow
              mt="3"
              textAlign="center"
              borderRadius="10px"
              bg="#121216"
              placement="top"
              closeOnClick={false}
            >
              <Box>
                <Image src={TooltopIcon} alt="TooltopIcon" width={{ base: '24px', lg: '32px' }} />
              </Box>
            </Tooltip>
          </Box>
        )}
      </Flex>
    </HStack>
  );
};

export default InfoCard;
