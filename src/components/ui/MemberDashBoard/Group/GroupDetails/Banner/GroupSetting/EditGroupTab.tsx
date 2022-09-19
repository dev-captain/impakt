import React from 'react';
import { Avatar, AvatarGroup, Box, FormControl, Img, Text } from '@chakra-ui/react';
import { useForm } from 'hooks';
import { InputGroupPropsI } from 'components/common/InputGroup';
import { Common, I } from 'components';
import Images from 'assets/images';
import { CloseIcon } from '@chakra-ui/icons';

const EditGroupTab: React.FC = () => {
  const { errors, setValue } = useForm({
    defaultValues: { eventTitle: '', eventDescription: '' },
  });

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setValue(e.target.name as any, e.target.value as any, { shouldValidate: true });
  };

  const inputItems: InputGroupPropsI[] = [
    {
      placeholder: 'Group name',
      label: 'Group name',
      onChange,
      type: 'text',
      name: 'eventTitle',
      errorMsg: errors?.eventTitle?.message,
      autoFocus: false,
      whiteMode: true,
    },
  ];

  return (
    <Box>
      <FormControl
        display="flex"
        justifyContent="center"
        flexDir="row"
        alignItems="flex-end"
        m="0 !important"
        rowGap="24px"
        as="form"
        autoComplete="off"
        w="full"
      >
        <Common.InputItems inputItems={inputItems} />
        <Common.ImpaktButton
          variant="black"
          colorScheme="#fff"
          w="147px"
          ml="16px"
          h="60px"
          backgroundColor="#29323B"
          borderRadius="8px"
          type="submit"
          fontSize={{ md: '16px' }}
          fontWeight="700"
        >
          Save
        </Common.ImpaktButton>
      </FormControl>
      <Box mt="24px" display="flex">
        <Box>
          <Text color="#4E6070" fontSize="18px" fontWeight="500" mb="16px">
            Preview:
          </Text>
          <Box
            background="#fff"
            boxShadow="0px 0px 16px rgba(41, 50, 59, 0.1)"
            padding="16px"
            borderRadius="16px"
            width="384px"
          >
            <Img src={Images.group.upload} width="100%" />
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              mt="16px"
              mb="20px"
            >
              <Text color="#29323B" fontSize="20px" fontWeight="600">
                Group by Demideus{' '}
              </Text>
              <Box
                color="#4E6070"
                fontWeight="600"
                fontSize="16px"
                display="flex"
                alignItems="center"
              >
                <I.PeopleIcon width="16px" height="16px" mr="6px" />
                2,560
              </Box>
            </Box>
            <Box display="flex" justifyContent="space-between">
              <AvatarGroup size="md" max={4}>
                <Avatar
                  name="Ryan Florence"
                  src={Images.group.ellipse}
                  width="32px"
                  height="32px"
                />
                <Avatar
                  name="Segun Adebayo"
                  src={Images.group.ellipse}
                  width="32px"
                  height="32px"
                />
                <Avatar name="Kent Dodds" src={Images.group.ellipse} width="32px" height="32px" />
                <Avatar
                  name="Prosper Otemuyiwa"
                  src={Images.group.ellipse}
                  width="32px"
                  height="32px"
                />
              </AvatarGroup>
              <Common.ImpaktButton
                variant="black"
                colorScheme="#fff"
                w="99px"
                ml="16px"
                h="38px"
                backgroundColor="#F5F8FA"
                borderRadius="8px"
                type="submit"
                fontSize={{ md: '16px' }}
                fontWeight="700"
              />
            </Box>
          </Box>
        </Box>
        <Box ml="24px">
          <Text color="#4E6070" fontSize="18px" fontWeight="500" mb="16px">
            Cover image:
          </Text>
          <Box display="flex" flexDirection="column">
            <Common.ImpaktButton
              variant="black"
              color="#29323B"
              w="160px"
              h="42px"
              backgroundColor="#EEF4F6"
              borderRadius="8px"
              type="submit"
              fontSize={{ md: '16px' }}
              fontWeight="600"
            >
              <I.UploadIcon color="#29323B" width="12px" height="12px" />
              <Text ml="11px">Upload</Text>
            </Common.ImpaktButton>
            <Common.ImpaktButton
              mt="8px"
              variant="black"
              color="#29323B"
              w="160px"
              h="42px"
              backgroundColor="#EEF4F6"
              borderRadius="8px"
              type="submit"
              fontSize={{ md: '16px' }}
              fontWeight="600"
            >
              <CloseIcon color="#29323B" width="10px" height="10px" mr="11px" />
              Remove
            </Common.ImpaktButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default EditGroupTab;
