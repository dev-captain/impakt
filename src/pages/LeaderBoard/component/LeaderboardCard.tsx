import { Spinner, Text, VStack } from '@chakra-ui/react';
import { LeaderBoardUser } from 'hooks/store/types';
import LeaderBoardContainer from './LeaderBoardContainer';
import LeaderBoardRow from './LeaderBoardRow';

const LeaderboardCard = ({
  data,
  title,
  isSmallView,
}: {
  title: string;
  isSmallView: boolean;
  data: LeaderBoardUser[];
}) => {
  return (
    <VStack
      w="full"
      spacing="24px"
      justify="flex-start"
      borderRadius="28px"
      className={isSmallView ? '' : 'leaderBoard'}
    >
      <Text textStyle="bold7" pb="70px">
        {title}
      </Text>
      {data?.length > 0 && (
        <>
          <LeaderBoardContainer>
            {data?.slice(0, 3).map((item, index) => {
              return (
                <LeaderBoardRow
                  {...item}
                  showStar
                  key={index.toString()}
                  isSmallView={isSmallView}
                />
              );
            })}
          </LeaderBoardContainer>
          <LeaderBoardContainer>
            {data?.slice(3).map((item, index) => {
              return <LeaderBoardRow isSmallView={isSmallView} {...item} key={index.toString()} />;
            })}
          </LeaderBoardContainer>
        </>
      )}
      {!data || (data?.length < 1 && <Spinner h={20} w={20} />)}
    </VStack>
  );
};

export default LeaderboardCard;
