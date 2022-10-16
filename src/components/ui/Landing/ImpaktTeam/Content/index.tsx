import * as React from 'react';
import ImpaktTeamAdvisors from './ImpaktTeamAdvisors';
import ImpaktTeamFounders from './ImpaktTeamFounders';

const ImpaktTeamContent: React.FC = () => {
  return (
    <>
      <ImpaktTeamFounders />
      <ImpaktTeamAdvisors />
    </>
  );
};
export default ImpaktTeamContent;
