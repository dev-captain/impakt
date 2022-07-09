import { Box } from '@chakra-ui/react';
import Images from 'assets/images';

type Props = {
  w?: string | number;
  h?: string | number;
};

const Video = ({ w, h }: Props) => {
  return (
    <Box
      opacity="0.6"
      pos="absolute"
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      bgImage={Images.Common.Peter}
      maxW="533px"
      maxH="333px"
      w={w || 'full'}
      h={h || 'full'}
    />
  );
};

export default Video;
