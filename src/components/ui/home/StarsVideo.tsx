import { memo } from 'react';
import styled from 'styled-components';

import { Videos } from '../../../data';

const Video = styled.video`
  object-fit: cover;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 200px 200px 0px 0px;
  filter: contrast(120%) brightness(120%);
  @media (max-width: 991px) {
    border-radius: 68.6px !important;
  }
`;

const Source = styled.source``;

const StarsVideo = () => {
  return (
    <Video autoPlay loop muted playsInline>
      <Source src={Videos.stars} type="video/mp4" />
    </Video>
  );
};

export default memo(StarsVideo);
