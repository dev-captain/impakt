import { ButtonProps } from '@chakra-ui/react';
import { Common, I } from '@/components';
import { FC } from 'react';
import { ImpaktButtonProps } from '../../../common/ImpaktButton';

interface SoundsButtonPropsI {
  onClick: () => void;
  isOn: boolean;
}
type SoundsButtonType = ButtonProps & ImpaktButtonProps;
const SoundsButton: FC<SoundsButtonPropsI & SoundsButtonType> = ({ onClick, isOn, ...props }) => {
  return (
    <Common.ImpaktButton
      bottom="0"
      left="50%"
      transform="translate(-50%, -50%)"
      border="0"
      w="auto"
      display="flex"
      marginTop="25px"
      onClick={onClick}
      {...props}
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
