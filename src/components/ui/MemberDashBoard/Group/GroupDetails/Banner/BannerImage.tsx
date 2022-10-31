import { Image } from '@chakra-ui/react';
import * as React from 'react';
import { useAppSelector } from 'hooks';
import Images from '../../../../../../assets/images';

const BannerImage: React.FC = () => {
  const isCurrentImageExist = useAppSelector(
    (state) => state.groupsReducer.activeGroup?.currentCoverImageId,
  );
  const currentCoverImageSource = useAppSelector(
    (state) => state.groupsReducer.activeGroup?.currentCoverImage,
  );

  return (
    <Image
      src={isCurrentImageExist ? currentCoverImageSource : Images.group.cover}
      loading="lazy"
      minH="100px"
      minWidth="100%"
      maxH="304px"
      objectFit="cover"
    />
  );
};

export default BannerImage;
