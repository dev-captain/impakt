import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { Common, I } from 'components';
import { Day } from 'dayspan';
import { convertMsToHM } from '../../../../../../../../../utils';
import { usePersistedAuthStore } from '../../../../../../../../../lib/zustand';
import { AvailableGroupChallengesTypeI } from '../../../../../../../../../lib/zustand/stores/challengeStore';

interface ChallengesCardProps {
  data: AvailableGroupChallengesTypeI;
  setAssocId: () => void;
  setAssocName: () => void;
  onClose: () => void;
}

const ChallengesCard: React.FC<ChallengesCardProps> = ({
  data,
  setAssocName,
  setAssocId,
  onClose,
}) => {
  const { challenge, likes, attempts } = data;

  const { member } = usePersistedAuthStore();
  const isValidDate = challenge.validFrom
    ? Day.fromString(challenge.validFrom)!.time < Day.now().time
    : false;
  const getTimeDifference = () => {
    if (!isValidDate) return { h: 0, m: 0, s: 0 };

    const milliseconds =
      Day.fromString(challenge.validUntil ?? '')?.millisBetween(
        Day.fromString(challenge.validFrom)!,
      ) ?? 0;
    const { h, m, s } = convertMsToHM(milliseconds);

    return { h, m, s };
  };

  return (
    <Box
      padding={{ base: '12px', md: '24px' }}
      border="2px solid #EEF4F6"
      borderRadius="24px"
      marginBottom="16px"
    >
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="space-between"
        lineHeight={{ base: '35px', md: 0 }}
      >
        <Text color="#29323B" fontSize={{ base: '18px', md: '24px' }} fontWeight="600">
          {challenge.name}
        </Text>
        <Box display="flex" gap="6px" flexWrap="wrap">
          <Box
            display="flex"
            alignItems="center"
            background="#EEF4F6"
            borderRadius="12px"
            p={{ base: '0 10px', md: '5px 12px' }}
          >
            <I.HandIcon width="16px" height="16px" />
            <Text
              color="#29323B"
              fontWeight="500"
              ml="10px"
              fontSize={{ base: '13px', md: '16px' }}
            >
              {attempts.successAttempts} {/* {challenge} */}
            </Text>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            background="#EEF4F6"
            borderRadius="12px"
            p={{ base: '0 10px', md: '5px 12px' }}
          >
            <I.ClockIcon width="14px" height="14px" />
            <Text
              color="#29323B"
              fontWeight="500"
              ml="10px"
              fontSize={{ base: '13px', md: '16px' }}
            >
              {challenge.Routine.estimatedTime}
            </Text>
          </Box>
          {/* {play && (
            <Box
              display="flex"
              alignItems="center"
              background="#EEF4F6"
              borderRadius="12px"
              p={{ base: '0 10px', md: '5px 12px' }}
            >
              <I.PlayChallengeIcon color="#000" width="10px" height="10px" />
              <Text
                color="#29323B"
                fontWeight="500"
                ml="10px"
                fontSize={{ base: '13px', md: '16px' }}
              >
                {play}
              </Text>
            </Box>
          )} */}
          {likes && (
            <Box
              display="flex"
              alignItems="center"
              background="#EEF4F6"
              borderRadius="12px"
              p={{ base: '0 10px', md: '5px 12px' }}
            >
              <I.HeartIcon width="14px" height="14px" />
              <Text
                color="#29323B"
                fontWeight="500"
                ml="10px"
                fontSize={{ base: '13px', md: '16px' }}
              >
                {likes.count}
              </Text>
            </Box>
          )}
        </Box>
      </Box>
      <Box
        mt={{ base: '14px', md: '20px' }}
        display="flex"
        flexWrap="wrap"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box
          color="#29323B"
          fontWeight="600"
          fontSize={{ base: '13px', md: '18px' }}
          display="flex"
          flexWrap="wrap"
          alignItems="center"
        >
          <>
            <Text
              background="#EEF4F6"
              borderRadius="4px"
              p={{ base: '4px 6px', md: '6px 10px 5px 9px' }}
            >
              {getTimeDifference().h}
            </Text>
            <Text m="0 6px">:</Text>
            <Text
              background="#EEF4F6"
              borderRadius="4px"
              p={{ base: '4px 6px', md: '6px 10px 5px 9px' }}
            >
              {getTimeDifference().m}
            </Text>
            <Text m="0 6px">:</Text>
            <Text
              background="#EEF4F6"
              borderRadius="4px"
              p={{ base: '4px 6px', md: '6px 10px 5px 9px' }}
              mr="16px"
            >
              {getTimeDifference().s}
            </Text>
          </>
          <Text color="#728BA3" fontWeight="500">
            {`by ${member?.firstName ?? member?.username}`}
          </Text>
        </Box>
        <Box
          display="flex"
          flexWrap="wrap"
          alignItems="center"
          gap="12px"
          mt={{ base: '10px', md: 0 }}
        >
          {/* <Common.ImpaktButton
            variant="black"
            color="#29323B"
            h="38px"
            w="128px !important"
            backgroundColor="#EEF4F6"
            borderRadius="8px"
            type="submit"
            fontSize={{ base: '14px', md: '16px' }}
            fontWeight="700"
          >
            <Text>Preview</Text>
          </Common.ImpaktButton> */}
          <Common.ImpaktButton
            onClick={() => {
              setAssocId();
              setAssocName();
              onClose();
            }}
            variant="black"
            w="114px !important"
            colorScheme="#fff"
            h="38px"
            backgroundColor="#29323B"
            borderRadius="8px"
            type="submit"
            fontSize={{ base: '14px', md: '16px' }}
            fontWeight="700"
          >
            <Text>Select</Text>
          </Common.ImpaktButton>
        </Box>
      </Box>
    </Box>
  );
};

export default ChallengesCard;
