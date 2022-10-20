import * as React from 'react';
import ImpaktTeamAdvisors from './ImpaktTeamAdvisors';
import ImpaktTeamFounders from './ImpaktTeamFounders';
import ImpaktTeamMemberCounter from './ImpaktTeamMemberCounter';

const ImpaktTeamContent: React.FC = () => {
  return (
    <>
      <ImpaktTeamFounders />
      <ImpaktTeamAdvisors />
      <ImpaktTeamMemberCounter />
    </>
  );
};
export default ImpaktTeamContent;
