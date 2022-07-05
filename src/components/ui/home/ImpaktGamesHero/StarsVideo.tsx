import { memo } from 'react';
import styled from 'styled-components';

import { Videos } from '../../../../data';

const Video = styled.video`
  object-fit: cover;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 150px 150px 0px 0;
  filter: contrast(120%) brightness(120%); ;
`;

const Source = styled.source``;

const StarsVideo = () => {
  return (
    <Video autoPlay loop muted>
      <Source src={Videos.stars} type="video/mp4" />
    </Video>
  );
};

export default memo(StarsVideo);
