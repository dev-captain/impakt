import * as React from 'react';
import { Common } from 'components';
import { useNavigate } from 'react-router-dom';

const BecomePartJoinNowButton: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Common.ImpaktButton
      variant="black"
      height="50px"
      w={{ md: '300px', base: '170px' }}
      gap="8px"
      padding="10px 14px"
      onClick={() => navigate('/register')}
    >
      Join Now
    </Common.ImpaktButton>
  );
};
export default BecomePartJoinNowButton;
