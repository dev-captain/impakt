// import { Box } from '@chakra-ui/react';
import { memo } from 'react';
import styled from 'styled-components';

import { Videos } from '../../../data';

const Video = styled.video`
  object-fit: cover;
  top: 0;
  left: 0;
  max-width: 880px;
  height: 100%;
  border-radius: 20px;
  filter: contrast(120%) brightness(120%);
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Source = styled.source``;

const HeroVideo = () => {
  return (
    <Video autoPlay loop muted playsInline>
      <Source src={Videos.heroVideo} type="video/mp4" />
    </Video>
  );
};

export default memo(HeroVideo);
