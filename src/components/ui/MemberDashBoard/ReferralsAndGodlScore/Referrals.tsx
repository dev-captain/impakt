import * as React from 'react';

import { useTranslation } from 'react-i18next';
import keys from 'i18n/types';

import { VStack, Box, Text, OrderedList, ListItem } from '@chakra-ui/react';
import ReferralCopyClipboard from '../ReferralCopyClipBoard';
import RocketImg from '../../../../assets/images/rocket.png';
import useAppSelector from '../../../../hooks/useAppSelector';

const Referrals: React.FC = () => {
  const member = useAppSelector((state) => state.memberAuthReducer.member);
  const { t } = useTranslation().i18n;

  return (
    <VStack
      w="100%"
      alignItems="flex-start"
      padding={{ base: '30px', lg: '48px' }}
      minH="443px"
      maxH={{ base: 'auto', lg: 'auto' }}
      rowGap="28px !important"
      letterSpacing="-0.04em !important"
    >
      <Box mt="0 !important" id="whitelist-challange-headline-box">
        <Text textStyle="bold6">{t(keys.memberDashboard.referrals.headline)}</Text>
      </Box>
      <Box mt="0 !important" id="whitelist-challange-description-box-2">
        <Text textStyle="bold4">{t(keys.memberDashboard.referrals.subHeadline)}</Text>
        <Text
          textStyle="regular4"
          mt="5"
          dangerouslySetInnerHTML={{ __html: t(keys.memberDashboard.referrals.description) }}
        />
        <Text textStyle="regular4" mt="5">
          {t(keys.memberDashboard.referrals.subDescription)}
        </Text>
        <OrderedList mt="5">
          <ListItem textStyle="regular4">
            {t(keys.memberDashboard.referrals.discription_list1)}
          </ListItem>
          <ListItem textStyle="regular4">
            {t(keys.memberDashboard.referrals.discription_list2)}
          </ListItem>
          <ListItem textStyle="regular4">
            {t(keys.memberDashboard.referrals.discription_list3)}
          </ListItem>
          <ListItem textStyle="regular4">
            {t(keys.memberDashboard.referrals.discription_list4)}
          </ListItem>
        </OrderedList>
        <Text textStyle="regular4" mt="5">
          {t(keys.memberDashboard.referrals.descriptionFooter)}
          <Box ml={2} display="inline-block">
            <img src={RocketImg} width={25} alt="rocket" />
          </Box>
          <Box display="inline-block">
            <img src={RocketImg} width={25} alt="rocket" />
          </Box>
          <Box display="inline-block">
            <img src={RocketImg} width={25} alt="rocket" />
          </Box>
        </Text>
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        w="83%"
        alignItems="flex-end"
        mt="0 !important"
        id="whitelist-challange-description-box-3"
      >
        <ReferralCopyClipboard animate userId={member?.id} />
      </Box>
    </VStack>
  );
};
export default Referrals;
