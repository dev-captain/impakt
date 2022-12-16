import { Box, Text } from '@chakra-ui/react';
import { Common, I } from 'components';
// import { Common, I } from 'components';
import React from 'react';

interface ChallengesDetailsProps {
  time?: String;
  play?: String;
  like?: String;
  timmer?: any;
  name?: String;
}

const ChallengesCard: React.FC<ChallengesDetailsProps> = ({ time, play, like, timmer, name }) => {
  return (
    <Box borderRadius="24px">
      <Box>
        <Text w="100%" fontSize={{ base: '20px', md: '25px' }} color="#29323B" fontWeight="700">
          Daily challenge
        </Text>
      </Box>
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="space-between"
        alignItems="center"
        lineHeight={{ base: '35px', md: 0 }}
        mt={{ base: '14px', md: '15px' }}
      >
        <Box display="flex">
          <Text color="#29323B" fontSize={{ base: '18px', md: '24px' }} fontWeight="600">
            Exercises
          </Text>
          <Text
            color="#B0C3D6"
            fontSize={{ base: '18px', md: '24px' }}
            fontWeight="600"
            margin="0 16px"
          >
            12
          </Text>
        </Box>
        <Box display="flex" gap="6px" flexWrap="wrap">
          <Box
            display="flex"
            alignItems="center"
            background="#EEF4F6"
            borderRadius="12px"
            p={{ base: '0 10px', md: '7px 12px' }}
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
              p={{ base: '0 10px', md: '7px 12px' }}
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
              p={{ base: '0 10px', md: '7px 12px' }}
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
        mt="24px"
        height={{ base: '296px', md: '341px' }}
        overflow="auto"
        paddingRight="8px"
        css={{
          '&::-webkit-scrollbar': {
            width: '4px',
          },
          '&::-webkit-scrollbar-track': {
            width: '6px',
          },
          '&::-webkit-scrollbar-thumb': {
            visibility: 'initial',
            width: '10px',
            background: '#D3E2F0',
            borderRadius: '24px',
          },
        }}
      >
        <Box
          background="#F5F8FA"
          borderRadius="16px"
          display="flex"
          justifyContent="space-between"
          padding={{ base: '14px', md: '14px 16px' }}
          mb="8px"
        >
          <Box display="flex" alignItems="center">
            <Text color="#728BA3" fontSize={{ base: '14px', md: '18px' }}>
              0:30
            </Text>
            <Text
              color="#29323B"
              fontSize={{ base: '14px', md: '18px' }}
              marginLeft={{ base: '12px', md: '16px' }}
            >
              Jumping Jacks
            </Text>
          </Box>
          <I.AlarmIcon width="24px" height="24px" color="#53E0C2" />
        </Box>
        <Box
          background="#F5F8FA"
          borderRadius="16px"
          display="flex"
          justifyContent="space-between"
          padding={{ base: '14px', md: '14px 16px' }}
          mb="8px"
        >
          <Box display="flex" alignItems="center">
            <Text color="#728BA3" fontSize={{ base: '14px', md: '18px' }}>
              0:30
            </Text>
            <Text
              color="#29323B"
              fontSize={{ base: '14px', md: '18px' }}
              marginLeft={{ base: '12px', md: '16px' }}
            >
              Jumping Jacks
            </Text>
          </Box>
          <I.AlarmIcon width="24px" height="24px" color="#53E0C2" />
        </Box>
        <Box
          background="#F5F8FA"
          borderRadius="16px"
          display="flex"
          justifyContent="space-between"
          padding={{ base: '14px', md: '14px 16px' }}
          mb="8px"
        >
          <Box display="flex" alignItems="center">
            <Text color="#728BA3" fontSize={{ base: '14px', md: '18px' }}>
              0:30
            </Text>
            <Text
              color="#29323B"
              fontSize={{ base: '14px', md: '18px' }}
              marginLeft={{ base: '12px', md: '16px' }}
            >
              Jumping Jacks
            </Text>
          </Box>
          <I.AlarmIcon width="24px" height="24px" color="#53E0C2" />
        </Box>
        <Box
          background="#F5F8FA"
          borderRadius="16px"
          display="flex"
          justifyContent="space-between"
          padding={{ base: '14px', md: '14px 16px' }}
          mb="8px"
        >
          <Box display="flex" alignItems="center">
            <Text color="#728BA3" fontSize={{ base: '14px', md: '18px' }}>
              0:30
            </Text>
            <Text
              color="#29323B"
              fontSize={{ base: '14px', md: '18px' }}
              marginLeft={{ base: '12px', md: '16px' }}
            >
              Jumping Jacks
            </Text>
          </Box>
          <I.AlarmIcon width="24px" height="24px" color="#53E0C2" />
        </Box>
        <Box
          background="#F5F8FA"
          borderRadius="16px"
          display="flex"
          justifyContent="space-between"
          padding={{ base: '14px', md: '14px 16px' }}
          mb="8px"
        >
          <Box display="flex" alignItems="center">
            <Text color="#728BA3" fontSize={{ base: '14px', md: '18px' }}>
              0:30
            </Text>
            <Text
              color="#29323B"
              fontSize={{ base: '14px', md: '18px' }}
              marginLeft={{ base: '12px', md: '16px' }}
            >
              Jumping Jacks
            </Text>
          </Box>
          <I.AlarmIcon width="24px" height="24px" color="#53E0C2" />
        </Box>
        <Box
          background="#F5F8FA"
          borderRadius="16px"
          display="flex"
          justifyContent="space-between"
          padding={{ base: '14px', md: '14px 16px' }}
          mb="8px"
        >
          <Box display="flex" alignItems="center">
            <Text color="#728BA3" fontSize={{ base: '14px', md: '18px' }}>
              0:30
            </Text>
            <Text
              color="#29323B"
              fontSize={{ base: '14px', md: '18px' }}
              marginLeft={{ base: '12px', md: '16px' }}
            >
              Jumping Jacks
            </Text>
          </Box>
          <I.AlarmIcon width="24px" height="24px" color="#53E0C2" />
        </Box>
        <Box
          background="#F5F8FA"
          borderRadius="16px"
          display="flex"
          justifyContent="space-between"
          padding={{ base: '14px', md: '14px 16px' }}
          mb="8px"
        >
          <Box display="flex" alignItems="center">
            <Text color="#728BA3" fontSize={{ base: '14px', md: '18px' }}>
              0:30
            </Text>
            <Text
              color="#29323B"
              fontSize={{ base: '14px', md: '18px' }}
              marginLeft={{ base: '12px', md: '16px' }}
            >
              Jumping Jacks
            </Text>
          </Box>
          <I.AlarmIcon width="24px" height="24px" color="#53E0C2" />
        </Box>
        <Box
          background="#F5F8FA"
          borderRadius="16px"
          display="flex"
          justifyContent="space-between"
          padding={{ base: '14px', md: '14px 16px' }}
          mb="8px"
        >
          <Box display="flex" alignItems="center">
            <Text color="#728BA3" fontSize={{ base: '14px', md: '18px' }}>
              0:30
            </Text>
            <Text
              color="#29323B"
              fontSize={{ base: '14px', md: '18px' }}
              marginLeft={{ base: '12px', md: '16px' }}
            >
              Jumping Jacks
            </Text>
          </Box>
          <I.AlarmIcon width="24px" height="24px" color="#53E0C2" />
        </Box>
        <Box
          background="#F5F8FA"
          borderRadius="16px"
          display="flex"
          justifyContent="space-between"
          padding={{ base: '14px', md: '14px 16px' }}
          mb="8px"
        >
          <Box display="flex" alignItems="center">
            <Text color="#728BA3" fontSize={{ base: '14px', md: '18px' }}>
              0:30
            </Text>
            <Text
              color="#29323B"
              fontSize={{ base: '14px', md: '18px' }}
              marginLeft={{ base: '12px', md: '16px' }}
            >
              Jumping Jacks
            </Text>
          </Box>
          <I.AlarmIcon width="24px" height="24px" color="#53E0C2" />
        </Box>
        <Box
          background="#F5F8FA"
          borderRadius="16px"
          display="flex"
          justifyContent="space-between"
          padding={{ base: '14px', md: '14px 16px' }}
          mb="8px"
        >
          <Box display="flex" alignItems="center">
            <Text color="#728BA3" fontSize={{ base: '14px', md: '18px' }}>
              0:30
            </Text>
            <Text
              color="#29323B"
              fontSize={{ base: '14px', md: '18px' }}
              marginLeft={{ base: '12px', md: '16px' }}
            >
              Jumping Jacks
            </Text>
          </Box>
          <I.AlarmIcon width="24px" height="24px" color="#53E0C2" />
        </Box>
        <Box
          background="#F5F8FA"
          borderRadius="16px"
          display="flex"
          justifyContent="space-between"
          padding={{ base: '14px', md: '14px 16px' }}
          mb="8px"
        >
          <Box display="flex" alignItems="center">
            <Text color="#728BA3" fontSize={{ base: '14px', md: '18px' }}>
              0:30
            </Text>
            <Text
              color="#29323B"
              fontSize={{ base: '14px', md: '18px' }}
              marginLeft={{ base: '12px', md: '16px' }}
            >
              Jumping Jacks
            </Text>
          </Box>
          <I.AlarmIcon width="24px" height="24px" color="#53E0C2" />
        </Box>
        <Box
          background="#F5F8FA"
          borderRadius="16px"
          display="flex"
          justifyContent="space-between"
          padding={{ base: '14px', md: '14px 16px' }}
          mb="8px"
        >
          <Box display="flex" alignItems="center">
            <Text color="#728BA3" fontSize={{ base: '14px', md: '18px' }}>
              0:30
            </Text>
            <Text
              color="#29323B"
              fontSize={{ base: '14px', md: '18px' }}
              marginLeft={{ base: '12px', md: '16px' }}
            >
              Jumping Jacks
            </Text>
          </Box>
          <I.AlarmIcon width="24px" height="24px" color="#53E0C2" />
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
        <Box mt={{ base: '10px', md: 0 }}>
          <Common.ImpaktButton
            variant="black"
            w={{ base: '130px', md: '160px' }}
            h={{ base: '44px', md: '64px' }}
            borderRadius="16px"
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
