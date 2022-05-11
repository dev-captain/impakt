import { Center } from '@chakra-ui/react';
import Icons from 'components/icons';

const CheckBox = ({
  checked,
  onToggle,
  size = '12px',
  radius = '4px',
}: {
  checked: boolean;
  onToggle: () => void;
  size?: number | string;
  radius?: number | string;
}) => {
  return (
    <Center
      cursor="pointer"
      minW={size}
      minH={size}
      onClick={onToggle}
      borderRadius={radius}
      borderColor="#21252A"
      borderWidth={checked ? 0 : '1px'}
    >
      {checked ? <Icons.CheckMark /> : <Icons.UnCheckMark />}
    </Center>
  );
};

export default CheckBox;
