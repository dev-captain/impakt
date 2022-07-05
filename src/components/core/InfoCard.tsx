import { Box, Flex, HStack, Tooltip } from '@chakra-ui/react';
import * as React from 'react';

import TooltopIcon from '../../assets/svgs/tooltipIcon.svg';

interface InfoCardPropsI {
  LeftLogo?: any;
  isShowTooltip?: boolean;
}
const InfoCard: React.FC<InfoCardPropsI> = ({ LeftLogo, children, isShowTooltip }) => {
  return (
    <HStack
      paddingX="24px"
      paddingY="27px"
      borderRadius="32px"
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
          <Box id="tooltip">
            <Tooltip label="hey" hasArrow mt="3" placement="auto" closeOnClick={false}>
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
