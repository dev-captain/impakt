import { Box, Flex, HStack, Tooltip } from '@chakra-ui/react';
import * as React from 'react';

import TooltopIcon from '../../assets/svgs/tooltipIcon.svg';

interface InfoCardPropsI {
  LeftLogo?: any;
  isShowTooltip?: boolean;
  tooltipLabel?: string;
  onToolTipClick?: () => void;
}
const InfoCard: React.FC<InfoCardPropsI> = ({
  LeftLogo,
  children,
  isShowTooltip,
  onToolTipClick,
  tooltipLabel,
}) => {
  return (
    <HStack
      paddingX="19px"
      paddingY="16px"
      borderRadius="16px"
      backdropFilter="blur(40px);"
      background="rgba(28, 28, 40, 0.65)"
      id="info-card"
      w="100%"
      justifyContent="space-between"
    >
      <HStack columnGap="0.5em" id="left">
        {LeftLogo && <Box>{LeftLogo}</Box>}
        <Box id="description">{children}</Box>
      </HStack>
      <Flex id="right">
        {isShowTooltip && (
          <Box onClick={onToolTipClick} cursor="pointer" id="tooltip">
            <Tooltip p="20px 20px" label={tooltipLabel} textStyle="semiBold16 " hasArrow mt="3" textAlign="center" borderRadius="10px" bg="#121216" placement="top" closeOnClick={false}>
              <Box>
                <img src={TooltopIcon} alt="TooltopIcon" sizes="32px" />
              </Box>
            </Tooltip>
          </Box>
        )}
      </Flex>
    </HStack>
  );
};

export default InfoCard;
