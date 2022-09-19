import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { Common, I } from 'components';

interface ChallengesCardProps {
  data?: Object;
}

const ChallengesCard: React.FC<ChallengesCardProps> = ({ data }) => {
  console.log('data :', data);
  const { title, challenge, time, play, like, timmer, name } = data as {
    title: string;
    challenge: string;
    time: string;
    play: string;
    like: string;
    timmer: Object;
    name: string;
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
          {title}
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
              {challenge}
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
              {time}
            </Text>
          </Box>
          {play && (
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
          )}
          {like && (
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
                {like}
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
          {timmer && (
            <>
              <Text
                background="#EEF4F6"
                borderRadius="4px"
                p={{ base: '4px 6px', md: '6px 10px 5px 9px' }}
              >
                08
              </Text>
              <Text m="0 6px">:</Text>
              <Text
                background="#EEF4F6"
                borderRadius="4px"
                p={{ base: '4px 6px', md: '6px 10px 5px 9px' }}
              >
                32
              </Text>
              <Text m="0 6px">:</Text>
              <Text
                background="#EEF4F6"
                borderRadius="4px"
                p={{ base: '4px 6px', md: '6px 10px 5px 9px' }}
                mr="16px"
              >
                44
              </Text>
            </>
          )}
          <Text color="#728BA3" fontWeight="500">
            {`by ${name}`}
          </Text>
        </Box>
        <Box
          display="flex"
          flexWrap="wrap"
          alignItems="center"
          gap="12px"
          mt={{ base: '10px', md: 0 }}
        >
          <Common.ImpaktButton
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
          </Common.ImpaktButton>
          <Common.ImpaktButton
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
