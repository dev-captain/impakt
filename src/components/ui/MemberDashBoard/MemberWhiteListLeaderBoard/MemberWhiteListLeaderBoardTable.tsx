import * as React from 'react';
import { TableContainer, Table, Tr, Tbody, Td, Thead, Th, useMediaQuery } from '@chakra-ui/react';

interface MemberWhiteListLeaderBoardTablePropsI {
  data: any[];
  showTableHead?: boolean;
  currentUserRank: number;
}

const MemberWhiteListLeaderBoardTable: React.FC<MemberWhiteListLeaderBoardTablePropsI> = ({
  data,
  showTableHead,
  currentUserRank,
}) => {
  const [isLessThan1200] = useMediaQuery('(max-width: 1200px)');

  return (
    <TableContainer
      overflowY="auto"
      overflowX={isLessThan1200 ? 'scroll' : 'hidden'}
      maxH="522px"
      css={{
        '&::-webkit-scrollbar': {
          width: '7px !important',
        },
        '&::-webkit-scrollbar-track': {
          width: '6px !important',
          background: '#0B1725',
          borderRadius: '185px',
        },
        '&::-webkit-scrollbar-thumb': {
          width: '6px !important',
          background: 'rgba(255, 255, 255, 0.3)',
          borderRadius: '185px',
        },
      }}
      borderRadius="30px"
      w="full"
    >
      <Table
        css={{
          tableLayout: 'fixed',
        }}
        variant="unstyled"
      >
        {showTableHead && (
          <Thead backgroundColor="#121D2D">
            <Tr
              css={{
                fontSize: '20px !important',
                lineHeight: '30px !important',
              }}
              fontWeight="600"
              color="rgba(255, 255, 255, 0.5)"
            >
              <Th w="133px !important" paddingLeft="30px !important" fontSize="initial !important">
                Place
              </Th>
              <Th
                w={isLessThan1200 ? '177px !important' : '296px !important'}
                paddingLeft="30px !important"
                minW="177px !important"
                fontSize="initial !important"
              >
                Member
              </Th>
              {!isLessThan1200 && (
                <Th
                  w="177px !important"
                  paddingLeft="25px !important"
                  fontSize="initial !important"
                >
                  Personal score
                </Th>
              )}
              {!isLessThan1200 && (
                <Th
                  w="177px !important"
                  paddingLeft="30px !important"
                  fontSize="initial !important"
                >
                  Referrals
                </Th>
              )}

              {!isLessThan1200 && (
                <Th w="177px !important" paddingLeft="5px !important" fontSize="initial !important">
                  Referrals score
                </Th>
              )}
              <Th w="177px !important" paddingLeft="10px !important" fontSize="initial !important">
                Total Score
              </Th>
            </Tr>
          </Thead>
        )}
        <Tbody color="rgba(255, 255, 255, 0.7)">
          {data.map(({ username, rank, referralCount, referralScore, userScore }) => (
            <Tr
              key={rank}
              backgroundColor={rank % 2 === 0 ? '#182638' : '#1B2C3F'}
              fontSize="14px"
              fontWeight="500"
              paddingTop="21px !important"
              paddingLeft="30px !important"
            >
              <Td
                fontWeight="500"
                color={
                  rank === currentUserRank
                    ? 'rgba(254, 196, 23, 1) !important'
                    : 'rgba(255, 255, 255, 0.7) !important'
                }
                w="133px !important"
                paddingTop="21px !important"
                paddingLeft="30px !important"
              >
                #{rank}
              </Td>
              <Td
                fontWeight="500"
                w={isLessThan1200 ? '177px !important' : '296px !important'}
                color={
                  rank === currentUserRank
                    ? 'rgba(254, 196, 23, 1) !important'
                    : 'rgba(255, 255, 255, 0.7) !important'
                }
                paddingTop="21px !important"
                paddingLeft="30px !important"
              >
                {username}
              </Td>

              {!isLessThan1200 && (
                <Td
                  w="177px !important"
                  color={
                    rank === currentUserRank
                      ? 'rgba(254, 196, 23, 1) !important'
                      : 'rgba(255, 255, 255, 0.5) !important'
                  }
                  fontWeight="500"
                  paddingTop="21px !important"
                  paddingLeft="30px !important"
                >
                  {userScore}
                </Td>
              )}

              {!isLessThan1200 && (
                <Td
                  color={
                    rank === currentUserRank
                      ? 'rgba(254, 196, 23, 1) !important'
                      : 'rgba(255, 255, 255, 0.5) !important'
                  }
                  fontWeight="500"
                  w="177px !important"
                  paddingTop="21px !important"
                  paddingLeft="30px !important"
                >
                  {referralCount}
                </Td>
              )}

              {!isLessThan1200 && (
                <Td
                  color={
                    rank === currentUserRank
                      ? 'rgba(254, 196, 23, 1) !important'
                      : 'rgba(255, 255, 255, 0.5) !important'
                  }
                  w="177px !important"
                  fontWeight="500"
                  paddingLeft="16px !important"
                >
                  {referralScore}
                </Td>
              )}
              <Td
                color={
                  rank === currentUserRank
                    ? 'rgba(254, 196, 23, 1) !important'
                    : 'rgba(240, 65, 83, 1) !important'
                }
                fontWeight="600"
                w="177px !important"
                paddingLeft="16px !important"
              >
                {userScore + referralScore}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default MemberWhiteListLeaderBoardTable;
