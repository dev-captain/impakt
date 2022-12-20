/* eslint-disable no-nested-ternary */
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
import { isAndroid } from 'react-device-detect';
import { useNavigate } from 'react-router-dom';

import { Common, I } from '../../../../..';
import Images from '../../../../../../assets/images';
import { GetTimelineBlockRes } from '../../../../../../lib/impakt-dev-api-client/react-query/types/getTimelineBlockRes';
import ChallengePreviewItemCard from './ChallengeModalTabs/ChallengesCard/ChallengePreviewItemCard';
import { GetUserScoreResV1 } from '../../../../../../lib/impakt-dev-api-client/react-query/types/getUserScoreResV1';

interface ActionPreviewModalProps {
  open: boolean;
  close: () => void;
  actionPreview: {
    title: string;
    creator?: string;
    deepLinkToPlay?: string;
    likeCount?: number;
    myRank?: string;
    myBestScore?: string;
    exercices: GetTimelineBlockRes[];
    leaderboard: GetUserScoreResV1[];
    subtitle: string;
    playedMins: string | number;
    mode?: 'join' | 'start';
    validUntil: string;
    isPlayedByMember?: boolean;
    isEdit?: boolean;
    editButtonClick?: () => void;
    bannerImg?: string;
    modalStatus?: 'starting' | 'finished' | 'pending';
  };
}

