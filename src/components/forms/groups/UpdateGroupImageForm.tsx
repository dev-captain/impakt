import { CloseIcon } from '@chakra-ui/icons';
import { Avatar, AvatarGroup, Box, Img, Input, Text } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { Common, I } from 'components';

import React, { useEffect } from 'react';
import { useForm } from 'hooks';
import { useParams } from 'react-router-dom';

import Images from '../../../assets/images';
import uploadImageScheme from '../../../lib/yup/schemas/uploadImageScheme';
import { ALLOW_IMAGE_FILE } from '../../../lib/yup/fields';
import { useGroupsControllerV1PatchGroupCoverImage } from '../../../lib/impakt-dev-api-client/react-query/groups/groups';
import { usePersistedGroupStore } from '../../../lib/zustand';
import { renderToast } from '../../../utils';

const UpdateGroupImageForm: React.FC = () => {
  const updateGroupCoverImage = useGroupsControllerV1PatchGroupCoverImage();
  const groupParam = useParams();
  const { activeGroup, setActiveGroup, myGroups, setMyGroups } = usePersistedGroupStore();
  const groupMembers = usePersistedGroupStore().membersOfGroup?.Members.filter(
    (members) => members.role !== 'None',
  );
  // const groupMemberCount = groupMembers?.length ?? 0;

  const uploadImageInputRef = React.useRef<HTMLInputElement | null>(null);
  const uploadImageRef = React.useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (activeGroup?.CurrentCoverImage) {
      setBannerImage(activeGroup.CurrentCoverImage);

      return;
    }
    setBannerImage(Images.group.defaultThumbnail);
  }, []);

  const { handleSubmit, reset, errors, setValue } = useForm({
    resolver: yupResolver(uploadImageScheme),
    defaultValues: { file: null },
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      if (file) {
        setValue(e.target.name as any, file as any, { shouldValidate: true, shouldDirty: true });
        if (ALLOW_IMAGE_FILE.includes(file.type)) {
          setBannerImage(URL.createObjectURL(file));
        }
      }
    }
  };

  const resetUploadImage = () => {
    setBannerImage(Images.group.defaultThumbnail);
    fetch(Images.group.defaultCoverImage)
      .then((res) => {
        return res.blob();
      })
      .then((bl) => {
        const file = new File([bl], 'logo.png', bl);
        reset({ file } as any);
      });
  };

  const openUploadImageFileInput = () => {
    renderToast('warning', 'Image size should be less than 1MB.');

    if (uploadImageInputRef.current) {
      uploadImageInputRef.current.click();
    }
  };

  const uploadImage = (data: { file: any }) => {
    if (!activeGroup) return;
    if (!groupParam.id) return;
    const formData = new FormData();
    formData.append('file', data.file);
    updateGroupCoverImage.mutate(
      { data: { file: formData.get('file') as any }, groupId: activeGroup.id },
      {
        onSuccess: (newImage) => {
          renderToast('success', 'Group cover image updated successfully.');
          setActiveGroup({ ...activeGroup, CurrentCoverImage: newImage.ImageKey });
          const shallowOfMyGroups = [...myGroups];
          const indexOfGroup = shallowOfMyGroups.findIndex(
            (group) => group.groupId === activeGroup.id,
          );
          if (indexOfGroup !== -1) {
            shallowOfMyGroups[indexOfGroup].Group.CurrentCoverImage = newImage.ImageKey;
            setMyGroups(shallowOfMyGroups);
          }

          reset({ file: null });
        },
        onError: (err) => {
          renderToast('error', err.response?.data.message ?? 'Something went wrong');
        },
      },
    );
  };

  const handleFormSubmit = async (data: any) => {
    uploadImage({ file: data.file });
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
            {/* <Box
              color="#4E6070"
              fontWeight="600"
              fontSize="16px"
              display="flex"
              alignItems="center"
            >
              <I.PeopleIcon width="16px" height="16px" mr="6px" />
              {groupMemberCount}
            </Box> */}
          </Box>
          <Box display="flex" justifyContent="space-between">
            <AvatarGroup size="md" max={4}>
              {groupMembers?.map((members) => (
                <Avatar
                  key={members.groupId}
                  name={
                    members.User.firstName?.replace(' ', '') ??
                    members.User.username?.replace(' ', '')
                  }
                  width="32px"
                  height="32px"
                />
              ))}
            </AvatarGroup>
            {/* <Common.ImpaktButton
              cursor="pointer"
              variant="black"
              color="#29323B"
              isLoading={updateGroupCoverImage.isLoading}
              w="99px"
              ml="16px"
              h="38px"
              backgroundColor="#EEF4F6"
              borderRadius="8px"
              type="submit"
              fontSize={{ md: '16px' }}
              fontWeight="400"
              leftIcon={<I.UploadIcon color="#29323B" width="12px" height="12px" />}
            >
              Upload
            </Common.ImpaktButton> */}
          </Box>
        </Box>
      </Box>
      <Box ml={{ md: '24px', base: '0' }} mt={{ md: 0, base: '20px' }}>
        <Text color="#4E6070" fontSize="18px" fontWeight="500" mb="16px">
          Cover image:
        </Text>
        <Box display="flex" flexDirection="column">
          <Common.ImpaktButton
            variant="black"
            isLoading={updateGroupCoverImage.isLoading}
            isDisabled={updateGroupCoverImage.isLoading}
            w="160px"
            h="42px"
            borderRadius="8px"
            fontSize={{ md: '16px' }}
            onClick={openUploadImageFileInput}
            fontWeight="600"
            leftIcon={<I.UploadIcon width="12px" height="12px" />}
          >
            Upload
          </Common.ImpaktButton>
          <Common.ImpaktButton
            mt="8px"
            variant="black"
            w="160px"
            h="42px"
            borderRadius="8px"
            fontSize={{ md: '16px' }}
            fontWeight="600"
            leftIcon={<CloseIcon width="10px" height="10px" />}
            onClick={resetUploadImage}
          >
            Remove
          </Common.ImpaktButton>
          <Common.ImpaktButton
            mt="8px"
            cursor="pointer"
            variant="black"
            isLoading={updateGroupCoverImage.isLoading}
            isDisabled={updateGroupCoverImage.isLoading}
            w="160px"
            h="42px"
            borderRadius="8px"
            type="submit"
            fontSize={{ md: '16px' }}
            fontWeight="600"
          >
            Save
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
