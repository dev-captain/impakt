import React from 'react';
import { useAppDispatch, useAppSelector } from 'hooks';
import { Box, Radio, RadioGroup, Stack, Text, useToast } from '@chakra-ui/react';
import { useNavigate, useParams } from 'react-router-dom';
import { Common } from 'components';
import { updateGroup } from 'lib/redux/slices/groups/actions/updateGroup';

const PermissionTab: React.FC = () => {
  const [value, setValue] = React.useState('Public');

  const dispatch = useAppDispatch();
  const toast = useToast();
  const navigate = useNavigate();
  const groupParam = useParams();
  const activeGroup = useAppSelector((state) => state.groupsReducer.activeGroup);
  React.useEffect(() => {
    if (activeGroup?.private) {
      setValue('Private');
    } else {
      setValue('Public');
    }
  }, [activeGroup]);

  const handleOnUpdate = async (status: boolean, groupName: string, groupId: number) => {
    try {
      await dispatch(updateGroup({ status, groupName, groupId })).unwrap();
      toast({
        title: 'Success',
        description: 'Group Status Changed successfully.',
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

  return (
    <Box>
      <Box
        height="470px"
        overflow="auto"
        paddingRight="8px"
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
        <Box border="2px solid #EEF4F6" p="16px" borderRadius="16px" mb="16px">
          <Text color="#29323B" fontSize={{ md: '18px', base: '12px' }} fontWeight="500">
            Is your group public or private?
          </Text>
          <Box display="flex" width="100%" mt="12px">
            <RadioGroup onChange={(v) => setValue(v)} value={value}>
              <Stack direction="row">
                <Radio value="Public">Public</Radio>
                <Radio value="Private">Private</Radio>
              </Stack>
            </RadioGroup>
          </Box>
        </Box>
      </Box>
      <Box mt="20px" textAlign="end">
        <Common.ImpaktButton
          variant="black"
          color="#fff"
          w="147px"
          h="60px"
          backgroundColor="#29323B"
          borderRadius="8px"
          type="submit"
          fontSize={{ md: '16px' }}
          fontWeight="500"
          onClick={() =>
            handleOnUpdate(
              value !== 'Public',
              String(activeGroup?.groupName),
              Number(groupParam?.id),
            )
          }
        >
          <Text
            ml={{ md: '11px', base: '6px' }}
            fontSize={{ md: '20px', base: '16px' }}
            fontWeight="600"
          >
            Save
          </Text>
        </Common.ImpaktButton>
      </Box>
    </Box>
  );
};

export default PermissionTab;
