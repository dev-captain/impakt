import { FormControl, Input } from '@chakra-ui/react';
import { ChangeEvent, useEffect, useState, FC } from 'react';
import { useAppDispatch, useDebounce } from 'hooks';
import { fetchMembers } from '../../../../../../lib/redux/slices/member/actions/fetchMembers';

const SearchUserForm: FC = () => {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState<string>('');
  const debouncedValue = useDebounce<string>(value, 500);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const fetchSearchMembers = async () => {
    await dispatch(fetchMembers({ username: value }));
  };
  // Fetch API (optional)
  useEffect(() => {
    if (value !== '') {
      fetchSearchMembers();
    }
    // Do fetch here...
    // Triggers when "debouncedValue" changes
  }, [debouncedValue]);

  return (
    <FormControl>
      <Input onChange={handleChange} placeholder="Search People" />
    </FormControl>
  );
};

export default SearchUserForm;
