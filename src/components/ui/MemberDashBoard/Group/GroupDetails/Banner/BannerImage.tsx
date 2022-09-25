import { Image } from '@chakra-ui/react';
import * as React from 'react';
import { useAppSelector } from 'hooks';
import Images from '../../../../../../assets/images';

const BannerImage: React.FC = () => {
  const isCurrentImageExist = useAppSelector(
    (state) => state.groupsReducer.activeGroup?.currentCoverImageId,
  );
  const currentCoverImageSource = useAppSelector(
    (state) => state.groupsReducer.activeGroup?.CurrentCoverImage,
  );

  const getImageSrc = () => {
    const sourceBaseUrl =
      // eslint-disable-next-line no-constant-condition
      process.env.NODE_ENV === 'development' || 'test'
        ? 'https://impakt-image-data-dev.s3.amazonaws.com/'
        : '';
    const imageUrl = `${sourceBaseUrl}${currentCoverImageSource?.source}`;

    return imageUrl;
  };

  return (
    <Image
      src={isCurrentImageExist ? getImageSrc() : Images.group.cover}
      minH="100px"
      minWidth="100%"
    />
  );
};

export default BannerImage;
