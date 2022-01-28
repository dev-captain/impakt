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
      minW={size}
      minH={size}
      onClick={onToggle}
      borderRadius={radius}
      borderColor="#21252A"
      borderWidth={checked ? 0 : '1px'}
      bg={checked ? 'linear-gradient(143.78deg, #DC143C 18.94%, #B22222 78.86%)' : 'white'}
    >
      {checked && <Icons.CheckMark />}
    </Center>
  );
};

export default CheckBox;
