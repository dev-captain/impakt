import { Common, I } from 'components';
import { FC } from 'react';

interface SoundsButtonPropsI {
  onClick: () => void;
  isOn: boolean;
}

const SoundsButton: FC<SoundsButtonPropsI> = ({ onClick, isOn }) => {
  return (
    <Common.ImpaktButton
      bottom="0"
      position="absolute"
      left="50%"
      transform="translate(-50%, -50%)"
      variant="secondary"
      border="0"
      w="auto"
      display="flex"
      marginTop="25px"
      backgroundColor="transparent"
      _hover={{ backgroundColor: 'transparent' }}
      _focus={{ backgroundColor: 'transparent' }}
      _active={{ backgroundColor: 'transparent' }}
      onClick={onClick}
    >
      {isOn ? (
        <I.SoundOnIcon width={{ base: 'auto' }} />
      ) : (
        <I.SoundOffIcon width={{ base: 'auto' }} />
      )}
    </Common.ImpaktButton>
  );
};

export default SoundsButton;
