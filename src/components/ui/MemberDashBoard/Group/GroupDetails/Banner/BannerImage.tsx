import { Image } from '@chakra-ui/react';
import * as React from 'react';

interface BannerImagePropsI {
  src: string;
}
const BannerImage: React.FC<BannerImagePropsI> = ({ src }) => {
  return <Image src={src} minH="100px" minWidth="100%" />;
};

export default BannerImage;
