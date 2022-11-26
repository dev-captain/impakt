import * as React from 'react';
import { C } from '../../..';

const ImpaktTeamLayout: React.FC = ({ children }) => {
  return (
    <C.HeroLayout
      bgImage="linear-gradient(180deg, #DEE9F6 44.79%, #C2D5EC 100%)"
      bgColor="#C2D5EC"
      pos="relative"
      customPadding={{
        base: '16px',
        md: '32px',
        xl: '100px',
        '2xl': '0px',
      }}
      minH="70vh"
    >
      {children}
    </C.HeroLayout>
  );
};
export default ImpaktTeamLayout;
