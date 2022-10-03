import {
  Box,
  Text,
  Button,
  InputGroup,
  InputLeftElement,
  Input,
  InputRightElement,
} from '@chakra-ui/react';
import { I } from 'components';
import * as React from 'react';
import { DummyChatData } from 'data';
import MemberDashboardCard from '../../../../MemberDashBoardCard';
// import Images from 'assets/images';
import GroupChatCard from './GroupChatCard';

const GroupChat: React.FC = () => {
  return (
    <Box marginStart="0 !important" width={{ base: '100%', md: '100%', lgx: '100%' }}>
      <MemberDashboardCard p={{ base: '16px', md: '24px' }} marginLeft="auto" marginTop="26px">
        <Box w="full">
          <Box display="flex" justifyContent="space-between" alignItems="center" width="100%">
            <Box display="flex" alignItems="center" justifyContent="space-between" width="100%">
              <Text fontSize="28px" color="#29323B" fontWeight="700" marginRight="14px">
                Group Chat
              </Text>
              <Button
                background="transparent"
                _hover={{ backgroundColor: 'transparent' }}
                padding="0"
              >
                <I.FullScreenIcon color="#B0C3D6" width="20px" />
              </Button>
            </Box>
          </Box>
          <Box
            maxHeight="350px"
            overflowY="auto"
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
            {DummyChatData.map(({ name, msg, time }) => (
              <GroupChatCard key={name} name={name} msg={msg} time={time} />
            ))}
          </Box>
          <Box marginTop="16px">
            {/* <Common.InputItems inputItems={inputItems} /> */}
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                color="gray.300"
                fontSize="1.2em"
                // eslint-disable-next-line react/no-children-prop
                children={<I.EmojiIcon color="#B0C3D6" width="20px" height="20px" />}
                height="50px"
              />
              <Input
                border="0"
                borderRadius="10px"
                placeholder="Message in group"
                background="#F4F7F9"
                fontSize="16px"
                height="50px"
                _focus={{ outline: '0' }}
                padding="16px 35px"
              />
              <InputRightElement
                height="50px"
                // eslint-disable-next-line react/no-children-prop
                children={<I.SendIcon color="#5C7FFF" width="25px" height="25px" />}
              />
            </InputGroup>
          </Box>
        </Box>
      </MemberDashboardCard>
    </Box>
  );
};

export default GroupChat;
