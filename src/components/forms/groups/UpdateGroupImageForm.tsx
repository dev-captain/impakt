import { CloseIcon } from '@chakra-ui/icons';
import { Avatar, AvatarGroup, Box, Img, Input, Text } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { Common, I } from 'components';

import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector, useForm } from 'hooks';
import { useParams } from 'react-router-dom';

import Images from '../../../assets/images';
import uploadImageScheme from '../../../lib/yup/schemas/uploadImageScheme';
import { ALLOW_IMAGE_FILE } from '../../../lib/yup/fields';
import { updateGroupCoverImage } from '../../../lib/redux/slices/groups/actions/updateGroupCoverImage';
import { getImageFromS3AsUrl } from '../../../utils';

interface PropsI {}
const UpdateGroupImageForm: React.FC<PropsI> = () => {
  const dispatch = useAppDispatch();
  const groupParam = useParams();
  const activeGroup = useAppSelector((state) => state.groupsReducer.activeGroup);
  const groupMemberCount = useAppSelector(
    (state) => state.groupsReducer.membersOfGroup?.members,
  )?.length;
  const uploadImageInputRef = React.useRef<HTMLInputElement | null>(null);
  const uploadImageRef = React.useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    // if (activeGroup?.currentCoverImage?.source) {
    //   setBannerImage(getImageFromS3AsUrl(activeGroup.currentCoverImage.source));

    //   return;
    // }
    setBannerImage(Images.group.logo);
  }, []);

  const { handleSubmit, reset, errors, setValue } = useForm({
    resolver: yupResolver(uploadImageScheme),
    defaultValues: { file: null },
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      setValue(e.target.name as any, file as any, { shouldValidate: true });
      if (ALLOW_IMAGE_FILE.includes(file.type)) {
        setBannerImage(URL.createObjectURL(file));
      }
    }
  };

  const resetUploadImage = () => {
    setBannerImage(Images.group.logo);
    reset({ file: null });
  };

  const openUploadImageFileInput = () => {
    if (uploadImageInputRef.current) {
      uploadImageInputRef.current.click();
    }
  };

  const handleFormSubmit = async (data: any) => {
    if (!activeGroup) return;
    if (!groupParam.id) return;

    const formData = new FormData();
    formData.append('file', data.file);
    await dispatch(updateGroupCoverImage({ body: formData, groupId: activeGroup.id })).unwrap();
  };

  const setBannerImage = (source: any) => {
    if (!uploadImageRef.current) return;
    uploadImageRef.current.src = source;
  };

  return (
    <Box
      as="form"
      onSubmit={handleSubmit(handleFormSubmit)}
      mt="24px"
      display={{ md: 'flex', base: 'block' }}
    >
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
          <Img
            minH="100px"
            maxH="300px"
            alt="Impakt group cover image"
            onClick={openUploadImageFileInput}
            cursor="pointer"
            width="100%"
            ref={uploadImageRef}
          />

          {errors?.file && (
            <Box w="full" mt="5px" ml="10px">
              <Text
                bgClip="text"
                textStyle="regular12"
                bgGradient="linear(to-r, rgba(220, 20, 60, 1), rgba(178, 34, 34, 1))"
              >
                {errors.file.message}
              </Text>
            </Box>
          )}
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mt="16px"
            mb="20px"
          >
            <Text color="#29323B" fontSize={{ md: '20px', base: '14px' }} fontWeight="600">
              {activeGroup?.groupName}
            </Text>
            <Box
              color="#4E6070"
              fontWeight="600"
              fontSize="16px"
              display="flex"
              alignItems="center"
            >
              <I.PeopleIcon width="16px" height="16px" mr="6px" />
              {groupMemberCount}
            </Box>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <AvatarGroup size="md" max={4}>
              <Avatar name="Ryan Florence" src={Images.group.ellipse} width="32px" height="32px" />
              <Avatar name="Segun Adebayo" src={Images.group.ellipse} width="32px" height="32px" />
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
          <Common.ImpaktButton
            cursor="pointer"
            variant="black"
            color="#29323B"
            w="160px"
            h="42px"
            backgroundColor="#EEF4F6"
            borderRadius="8px"
            type="submit"
            fontSize={{ md: '16px' }}
            fontWeight="600"
            leftIcon={<I.UploadIcon color="#29323B" width="12px" height="12px" />}
          >
            Upload
          </Common.ImpaktButton>
          <Common.ImpaktButton
            mt="8px"
            variant="black"
            color="#29323B"
            w="160px"
            h="42px"
            backgroundColor="#EEF4F6"
            borderRadius="8px"
            fontSize={{ md: '16px' }}
            fontWeight="600"
            leftIcon={<CloseIcon color="#29323B" width="10px" height="10px" />}
            onClick={resetUploadImage}
          >
            Remove
          </Common.ImpaktButton>
        </Box>
      </Box>
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
        onChange={onChange}
      />
    </Box>
  );
};

export default UpdateGroupImageForm;
