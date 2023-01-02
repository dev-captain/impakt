import { Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import * as React from 'react';
import { I } from '../..';

interface GroupChatFormPropsI {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  handleMessageSend: () => void;
}

const GroupChatForm = React.forwardRef<HTMLInputElement, GroupChatFormPropsI>(
  ({ value, setValue, handleMessageSend }, chatInputRef) => {
    const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = React.useCallback(
      (event) => {
        setValue(event.target.value);
      },
      [],
    );

    return (
      <InputGroup w="full">
        <Input
          ref={chatInputRef}
          border="0"
          borderRadius="10px"
          placeholder="Message in group"
          background="#F4F7F9"
          fontSize="16px"
          height="50px"
          _focus={{ outline: '0' }}
          padding="1em"
          value={value}
          onChange={handleInputChange}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleMessageSend();
            }
          }}
        />
        <InputRightElement
          height="50px"
          // eslint-disable-next-line react/no-children-prop
          children={<I.SendIcon color="#5C7FFF" width="25px" height="25px" />}
          onClick={handleMessageSend}
        />
      </InputGroup>
    );
  },
);

export default React.memo(GroupChatForm);
