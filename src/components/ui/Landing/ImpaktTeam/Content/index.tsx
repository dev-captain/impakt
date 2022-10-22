import * as React from 'react';
import ImpaktTeamAdvisors from './ImpaktTeamAdvisors';
import ImpaktTeamFounders from './ImpaktTeamFounders';
import ImpaktTeamMemberCounter from './ImpaktTeamMemberCounter';
import ImpaktTeamOfficalPartnership from './ImpaktTeamOfficalPartnership';

const ImpaktTeamContent: React.FC = () => {
  return (
    <>
      <ImpaktTeamFounders />
      <ImpaktTeamAdvisors />
      <ImpaktTeamOfficalPartnership />
      <ImpaktTeamMemberCounter />
    </>
  );
};
export default ImpaktTeamContent;
