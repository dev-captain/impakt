import * as React from 'react';
import { useAppDispatch, useAppSelector, useForm } from 'hooks';
import { Flex, FormControl, useToast } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { Common, I } from 'components';
import { createGroup } from '../../../../../../lib/redux/slices/groups/actions/createGroup';
import { fetchMyGroups } from '../../../../../../lib/redux/slices/groups/actions/fetchMyGroups';
import { InputGroupPropsI } from '../../../../../common/InputGroup';

interface CreateGroupFormPropsI {}
const CreateGroupForm: React.FC<CreateGroupFormPropsI> = () => {
  const { handleSubmit, errors, setValue } = useForm({
    defaultValues: { friendlyName: '' },
  });

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setValue(e.target.name as any, e.target.value as any, { shouldValidate: true });
  };
  const dispatch = useAppDispatch();
  const toast = useToast();
  const navigate = useNavigate();
  const member = useAppSelector((state) => state.memberAuth.member);

  const handleOnCreate = async (data: any) => {
    const { friendlyName } = data as { friendlyName: string };
    try {
      if (!member) return;
      await dispatch(createGroup(friendlyName)).unwrap();
      await dispatch(fetchMyGroups(member.id));
      toast({
        title: 'Success',
        description: 'Group created successfully.',
        isClosable: true,
        duration: 8000,
        status: 'success',
      });
    } catch (e: any) {
      toast({
        title: 'Error',
        description: e.response.data.message,
        isClosable: true,
        duration: 8000,
        status: 'error',
      });
    }
    navigate('/dashboard/groups');
  };

  const inputItems: InputGroupPropsI[] = [
    {
      placeholder: 'Group by Demidues',
      onChange,
      type: 'text',
      name: 'friendlyName',
      label: 'Group name',
      errorMsg: errors?.friendlyName?.message,
      autoFocus: true,
      whiteMode: true,
    },
  ];

  return (
    <FormControl
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDir="column"
      m="0 !important"
      rowGap="24px"
      as="form"
      onSubmit={handleSubmit(handleOnCreate)}
      autoComplete="off"
      w="full"
    >
      <Common.InputItems inputItems={inputItems} />
      <Flex justifyContent="space-between" w="full">
        <Common.ImpaktButton
          variant="transparent"
          _hover={{ backgroundColor: '#000', color: '#fff' }}
          _active={{ backgroundColor: 'transparent' }}
          _focus={{ boxShadow: 'none' }}
          border="2px solid #29323B"
          borderRadius="16px"
          color="#29323B"
          w={{ md: '152px', base: '120px' }}
          h={{ md: '64px', base: '54px' }}
          fontSize={{ md: '18px' }}
          fontWeight="700"
          mr={3}
          justifyContent="space-evenly"
          onClick={() => {
            navigate('/dashboard/groups');
          }}
          leftIcon={<I.BackIcon />}
        >
          Back
        </Common.ImpaktButton>
        <Common.ImpaktButton
          variant="black"
          colorScheme="#fff"
          w={{ md: '135px', base: '130px' }}
          h={{ md: '64px', base: '54px' }}
          backgroundColor="#29323B"
          borderRadius="16px"
          type="submit"
          fontSize={{ md: '18px' }}
          fontWeight="700"
        >
          Create
        </Common.ImpaktButton>
      </Flex>
    </FormControl>
  );
};
export default CreateGroupForm;
