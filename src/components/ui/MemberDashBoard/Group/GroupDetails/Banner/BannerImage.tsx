import { Image } from '@chakra-ui/react';
import * as React from 'react';
import { useAppSelector } from 'hooks';
import Images from '../../../../../../assets/images';
import { getImageFromS3AsUrl } from '../../../../../../utils';

const BannerImage: React.FC = () => {
  const isCurrentImageExist = useAppSelector(
    (state) => state.groupsReducer.activeGroup?.currentCoverImageId,
  );
  const currentCoverImageSource = useAppSelector(
    (state) => state.groupsReducer.activeGroup?.CurrentCoverImage,
  );

  return (
    <Image
      cursor="pointer"
      src={
        isCurrentImageExist
          ? getImageFromS3AsUrl(currentCoverImageSource!.source)
          : Images.group.cover2
      }
      minH="100px"
      minWidth="100%"
      maxH="304px"
      objectFit="cover"
    />
  );
};

export default BannerImage;
