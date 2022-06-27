import * as React from 'react';

// import { useTranslation } from 'react-i18next';
// import keys from 'i18n/types';

import {
  VStack,
  Box,
  Text,
  // OrderedList,
  // ListItem,
  // Grid,
  Tooltip,
  // Tfoot,
  // TableCaption,
} from '@chakra-ui/react';
import TooltopIcon from '../../../../assets/svgs/tooltipIcon.svg';
import Twitter from '../../../../assets/images/twitter.png';
import Discord from '../../../../assets/images/discord.png';
import Walletad from '../../../../assets/images/walletad.png';
import Goldaword from '../../../../assets/images/goldaword.png';

const WhiteList: React.FC = () => {
  // const { t } = useTranslation().i18n;
  const [isTooltipClicked, setIsTooltipClicked] = React.useState(false);
  const TooltipHandler = () => {
    setIsTooltipClicked(!isTooltipClicked);
  };

  return (
    <VStack
      w="100%"
      alignItems="start"
      padding={{ base: '30px', lg: '40px' }}
      minH="auto"
      maxH={{ base: 'auto' }}
      rowGap={{ base: '18px', lg: '32px' }}
      letterSpacing="-0.04em !important"
      backgroundColor="rgba(28, 28, 40, 0.65);"
      backdropBlur="40px"
    >
      <Box
        display="flex"
        justifyContent="space-between"
        marginTop="0 !important"
        w="100%"
        id="whitelist-challange-description-box-2"
        position="relative"
      >
        <Text textStyle={{ base: 'bold4', lg: 'bold5' }} color="#FFFFFF">
          How to get whitelisted
        </Text>
        <Tooltip
          hasArrow
          label="You can see me"
          mt="3"
          placement="auto"
          closeOnClick={false}
          onClick={TooltipHandler}
        >
          <Box
            position="absolute"
            right={{ base: '-14px', md: '-16px' }}
            bottom={{ base: '22px', md: '20px' }}
            width={{ base: '24px', md: '32px' }}
          >
            <img src={TooltopIcon} alt="TooltopIcon" sizes="10px" />
          </Box>
        </Tooltip>
      </Box>
      <Box w="100%" id="whitelist-challange-description-box-2" sx={{ marginTop: '0px !important' }}>
        <Box
          display="flex"
          backdropBlur={40}
          bgColor="rgba(255, 255, 255, 0.1)"
          p="16px 24px"
          borderRadius="16px"
          alignItems="center"
          mt="0px"
        >
          <Box>
            <img src={Discord} alt="Discord" width="24px" />
          </Box>
          <Box marginLeft="16px">
            <Text textStyle="regular3" fontWeight={500}>
              {' '}
              Connect Discord
            </Text>
          </Box>
        </Box>
        <Box
          display="flex"
          backdropBlur={40}
          bgColor="rgba(255, 255, 255, 0.1)"
          p="16px 24px"
          borderRadius="16px"
          alignItems="center"
          mt="12px"
        >
          <Box>
            <img src={Twitter} alt="Discord" width="24px" />
          </Box>
          <Box marginLeft="16px">
            <Text textStyle="regular3" fontWeight={500}>
              {' '}
              Connect Twitter
            </Text>
          </Box>
        </Box>
        <Box
          display="flex"
          backdropBlur={40}
          bgColor="rgba(255, 255, 255, 0.1)"
          p="16px 24px"
          borderRadius="16px"
          alignItems="center"
          mt="12px"
        >
          <Box>
            <img src={Walletad} alt="Discord" width="19px" height="32px" />
          </Box>
          <Box marginLeft="16px">
            <Text textStyle="regular3" fontWeight={500}>
              {' '}
              Submit wallet address
            </Text>
          </Box>
        </Box>
        <Box
          display="flex"
          backdropBlur={40}
          bgColor="rgba(254, 196, 23, 0.15);"
          p="16px 24px"
          borderRadius="16px"
          alignItems="center"
          mt="12px"
        >
          <Box>
            <img src={Goldaword} alt="Discord" width="24px" />
          </Box>
          <Box marginLeft="16px" width={{ base: '100%', lg: '257px' }}>
            <Text textStyle="regular3" fontWeight={500} color="#FEC417">
              Win WL by participating in events or buy WL on GODL marketplace
            </Text>
          </Box>
        </Box>
      </Box>
    </VStack>
  );
};
export default WhiteList;