const ActionPreviewModal: React.FC<ActionPreviewModalProps> = ({ open, close, actionPreview }) => {
  const {
    creator,
    exercices,
    deepLinkToPlay,
    leaderboard,
    likeCount,
    myBestScore,
    myRank,
    title,
    subtitle,
    playedMins,
    mode,
    isEdit,
    editButtonClick,
    validUntil,
    bannerImg,
    isPlayedByMember,
    modalStatus,
  } = actionPreview;

  const [status, setStatus] = React.useState<'starting' | 'finished' | 'pending'>(
    modalStatus ?? 'pending',
  );

  const navigate = useNavigate();
  const { convertToPascalCase } = usePascalCase();
  const link = () => {
    if (mode === 'start' && deepLinkToPlay) {
      return deepLinkToPlay;
    }
    if (mode === 'join' && status === 'starting' && deepLinkToPlay) {
      return deepLinkToPlay;
    }

    return undefined;
  };

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
              <Image objectFit="cover" src={bannerImg ?? Images.group.challengeBanner} />
              {isPlayedByMember && (
                <Box position="absolute" left="25%" bottom="-40%">
                  <I.LaurelIcon />
                </Box>
              )}
            </Box>
            <HStack
              justifyContent={likeCount !== undefined ? 'space-between' : 'flex-end'}
              w="full"
            >
              {likeCount !== undefined && (
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
              )}
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
                <Common.CountDownTimer
                  finishCb={() => setStatus('finished')}
                  last15MinutesCb={() => setStatus('starting')}
                  isWhite
                  validUntil={validUntil}
                />
                {/* <Box
                  p="8px 4px"
                  textAlign="center"
                  minW="48px"
                  borderRadius="8px"
                  bg="rgba(0, 0, 0, 0.25)"
                >
                  <Text color="#FFFFFF" fontWeight="600" fontSize="32px" lineHeight="100%">
                    {timer.d}
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
                    {timer.h}
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
                    {timer.m}
                  </Text>
                </Box> */}
              </HStack>
              <HStack ml="0 !important" columnGap="4px">
                {myRank && (
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
                )}
                {myBestScore && (
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
                )}
              </HStack>
            </HStack>
          </VStack>
          {/* MODAL BODY BANNER END HERE */}
          {/* MODAL BODY HEADER START HERE */}
          <HStack
            bg="#fff"
            p={{ base: '1em', md: '2em' }}
            id="challenge-preview-header-box"
            justifyContent="space-between"
            flexWrap="wrap"
            rowGap="1em"
          >
            <VStack rowGap="10px" alignItems="flex-start" id="challenge-preview-title-stack">
              <HStack
                flexWrap="wrap"
                align={{ base: 'flex-start', md: 'baseline' }}
                pos="relative"
                rowGap="0.5em"
                columnGap="0.5em"
                id="challenge-preivew-box-title"
              >
                <Text fontWeight="500" fontSize="32px" color="#29323B" lineHeight="100%">
                  {title}
                </Text>
                {creator && (
                  <Text
                    ml="0 !important"
                    color="#CC4C33"
                    fontWeight="500"
                    fontSize="18px"
                    lineHeight="100%"
                    pos="relative"
                  >
                    by {creator}
                  </Text>
                )}
              </HStack>
              <Box id="challenge-preview-box-details">
                <Text fontWeight="500" fontSize="18px" lineHeight="100%" color="#728BA3">
                  {subtitle} • {playedMins} min
                </Text>
              </Box>
            </VStack>
            <HStack ml="0 !important">
              <Common.ImpaktButton
                as="a"
                onClick={(e) => {
                  e.preventDefault();
                  if (!link()) return;

                  if (isAndroid) {
                    window.location =
                      `intent://scan/#Intent;scheme=${link()};S.browser_fallback_url=https://play.google.com/store/apps/details?id=com.impakt.fitness;end` as any;

                    setTimeout(() => {
                      window.location =
                        'https://play.google.com/store/apps/details?id=com.impakt.fitness' as any;
                    }, 1500);

                    return;
                  }

                  window.location = link() as any;

                  setTimeout(() => {
                    navigate('/download');
                  }, 1000);
                }}
                href={link()}
                _hover={{ background: '' }}
                _selected={{ background: '' }}
                _focus={{ background: '' }}
                _active={{ background: '' }}
                leftIcon={
                  status !== 'finished' || mode === 'start' ? <I.PlayChallengeIcon /> : undefined
                }
                disabled={(status === 'finished' || status === 'pending') && mode === 'join'}
                variant={
                  mode === 'start'
                    ? 'orange-black'
                    : status === 'finished' || status === 'pending'
                    ? 'white-50'
                    : 'orange-black'
                }
                padding="12px 32px"
                borderRadius="12px"
                // onClick={()=>}
              >
                <Text fontWeight="600">
                  {mode === 'start' ? 'Start' : status === 'finished' ? 'Event passed' : 'Join'}
                </Text>
              </Common.ImpaktButton>

              {isEdit && status !== 'finished' && (
                <Common.ImpaktButton
                  onClick={editButtonClick}
                  variant="white-50"
                  fontSize="40px"
                  width="40px"
                  h="40px"
                  padding="8px"
                  aria-label="update-top-challenge"
                >
                  <I.PenIcon />
                </Common.ImpaktButton>
              )}
            </HStack>
          </HStack>
          {/* MODAL BODY HEADER END HERE */}
          {/* MODAL BODY CONTENT START HERE */}
          <HStack
            bg="#fff"
            id="challenge-preview-content-box"
            alignItems="flex-start"
            justifyContent="space-between"
            flexWrap={{ base: 'wrap-reverse', md: 'nowrap' }}
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
                    {exercices.length} Exercises
                  </Text>
                </Box>
                <Box background="#F5F8FA" borderRadius="1em" w="full">
                  {exercices.map(({ id, Exercise, type, TimelineBlockAttributes }, index) => (
                    <ChallengePreviewItemCard
                      key={id}
                      exerciseName={convertToPascalCase(Exercise?.name ?? '') ?? ''}
                      exerciseType={type}
                      timeLineBlockType={TimelineBlockAttributes[0]?.type}
                      timeLineBlockValue={TimelineBlockAttributes[0]?.value}
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
              borderTop="1px solid #D3E2F0"
              w="full"
              alignItems="flex-start"
              id="challenge-preview-content-leaderboard"
            >
              {status === 'pending' && mode === 'join' && (
                <VStack p="32px" w="full" borderBottom="1px solid #D3E2F0">
                  <HStack
                    columnGap="1em"
                    spacing="0"
                    borderRadius="1em"
                    p="1em"
                    w="full"
                    bg="softOrange"
                  >
                    <Box color="nextOrange">
                      <I.TooltipIcon />
                    </Box>
                    <Box>
                      <Text color="darkOrange" textStyle="regular18" lineHeight="26px">
                        Lobby will open 15 minutes before the event starts
                      </Text>
                    </Box>
                  </HStack>
                </VStack>
              )}
              <VStack p="32px" rowGap="24px" w="full" alignItems="flex-start" id="challenge-box">
                <Box>
                  <Text fontStyle="normal" fontWeight="500" fontSize="24px" lineHeight="100%">
                    Leaderboard
                  </Text>
                </Box>
                <VStack w="full">
                  {leaderboard.length === 0 && <Text color="gray.300">No record yet...</Text>}
                  {leaderboard.map(({ id, username, userScore }, index) => (
                    <HStack
                      key={id}
                      // eslint-disable-next-line no-nested-ternary
                      mt={index === 0 ? '0' : index === 3 ? '16px !important' : '8px !important'}
                      w="full"
                      bg={index === 0 ? 'rgba(242, 121, 97, 0.1);' : '#F5F8FA'}
                      color={index === 0 ? '#CC4C33' : '#728BA3'}
                      p="1em"
                      borderRadius="8px"
                      id="leaderboard-item-container"
                      justifyContent="space-between"
                    >
                      <HStack>
                        {index === 0 && (
                          <Box id="leaderboard-item-icon">
                            <I.WinnerIcon color="#F27961" width="22.08px" height="21.6px" />
                          </Box>
                        )}
                        {index !== 0 && <Box id="leaderboard-item-icon" minW="22.08px" />}
                        <Box id="leaderboard-item-rank">
                          <Text
                            color={index === 0 ? 'rgba(204, 76, 51, 1)' : '#728BA3'}
                            fontWeight="500"
                            fontSize="18px"
                            lineHeight="100%"
                          >
                            {index + 1}
                          </Text>
                        </Box>
                        <Box ml="16px !important" id="leaderboard-item-username">
                          <Text
                            color={index === 0 ? 'rgba(204, 76, 51, 1)' : '#29323B'}
                            fontWeight="500"
                            fontSize="18px"
                            lineHeight="100%"
                          >
                            {username}
                          </Text>
                        </Box>
                      </HStack>

                      <HStack>
                        <Text
                          color={index === 0 ? 'rgba(204, 76, 51, 1)' : '#728BA3'}
                          fontWeight="500"
                          fontSize="18px"
                          lineHeight="100%"
                        >
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

export default ActionPreviewModal;
