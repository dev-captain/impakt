import React, { Suspense } from 'react';
import {
  Popover,
  PopoverTrigger,
  Portal,
  PopoverContent,
  CircularProgress,
} from '@chakra-ui/react';
import { Common, I } from '@/components';

interface EmojiPickerPopoverPropsI {
  setValue: (value: React.SetStateAction<string>) => void;
  inputRef: React.RefObject<HTMLInputElement>;
}

const EmojiPicker = React.lazy(() => import('emoji-picker-react'));

const EmojiPickerPopover: React.FC<EmojiPickerPopoverPropsI> = ({ setValue, inputRef }) => {
  return (
    <Popover autoFocus={false} closeOnBlur closeOnEsc offset={[-250, 0]} placement="right">
      {({ onClose }) => (
        <>
          <PopoverTrigger>
            <Common.ImpaktButton
              display="flex"
              p="0"
              w="min-content"
              leftIcon={<I.EmojiIcon color="#B0C3D6" width="20px" height="20px" />}
              variant="transparent"
            />
          </PopoverTrigger>
          <Portal>
            <PopoverContent
              _focus={{ boxShadow: 'none' }}
              boxShadow="none"
              bg="transparent"
              border="0"
            >
              <Suspense fallback={<CircularProgress />}>
                <EmojiPicker
                  skinTonesDisabled
                  onEmojiClick={(emoji) => {
                    setValue((prev) => prev + emoji.emoji);
                    inputRef.current?.focus();
                    onClose();
                  }}
                  autoFocusSearch
                />
              </Suspense>
            </PopoverContent>
          </Portal>
        </>
      )}
    </Popover>
  );
};

export default React.memo(EmojiPickerPopover);
