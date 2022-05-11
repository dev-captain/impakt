import { Center } from '@chakra-ui/react';
import Icons from 'components/icons';

const CheckBox = ({
  checked,
  name,
  onToggle,
  size = '12px',
  radius = '4px',
}: {
  checked: boolean;
  name: string;
  onToggle: any;
  size?: number | string;
  radius?: number | string;
}) => {
  return (
    <Center
      name={name}
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
