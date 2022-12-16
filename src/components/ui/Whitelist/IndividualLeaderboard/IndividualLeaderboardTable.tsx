import { VStack, Box } from '@chakra-ui/react';
import * as React from 'react';
import { I, Common } from 'components';
import { useForm } from 'hooks';

import { InputGroupPropsI } from '../../../common/InputGroup';

const IndividualLeaderboardTable: React.FC = () => {
  const { setValue } = useForm({
    defaultValues: { searchCommunity: '' },
  });

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setValue(e.target.name as any, e.target.value as any, { shouldValidate: true });
  };

  const inputItems: InputGroupPropsI[] = [
    {
      placeholder: 'Search community / player',
      leftIcon: <I.SearchIcon />,
      onChange,
      type: 'search',
      name: 'searchIndividual',
    },
  ];

  return (
    <VStack rowGap="24px" w="full">
      <Box w="full" id="search-community-leaderboard-box">
        <Common.InputItems inputItems={inputItems} />
      </Box>
      <Box w="full">
        <Common.LeaderboardTable
          titles={['Place', 'Member', 'Community', 'Score']}
          contents={dummyCommunityLeaderboardTableItems}
        />
      </Box>
    </VStack>
  );
};
const dummyCommunityLeaderboardTableItems = [
  {
    place: '1',
    member: 'RatSpeare',
    community: 'Neo Tokyo',
    score: '32,000',
  },
  {
    place: '2',
    member: 'RatSpeare',
    community: 'Neo Tokyo',
    score: '32,000',
  },
  {
    place: '3',
    member: 'RatSpeare',
    community: 'Neo Tokyo',
    score: '32,000',
  },
  {
    place: '4',
    member: 'RatSpeare',
    community: 'Neo Tokyo',
    score: '32,000',
  },
  {
    place: '4',
    member: 'RatSpeare',
    community: 'Neo Tokyo',
    score: '32,000',
  },

  {
    place: '5',
    member: 'RatSpeare',
    community: 'Neo Tokyo',
    score: '32,000',
  },
  {
    place: '6',
    member: 'RatSpeare',
    community: 'Neo Tokyo',
    score: '32,000',
  },
  {
    place: '7',
    member: 'RatSpeare',
    community: 'Neo Tokyo',
    score: '32,000',
  },
  {
    place: '8',
    member: 'RatSpeare',
    community: 'Neo Tokyo',
    score: '32,000',
  },
  {
    place: '9',
    member: 'RatSpeare',
    community: 'Neo Tokyo',
    score: '32,000',
  },
  {
    place: '10',
    member: 'RatSpeare',
    community: 'Neo Tokyo',
    score: '32,000',
  },
];
export default IndividualLeaderboardTable;
