import React from 'react';
import { Common } from 'components';

interface ExploreGroupCardPrivatePublicToggleButtonPropsI {
  status: 'Public' | 'Private';
  setStatus: (status: 'Public' | 'Private') => void;
}

const ExploreGroupCardPrivatePublicToggleButton: React.FC<
  ExploreGroupCardPrivatePublicToggleButtonPropsI
> = ({ status, setStatus }) => {
  return (
    <Common.Toggle
      leftTitle="Public"
      rightTitle="Private"
      on={status === 'Public'}
      onToggle={status === 'Public' ? () => setStatus('Private') : () => setStatus('Public')}
    />
  );
};
export default ExploreGroupCardPrivatePublicToggleButton;
