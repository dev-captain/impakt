import { Image } from '@chakra-ui/react';
import * as React from 'react';
import { useAppSelector } from 'hooks';
import Images from '../../../../../../assets/images';
import { getImageFromS3AsUrl } from '../../../../../../utils';
import { GroupRole } from '../../../../../../lib/redux/slices/groups/types';

const BannerImage: React.FC = () => {
  const activeGroup = useAppSelector((state) => state.groupsReducer.activeGroup);
  const isCurrentImageExist = useAppSelector(
    (state) => state.groupsReducer.activeGroup?.currentCoverImageId,
  );
  const currentCoverImageSource = useAppSelector(
    (state) => state.groupsReducer.activeGroup?.CurrentCoverImage,
  );

  return (
    <Image
      src={
        // eslint-disable-next-line no-nested-ternary
        isCurrentImageExist
          ? getImageFromS3AsUrl(currentCoverImageSource!.source)
          : activeGroup?.role === GroupRole.Creator
          ? Images.group.cover2
          : Images.group.cover
      }
      minH="100px"
      minWidth="100%"
      maxH="304px"
      objectFit="cover"
    />
  );
};

export default BannerImage;
