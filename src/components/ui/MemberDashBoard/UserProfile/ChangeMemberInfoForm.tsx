import * as React from 'react';
import { Box, FormControl, Divider, HStack, Text, VStack, Avatar, Input } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { Common, I } from '@/components';
import { useForm } from '@/hooks';

import { InputGroupPropsI } from '../../../common/InputGroup';
import { usePersistedAuthStore } from '../../../../lib/zustand';
import uploadImageScheme from '../../../../lib/yup/schemas/uploadImageScheme';
import { renderToast } from '../../../../utils';

const ChangeMemberInfoForm: React.FC = () => {
  const { member } = usePersistedAuthStore();
  //   const { handleSubmit, setValue, errors, getValues } = useForm();
  //   const handleChangeMemberInfoFormSubmit {
  const memberNameNow = member?.username.split('#')[0];
  const memberIdNow = `#${member?.username.split('#')[1]}`;
  const { setValue, errors, getValues } = useForm({
    resolver: yupResolver(uploadImageScheme),
    defaultValues: { memberName: memberNameNow, memberId: memberIdNow, file: null },
  });
  // }
  const uploadImageInputRef = React.useRef<HTMLInputElement | null>(null);
  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setValue(e.target.name as any, e.target.value as any, { shouldValidate: true });
  };
  const onImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      if (file) {
        setValue(e.target.name as any, file as any, { shouldValidate: true, shouldDirty: true });
        // if (ALLOW_IMAGE_FILE.includes(file.type)) {
        //   setBannerImage(URL.createObjectURL(file));
        // }
      }
    }
  };
  const openUploadImageFileInput = () => {
    renderToast('warning', 'Image size should be less than 1MB.');

    if (uploadImageInputRef.current) {
      uploadImageInputRef.current.click();
    }
  };
  const nameInputItems: InputGroupPropsI[] = [
    {
      inputProps: {
        placeholder: 'Demideus',
        onChange,
        type: 'text',
        name: 'memberName',
        value: getValues('memberName'),
        autoFocus: false,
      },
      inputElementProps: {
        left: { item: <I.PeopleIcon color="black" /> },
      },
      errorMsg: errors?.memberName?.message,
      whiteMode: true,
    },
  ];
  const idInputItems: InputGroupPropsI[] = [
    {
      inputProps: {
        placeholder: '#0001',
        onChange,
        type: 'text',
        name: 'memberId',
        value: getValues('memberId'),
        autoFocus: false,
      },
      errorMsg: errors?.memberId?.message,
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
      rowGap="0px"
      as="form"
      autoComplete="off"
      w="full"
    >
      <VStack rowGap="20px" justify="center" align="center" w="full">
        <Box>
          <Avatar
            boxShadow="extra"
            width="160px"
            border="8px solid #fff"
            height="160px"
            size="2xl"
            name={member?.firstName?.replace(' ', '') ?? member?.username?.replace(' ', '')}
          />
        </Box>
        <HStack>
          <Common.ImpaktButton
            p="1em"
            w="160px"
            leftIcon={<I.UploadIcon />}
            variant="white-50"
            onClick={openUploadImageFileInput}
          >
            Upload
          </Common.ImpaktButton>
          <Common.ImpaktButton
            p="1em"
            w="160px"
            leftIcon={<I.CloseIcon width="20px" />}
            variant="white-50"
            fontWeight="bold"
          >
            Remove
          </Common.ImpaktButton>
        </HStack>
        <Divider />
        <HStack
          display="flex"
          flexWrap="wrap"
          align="center"
          justify="center"
          w="full"
          justifyContent="space-between"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            w={{ base: '100%', md: '72%', lg: '72%' }}
          >
            <Box w="66%" paddingRight="10px">
              <Text>Membername:</Text>
              <Common.InputItems inputItems={nameInputItems} />
            </Box>
            <Box w="33%" display="flex" flexDirection="column">
              <Box display="flex" justifyContent="space-between">
                <Text mr="20px">ID:</Text>
                <Text color="red">Generate</Text>
              </Box>
              <Box>
                <Common.InputItems inputItems={idInputItems} />
              </Box>
            </Box>
          </Box>
          <Box w={{ base: '100%', md: '25%', lg: '25%' }} marginLeft="0px !important">
            <Box marginLeft="0">
              <Common.ImpaktButton
                variant="primary"
                type="submit"
                marginTop="1.2em"
                bgGradient="linear(to-t, rgba(240, 65, 83, 1), rgba(242, 121, 97, 1))"
                h="48px"
                leftIcon={
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.00081 17.3332C4.40054 17.3281 0.672532 13.6001 0.66748 8.99985V8.83318C0.75909 4.25363 4.52964 0.606482 9.10971 0.667252C13.6898 0.728022 17.3622 4.47392 17.3323 9.0543C17.3024 13.6347 13.5813 17.3323 9.00081 17.3332ZM5.17581 8.65818L4.00081 9.83318L7.33415 13.1665L14.0008 6.49985L12.8258 5.31652L7.33415 10.8082L5.17581 8.65818Z"
                      fill="white"
                    />
                  </svg>
                }
              >
                Save
              </Common.ImpaktButton>
            </Box>
          </Box>
        </HStack>
      </VStack>
      <Input
        ref={uploadImageInputRef}
        name="file"
        id="file"
        type="file"
        width="0"
        display="none"
        height="0"
        position="absolute"
        left="0"
        opacity="0"
        accept="image/png, image/jpeg"
        onChange={onImageChange}
      />
    </FormControl>
  );
};

export default ChangeMemberInfoForm;
