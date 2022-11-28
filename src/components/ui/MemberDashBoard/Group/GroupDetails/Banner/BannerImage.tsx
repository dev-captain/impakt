import { Image } from '@chakra-ui/react';
import * as React from 'react';
import Images from '../../../../../../assets/images';
import { usePersistedGroupStore } from '../../../../../../lib/zustand';

const BannerImage: React.FC = () => {
  const isCurrentImageExist = usePersistedGroupStore().activeGroup?.currentCoverImageId;
  const currentCoverImageSource = usePersistedGroupStore().activeGroup?.CurrentCoverImage;

  return (
    <Image
      src={isCurrentImageExist ? currentCoverImageSource : Images.group.defaultCoverImage}
      loading="lazy"
      minH="100px"
      minWidth="100%"
      maxH="304px"
      objectFit="cover"
    />
  );
};

export default BannerImage;
