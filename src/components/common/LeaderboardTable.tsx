import { StarIcon } from '@chakra-ui/icons';
import {
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Tfoot,
  Text,
  HStack,
  Box,
} from '@chakra-ui/react';
import * as React from 'react';

interface LeaderboardTableProps {
  titles: string[];
  contents: { place: string; member: string; community: string; score: string }[];
}

const LeaderboardTable: React.FC<LeaderboardTableProps> = ({ titles, contents }) => {
  return (
    <TableContainer borderRadius="1em">
      <Table variant="unstyled">
        {titles.length > 0 && (
          <Thead bgColor="rgba(14, 14, 17, 1)">
            <Tr color="rgba(255, 255, 255, 0.4)" h="64px">
              {titles.map((title) => (
                <Th
                  fontSize="18px"
                  fontWeight="600"
                  lineHeight="16px"
                  textTransform="capitalize"
                  key={title}
                >
                  {title}
                </Th>
              ))}
            </Tr>
          </Thead>
        )}
        {contents.length > 0 && (
          <Tbody>
            {contents.map(({ place, member, community, score }, index) => (
              <Tr
                bgColor={(index + 1) % 2 === 0 ? '#20202E !important' : '#1C1C28 !important'}
                color={getColor(index)}
                h="64px"
                key={`leaderboard-table-row-${place}`}
                fontWeight="500"
                fontSize="18px"
                lineHeight="16px"
              >
                <Td>
                  <Text display="inline-block" opacity="0.5">
                    #
                  </Text>
                  <Text display="inline-block">{place}</Text>
                </Td>
                <Td>
                  <HStack w="full" alignItems="baseline" pos="relative">
                    {index <= 2 && (
                      <Box
                        pos="absolute"
                        left="-3em"
                        ml="0 !important"
                        w="min-content"
                        color={getColor(index)}
                      >
                        <StarIcon />
                      </Box>
                    )}
                    <Box ml="0 !important">
                      <Text>{member}</Text>
                    </Box>
                  </HStack>
                </Td>
                <Td>{community}</Td>
                <Td>{score}</Td>
              </Tr>
            ))}
          </Tbody>
        )}
      </Table>
    </TableContainer>
  );
};
const getColor = (index: number) => {
  if (index + 1 === 1) {
    return 'gold';
  }

  if (index + 1 === 2) {
    return 'rgba(176, 200, 232, 1)';
  }

  if (index + 1 === 3) {
    return 'rgba(240, 153, 65, 1)';
  }

  return 'rgba(255, 255, 255, 0.75)';
};
export default LeaderboardTable;
