import React from 'react';
import { Avatar, AvatarGroup, Box, FormControl, Img, Input, Text } from '@chakra-ui/react';
import { useForm } from 'hooks';
import { InputGroupPropsI } from 'components/common/InputGroup';
import { Common, I } from 'components';
import Images from 'assets/images';
import { CloseIcon } from '@chakra-ui/icons';

const EditGroupTab: React.FC = () => {
  const [preview, setPreview] = React.useState<any>();
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

  const onImageChange = (e: any) => {
    const [file] = e.target.files;
    setPreview(URL.createObjectURL(file));
  };

  return (
    <Box
      height={{ base: '550px', md: 'aut0' }}
      overflowY="auto"
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
      <FormControl
        display={{ md: 'flex', base: 'block' }}
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
          mt={{ md: 0, base: '10px' }}
          variant="black"
          colorScheme="#fff"
          w={{ md: '147px', base: '100%' }}
          ml={{ md: '16px', base: '0' }}
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
      <Box mt="24px" display={{ md: 'flex', base: 'block' }}>
        <Box>
          <Text color="#4E6070" fontSize="18px" fontWeight="500" mb="16px">
            Preview:
          </Text>
          <Box
            background="#fff"
            boxShadow="0px 0px 16px rgba(41, 50, 59, 0.1)"
            padding="16px"
            borderRadius="16px"
            width={{ md: '384px', base: '100%' }}
          >
            <Img src={!preview ? Images.group.upload : preview} width="100%" />
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              mt="16px"
              mb="20px"
            >
              <Text color="#29323B" fontSize={{ md: '20px', base: '14px' }} fontWeight="600">
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
        <Box ml={{ md: '24px', base: '0' }} mt={{ md: 0, base: '20px' }}>
          <Text color="#4E6070" fontSize="18px" fontWeight="500" mb="16px">
            Cover image:
          </Text>
          <Box display="flex" flexDirection="column">
            <Box position="relative">
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
              <Input
                type="file"
                width="160px"
                position="absolute"
                left="0"
                opacity="0"
                onChange={(e) => onImageChange(e)}
              />
            </Box>
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
              onClick={() => setPreview('')}
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
