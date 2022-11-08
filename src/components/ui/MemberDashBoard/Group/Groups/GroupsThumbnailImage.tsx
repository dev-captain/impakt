import * as React from 'react';
import { Image } from '@chakra-ui/react';

interface ThumbnailImagePropsI {
  src?: string;
}

const GroupsThumbnailImage: React.FC<ThumbnailImagePropsI> = ({ src }) => {
  return (
    <Image
      alt="Group thumbnail"
      src={src}
      objectFit="cover"
      w="100%"
      minW="100%"
      zIndex="0"
      h="172px"
      borderRadius="24px 24px 0 0"
      padding={{ lgx: '16px 16px 0 16px', base: '12px 12px 0 12px' }}
    />
  );
};
export default GroupsThumbnailImage;
