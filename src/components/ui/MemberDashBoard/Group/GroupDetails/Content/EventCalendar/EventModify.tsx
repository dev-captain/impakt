export default {};
// import React from 'react';
// import { ChevronLeftIcon } from '@chakra-ui/icons';
// import { Box, Text, useDisclosure } from '@chakra-ui/react';
// import { Forms } from 'components';

// import { useEventCalendarContext } from '../../../../../../../context/EventCalendarContext';

// import ChallengeModal from '../../Modal/ChallengeModal';
// import { GetChallengeRes } from '../../../../../../../lib/impakt-dev-api-client/react-query/types/getChallengeRes';

// interface EventModifyPropsI {
//   showGoBackButton?: boolean;
//   title: string;
//   type: 'create' | 'update';
// }

// const EventModify: React.FC<EventModifyPropsI> = () => {
//   return (
//     <>
//       {type === 'create' && (
//         <Forms.CreateEventForm
//           onOpen={onOpen}
//           clearAssoc={() => {
//             setActiveChallenge(null);
//           }}
//           challengeId={activeChallenge?.id}
//           challengeName={activeChallenge?.name}
//         />
//       )}
//       {type === 'update' && (
//         <Forms.UpdateEventForm
//           onOpen={onOpen}
//           clearAssoc={() => {
//             setActiveChallenge(null);
//           }}
//           challengeId={activeChallenge?.id!}
//           challengeName={activeChallenge?.name!}
//         />
//       )}
//     </>
//   );
// };
// export default EventModify;
