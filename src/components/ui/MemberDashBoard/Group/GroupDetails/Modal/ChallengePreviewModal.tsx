import {
  Box,
  Text,
  HStack,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  VStack,
  ModalCloseButton,
  Button,
  Image,
} from '@chakra-ui/react';
import React from 'react';
import { usePascalCase } from 'hooks';
import { Common, I } from '../../../../..';
import Images from '../../../../../../assets/images';
import { GetTimelineBlockRes } from '../../../../../../lib/impakt-dev-api-client/react-query/types/getTimelineBlockRes';
import { convertMsToHM, getTimeDifference } from '../../../../../../utils';
import ChallengePreviewItemCard from './ChallengeModalTabs/ChallengesCard/ChallengePreviewItemCard';
import { GetUserScoreResV1 } from '../../../../../../lib/impakt-dev-api-client/react-query/types/getUserScoreResV1';

interface ChallengeModalProps {
  open: boolean;
  close: () => void;
  challengePreview: {
    title: string;
    creator: string;
    deepLinkToPlay: string;
    likeCount: number;
    myRank: string;
    myBestScore: string;
    exercices: GetTimelineBlockRes[];
    validFrom: string;
    validUntil: string;
    leaderboard: GetUserScoreResV1[];
    playedTimes: number;
    playedMins: string | number;
  };
}
const ChallengePreviewModal: React.FC<ChallengeModalProps> = ({
  open,
  close,
  challengePreview,
}) => {
  const {
    creator,
    exercices,
    deepLinkToPlay,
    leaderboard,
    likeCount,
    myBestScore,
    myRank,
    validFrom,
    validUntil,
    title,
    playedTimes,
    playedMins,
  } = challengePreview;
  const { d, h, m } = getTimeDifference(validFrom, validUntil);
  const { convertToPascalCase } = usePascalCase();

  return (
    <Modal scrollBehavior="inside" isOpen={open} onClose={() => close()} isCentered>
      <ModalOverlay />
      <ModalContent
        backgroundColor="transparent"
        w={{ base: '92%', md: '100%' }}
        minW={{ base: '92%', md: '960px' }}
        mt="140px"
      >
        <ModalBody overflowY="auto" p="0">
          {/* MODAL BODY BANNER START HERE */}
          <VStack
            justifyContent="space-between"
            id="challenge-modal-banner-container"
            bg="#222430"
            borderRadius="32px 32px 0 0"
            p="24px"
            w="full"
            minH="240px"
            position="relative"
          >
            <Box
              top="0"
              bottom="0 !important"
              pos="absolute"
              right={{ md: '25%!important' }}
              display="flex"
            >
              <Image objectFit="cover" src={Images.group.challengeBanner} />
            </Box>
            <HStack justifyContent="space-between" w="full">
              <Box>
                <Button
                  borderRadius="80px"
                  p="8px 16px"
                  bg="rgba(0, 2, 10, 0.4)"
                  _hover={{ bg: 'rgba(0, 2, 10, 0.8)' }}
                  _focus={{ bg: '' }}
                  _active={{ bg: 'rgba(0, 2, 10, 0.8)' }}
                  _selected={{ bg: 'rgba(0, 2, 10, 0.8)' }}
                  autoFocus={false}
                  leftIcon={<I.HeartIcon width="18px " height="18px " color="#fff" />}
                >
                  <Text fontWeight="500" fontSize="18px" lineHeight="100%" color="#fff">
                    {likeCount}
                  </Text>
                </Button>
              </Box>
              <ModalCloseButton
                _hover={{ bg: 'rgba(0, 2, 10, 0.8)' }}
                _focus={{ bg: '' }}
                _active={{ bg: 'rgba(0, 2, 10, 0.8)' }}
                _selected={{ bg: 'rgba(0, 2, 10, 0.8)' }}
                autoFocus={false}
                background="rgba(0, 2, 10, 0.4)"
                color="#fff"
              />
            </HStack>
            <HStack flexWrap="wrap" rowGap="8px" justifyContent="space-between" w="full">
              <HStack zIndex="999">
                <Box
                  p="8px 4px"
                  textAlign="center"
                  minW="48px"
                  borderRadius="8px"
                  bg="rgba(0, 0, 0, 0.25)"
                >
                  <Text color="#FFFFFF" fontWeight="600" fontSize="32px" lineHeight="100%">
                    {d}
                  </Text>
                </Box>
                <Box
                  ml="2px !important"
                  color="#FFFFFF"
                  fontWeight="600"
                  fontSize="32px"
                  lineHeight="100%"
                  as="span"
                >
                  :
                </Box>
                <Box
                  minW="48px"
                  ml="2px !important"
                  textAlign="center"
                  p="8px 4px"
                  borderRadius="8px"
                  bg="rgba(0, 0, 0, 0.25)"
                >
                  <Text color="#FFFFFF" fontWeight="600" fontSize="32px" lineHeight="100%">
                    {h}
                  </Text>
                </Box>
                <Box
                  ml="2px !important"
                  color="#FFFFFF"
                  fontWeight="600"
                  fontSize="32px"
                  lineHeight="100%"
                  as="span"
                >
                  :
                </Box>
                <Box
                  textAlign="center"
                  p="8px 4px"
                  ml="2px !important"
                  minW="48px"
                  borderRadius="8px"
                  bg="rgba(0, 0, 0, 0.25)"
                >
                  <Text color="#FFFFFF" fontWeight="600" fontSize="32px" lineHeight="100%">
                    {m}
                  </Text>
                </Box>
              </HStack>
              <HStack ml="0 !important" columnGap="4px">
                <HStack
                  bg="rgba(0, 0, 0, 0.25)"
                  columnGap="12px"
                  padding="8px 16px 8px 8px"
                  borderRadius="8px"
                  backdropFilter="blur(20px)"
                  id="challenge-preview-score-box"
                  color="#fff"
                >
                  <Box id="">
                    <I.RankIcon />
                  </Box>
                  <VStack alignItems="flex-start">
                    <Text
                      fontWeight="600"
                      color="rgba(255, 255, 255, 0.75)"
                      fontSize="12px"
                      lineHeight="100%"
                      letterSpacing="1px"
                      id="score-label"
                    >
                      MY RANK
                    </Text>
                    <Text
                      color="#FFCC66"
                      fontWeight="500"
                      fontSize="18px"
                      lineHeight="100%"
                      id="score-text"
                    >
                      {myRank}
                    </Text>
                  </VStack>
                </HStack>
                <HStack
                  bg="rgba(0, 0, 0, 0.25)"
                  columnGap="12px"
                  padding="8px 16px 8px 8px"
                  borderRadius="8px"
                  backdropFilter="blur(20px)"
                  id="challenge-preview-score-box"
                  color="#fff"
                >
                  <Box id="">
                    <I.WinnerIcon color="#FFCC66" />
                  </Box>
                  <VStack alignItems="flex-start">
                    <Text
                      fontWeight="600"
                      color="#fff"
                      fontSize="12px"
                      lineHeight="100%"
                      letterSpacing="1px"
                      id="score-label"
                    >
                      MY BEST SCORE
                    </Text>
                    <Text
                      color="#FFCC66"
                      fontWeight="500"
                      fontSize="18px"
                      lineHeight="100%"
                      id="score-text"
                    >
                      {myBestScore}
                    </Text>
                  </VStack>
                </HStack>
              </HStack>
            </HStack>
          </VStack>
          {/* MODAL BODY BANNER END HERE */}
          {/* MODAL BODY HEADER START HERE */}
          <HStack
            bg="#fff"
            p="32px"
            id="challenge-preview-header-box"
            justifyContent="space-between"
          >
            <VStack rowGap="10px" alignItems="flex-start" id="challenge-preview-title-stack">
              <HStack pos="relative" id="challenge-preivew-box-title">
                <Text fontWeight="500" fontSize="32px" color="#29323B" lineHeight="100%">
                  {title}
                </Text>
                <Text
                  color="#CC4C33"
                  fontWeight="500"
                  fontSize="18px"
                  lineHeight="100%"
                  pos="relative"
                  bottom="-8px"
                >
                  by {creator}
                </Text>
              </HStack>
              <Box id="challenge-preview-box-details">
                <Text fontWeight="500" fontSize="18px" lineHeight="100%" color="#728BA3">
                  {playedTimes} plays • {playedMins} min
                </Text>
              </Box>
            </VStack>
            <HStack>
              <Common.ImpaktButton
                as="a"
                href={deepLinkToPlay}
                _hover={{ background: '' }}
                _selected={{ background: '' }}
                _focus={{ background: '' }}
                _active={{ background: '' }}
                leftIcon={<I.PlayChallengeIcon />}
                background="linear-gradient(90deg, #F04153 0%, #F27961 100%);"
                padding="12px 32px"
                borderRadius="12px"
                // onClick={()=>}
              >
                <Text fontWeight="600">Start</Text>
              </Common.ImpaktButton>
            </HStack>
          </HStack>
          {/* MODAL BODY HEADER END HERE */}
          {/* MODAL BODY CONTENT START HERE */}
          <HStack
            bg="#fff"
            id="challenge-preview-content-box"
            alignItems="flex-start"
            justifyContent="space-between"
          >
            <VStack
              borderTop="1px solid #D3E2F0"
              borderRight="1px solid #D3E2F0"
              p="32px"
              w="full"
              alignItems="flex-start"
              id="challenge-preview-content-left"
            >
              <VStack rowGap="24px" w="full" alignItems="flex-start" id="challenge-box">
                <Box>
                  <Text fontStyle="normal" fontWeight="500" fontSize="24px" lineHeight="100%">
                    {exercices.length} Exercices
                  </Text>
                </Box>
                <Box background="#F5F8FA" borderRadius="1em" w="full">
                  {exercices.map(({ Exercise, type }, index) => (
                    <ChallengePreviewItemCard
                      exerciseName={convertToPascalCase(Exercise?.name ?? '') ?? ''}
                      exerciseType={type}
                      lengthOfExercise={{
                        m: convertMsToHM(Exercise?.averageTime ?? 0).m,
                        s: convertMsToHM(Exercise?.averageTime ?? 0).s,
                      }}
                      borderBottom={index !== exercices.length - 1 ? '1px solid #D3E2F0' : '0'}
                      borderRadius="0"
                      background="transparent"
                    />
                  ))}
                </Box>
              </VStack>
            </VStack>

            <VStack
              ml="0 !important"
              p="32px"
              borderTop="1px solid #D3E2F0"
              w="full"
              alignItems="flex-start"
              id="challenge-preview-content-leaderboard"
            >
              <VStack rowGap="24px" w="full" alignItems="flex-start" id="challenge-box">
                <Box>
                  <Text fontStyle="normal" fontWeight="500" fontSize="24px" lineHeight="100%">
                    Leaderboard
                  </Text>
                </Box>
                <VStack w="full">
                  {leaderboard.length === 0 && <Text color="gray.300">No record yet...</Text>}
                  {leaderboard.map(({ userCount, username, userScore }) => (
                    <HStack
                      mt={userCount === 4 ? '16px !important' : '8px !important'}
                      w="full"
                      bg="rgba(242, 121, 97, 0.1);"
                      color={userCount === 1 ? '#CC4C33' : '#728BA3'}
                      p="1em"
                      borderRadius="8px"
                      id="leaderboard-item-container"
                      justifyContent="space-between"
                    >
                      <HStack>
                        {userCount === 1 && (
                          <Box id="leaderboard-item-icon">
                            <I.WinnerIcon color="#F27961" width="22.08px" height="21.6px" />
                          </Box>
                        )}
                        {userCount !== 1 && <Box id="leaderboard-item-icon" minW="22.08px" />}
                        <Box id="leaderboard-item-rank">
                          <Text fontWeight="500" fontSize="18px" lineHeight="100%">
                            {userCount}
                          </Text>
                        </Box>
                        <Box ml="16px !important" id="leaderboard-item-username">
                          <Text fontWeight="500" fontSize="18px" lineHeight="100%">
                            {username}
                          </Text>
                        </Box>
                      </HStack>

                      <HStack>
                        <Text fontWeight="500" fontSize="18px" lineHeight="100%">
                          {userScore}
                        </Text>
                      </HStack>
                    </HStack>
                  ))}
                </VStack>
              </VStack>
            </VStack>
          </HStack>
          {/* MODAL BODY CONTENT END HERE */}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ChallengePreviewModal;
