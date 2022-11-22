import {
  Box,
  Text,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  VStack,
  HStack,
  ModalFooter,
  Button,
  Input,
  FormLabel,
} from '@chakra-ui/react';
import { Common } from 'components';
import React from 'react';
import { useForm, usePascalCase } from 'hooks';
import { Day } from 'dayspan';
import { AddIcon } from '@chakra-ui/icons';
import { yupResolver } from '@hookform/resolvers/yup';

import {
  // ChallengeTab,
  ChallengeTabs,
} from '../../../../../../data';
import { usePersistedAuthStore, usePersistedChallengeStore } from '../../../../../../lib/zustand';
import ChallengesCard from './ChallengeModalTabs/ChallengesCard/ChallengesCard';
import ChallengeModalHeader from './ChallengeModalTabs/ChallengeModalHeader';
// import ChallengeModalTabTitleText from './ChallengeModalTabs/ChallengeModalTabTitleText';
import ChallengesCardScoreLabelsWrapper from './ChallengeModalTabs/ChallengesCard/ChallengesCardScoreLabelsWrapper';
import ChallengePreviewItemCard from './ChallengeModalTabs/ChallengesCard/ChallengePreviewItemCard';
import ChallengeCardMetaLabel from './ChallengeModalTabs/ChallengesCard/ChallengeCardMetaLabel';
import { convertMsToHM, getTimeDifference, renderToast } from '../../../../../../utils';
import RoutineCard from './ChallengeModalTabs/RoutineCard/RoutineCard';
import { GetRoutineRes } from '../../../../../../lib/impakt-dev-api-client/react-query/types/getRoutineRes';
import { useChallengesControllerCreateOne } from '../../../../../../lib/impakt-dev-api-client/react-query/challenges/challenges';
import { GetChallengeRes } from '../../../../../../lib/impakt-dev-api-client/react-query/types/getChallengeRes';
import createChallengeYupScheme from '../../../../../../lib/yup/schemas/createChallengeYupScheme';
import { InputErrorMessage } from '../../../../../common';

interface ChallengeModalProps {
  open: boolean;
  close: () => void;
  setActiveChallenge: (activeChallenge: GetChallengeRes) => void;
}
type ChallengeModalScreens =
  | 'select'
  | 'preview'
  | 'create'
  | 'preview-routine'
  | 'create-challenge-form';

const ChallengeModal: React.FC<ChallengeModalProps> = ({ open, close, setActiveChallenge }) => {
  const createChallenge = useChallengesControllerCreateOne();
  const challengeCreateForm = useForm({
    defaultValues: {
      assocName: '',
      assocDuration: 1,
    },
    resolver: yupResolver(createChallengeYupScheme),
  });

  const { member } = usePersistedAuthStore();
  const { convertToPascalCase } = usePascalCase();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  const [activeTab, _] = React.useState<ChallengeTabs>('routine');
  const [activeScreen, setActiveScreen] = React.useState<ChallengeModalScreens[]>(['select']);
  const [previewChallenge, setPreviewChallenge] = React.useState<GetChallengeRes | null>(null);
  const [previewRouitine, setRoutinePreview] = React.useState<GetRoutineRes | null>(null);

  const { availableGroupChallenges, availableGroupRoutines, setAvailableGroupChallenges } =
    usePersistedChallengeStore();
  const currentScreen = activeScreen[activeScreen.length - 1];

  const moveToNextScreen = (newScreen: ChallengeModalScreens) => {
    setActiveScreen((prev) => [...prev, newScreen]);
  };

  const moveBackToPreviousScreen = () => {
    if (activeScreen.length > 1) {
      const shallow = [...activeScreen];
      shallow.pop();
      setActiveScreen(shallow);
    }
  };
  const moveToFirstScreenAndDeleteHistory = () => {
    setActiveScreen(['select']);
  };

  const handleSubmitCreateChallenge = async () => {
    if (!challengeCreateForm.isValid && !challengeCreateForm.isDirty) {
      await challengeCreateForm.trigger('assocName');
      await challengeCreateForm.trigger('assocDuration');

      return;
    }
    if (!previewRouitine) return;

    const validFrom = Day.now();
    const validUntil = validFrom?.add('day', challengeCreateForm.getValues('assocDuration'));
    createChallenge.mutate(
      {
        data: {
          name: challengeCreateForm.getValues('assocName'),
          routineId: previewRouitine.id,
          validFrom: validFrom.toISOString(),
          validUntil: validUntil?.toISOString(),
        },
      },
      {
        onSuccess: (newChallenge) => {
          renderToast('success', 'Challenge is created successfully.', 'white');
          setAvailableGroupChallenges([
            {
              ...newChallenge,
              Routine: previewRouitine,
              likes: 0,
            },
            ...availableGroupChallenges,
          ]);
          challengeCreateForm.reset({ assocDuration: 1, assocName: '' });
          moveToFirstScreenAndDeleteHistory();
        },
        onError: (err) => {
          renderToast('error', err.response?.data.message ?? 'Something went wrong...', 'white');
        },
      },
    );
  };

  return (
    <Modal isOpen={open} scrollBehavior="inside" onClose={() => close()} isCentered>
      <ModalOverlay />
      <ModalContent
        w={{ base: '92%', md: '100%' }}
        minW={{ base: '92%', md: '720px' }}
        mt="140px"
        borderRadius="32px"
        padding={{ base: '14px', md: '32px' }}
      >
        <ChallengeModalHeader
          goBackOnClick={() => moveBackToPreviousScreen()}
          showGoBackIcon={activeScreen.length > 1}
          currentScreen={currentScreen}
          previewHeaderText={previewChallenge?.name ?? ''}
          createPreviewHeaderText={previewRouitine?.name ?? ''}
        >
          <ModalCloseButton
            onClick={close}
            color="#728BA3"
            position="initial"
            fontSize="18px"
            _focus={{ boxShadow: 'none' }}
          />
        </ChallengeModalHeader>

        {/* <Box position="relative" w="100%" display={{ base: 'block', md: 'none' }}>
          <Input
            mt="20px"
            placeholder="Search"
            background="#EEF4F6"
            border="0"
            _focus={{ border: '0' }}
            borderRadius="12px"
            mr="24px"
            pl="48px"
            w="100%"
          />
          <I.SearchIcon position="absolute" top="25px" left="18px" width="24px" color="#29323B" />
        </Box> */}
        <ModalBody overflowX="hidden" p="0">
          {/* MODAL BODY HEADER START HERE */}
          {(currentScreen === 'select' || currentScreen === 'create') && (
            <VStack alignItems="flex-start" mt="24px" mb="24px" rowGap="24px" padding="4px">
              {currentScreen !== 'create' && (
                <HStack w="full" justifyContent="flex-end">
                  <Box minW="148px">
                    <Common.ImpaktButton
                      onClick={() => {
                        moveToNextScreen('create');
                      }}
                      _hover={{ background: '' }}
                      _selected={{ background: '' }}
                      _focus={{ background: '' }}
                      _active={{ background: '' }}
                      background="linear-gradient(90deg, #F04153 0%, #F27961 100%);"
                      leftIcon={<AddIcon fontSize="10px" />}
                    >
                      Create
                    </Common.ImpaktButton>
                  </Box>
                </HStack>
              )}
              {currentScreen === 'create' && (
                <HStack w="full" justifyContent="flex-start">
                  <Text fontWeight="400" fontSize="18px" lineHeight="26px" color="#29323B">
                    What would you like to challenge your members with?
                  </Text>
                </HStack>
              )}
              {/* <HStack
                borderRadius="12px"
                // minW="248px"
                // w="25%"
                p="4px"
                bg="#EEF4F6"
              >
                {ChallengeTab.map((tab, index) => (
                  <ChallengeModalTabTitleText
                    // eslint-disable-next-line react/no-array-index-key
                    key={index}
                    onClick={() => {
                      setActiveTab(tab);
                    }}
                    isSelected={activeTab === tab}
                    title={tab.charAt(0).toUpperCase() + tab.slice(1)}
                  />
                ))}
              </HStack> */}
            </VStack>
          )}

          {(currentScreen === 'preview' || currentScreen === 'preview-routine') &&
            activeTab === 'routine' &&
            (previewChallenge || previewRouitine) && (
              <HStack pl="0.5em" mt="24px" mb="24px" w="full" justifyContent="space-between">
                <Box>
                  <Text
                    fontWeight="500"
                    color="fitnessGrayMinus1"
                    letterSpacing="-0.01em"
                    fontSize="24px"
                    lineHeight="100%"
                  >
                    {(currentScreen === 'preview' &&
                      previewChallenge?.Routine.TimelineBlocks?.length) ??
                      0}
                    {(currentScreen === 'preview-routine' &&
                      previewRouitine?.TimelineBlocks?.length) ??
                      0}{' '}
                    Exercises
                  </Text>
                </Box>

                <Box>
                  <ChallengesCardScoreLabelsWrapper
                    estimationTimeScore={`${Math.ceil(
                      currentScreen === 'preview'
                        ? previewChallenge!.Routine.estimatedTime / 60
                        : previewRouitine!.estimatedTime / 60,
                    )} min`}
                    likeScore={
                      currentScreen === 'preview' ? previewChallenge?.likes ?? undefined : undefined
                    }
                  />
                </Box>
              </HStack>
            )}
          {/* MODAL BODY HEADER END HERE */}
          {/* MODAL BODY CONTENT START HERE */}
          <Box
            height="530px"
            overflowY="auto"
            overflowX="hidden"
            paddingRight="8px"
            css={{
              '&::-webkit-scrollbar': {
                width: '4px',
              },
              '&::-webkit-scrollbar-track': {
                width: '6px',
              },
              '&::-webkit-scrollbar-thumb': {
                visibility: 'initial',
                width: '10px',
                background: '#D3E2F0',
                borderRadius: '24px',
              },
            }}
          >
            {currentScreen === 'select' &&
              activeTab === 'routine' &&
              availableGroupChallenges.map((challengeI) => (
                <ChallengesCard key={challengeI.id} challenge={challengeI}>
                  <Common.ImpaktButton
                    onClick={() => {
                      setPreviewChallenge(challengeI);
                      moveToNextScreen('preview');
                    }}
                    variant="transparent"
                    w="114px !important"
                    backgroundColor="#EEF4F6"
                    colorScheme="#fff"
                    h="38px"
                    borderRadius="8px"
                    type="submit"
                    fontSize={{ base: '14px', md: '16px' }}
                    fontWeight="700"
                  >
                    <Text>Preview</Text>
                  </Common.ImpaktButton>
                  <Common.ImpaktButton
                    onClick={() => {
                      // setActiveGroupChallenge(challenge);
                      setActiveChallenge(challengeI);
                      close();
                    }}
                    variant="black"
                    w="114px !important"
                    colorScheme="#fff"
                    h="38px"
                    backgroundColor="#29323B"
                    borderRadius="8px"
                    type="submit"
                    fontSize={{ base: '14px', md: '16px' }}
                    fontWeight="700"
                  >
                    <Text>Select</Text>
                  </Common.ImpaktButton>
                </ChallengesCard>
              ))}
            {currentScreen === 'preview' && activeTab === 'routine' && previewChallenge && (
              <VStack rowGap="24px" pl="0.5em" justifyContent="flex-start" alignItems="flex-start">
                <VStack w="full" id="exercise-card-item-s" justifyContent="space-between">
                  {previewChallenge.Routine.TimelineBlocks?.map((exercise) => (
                    <ChallengePreviewItemCard
                      key={exercise.id}
                      exerciseName={convertToPascalCase(exercise.Exercise?.name ?? '') ?? ''}
                      lengthOfExercise={{
                        m: convertMsToHM(exercise.Exercise?.averageTime ?? 0).m,
                        s: convertMsToHM(exercise.Exercise?.averageTime ?? 0).s,
                      }}
                      exerciseType={exercise.type}
                    />
                  ))}
                </VStack>
              </VStack>
            )}
            {currentScreen === 'create' && activeTab === 'routine' && (
              <VStack rowGap="24px" pl="0.5em" justifyContent="flex-start" alignItems="flex-start">
                <VStack w="full" id="exercise-card-item-s" justifyContent="flex-start">
                  {availableGroupRoutines.map((routine) => (
                    <RoutineCard key={routine.id} routine={routine}>
                      <Common.ImpaktButton
                        onClick={() => {
                          setRoutinePreview(routine);
                          moveToNextScreen('preview-routine');
                        }}
                        variant="transparent"
                        w="114px !important"
                        backgroundColor="#EEF4F6"
                        colorScheme="#fff"
                        h="38px"
                        borderRadius="8px"
                        type="submit"
                        fontSize={{ base: '14px', md: '16px' }}
                        fontWeight="700"
                      >
                        <Text>Preview</Text>
                      </Common.ImpaktButton>
                      <Common.ImpaktButton
                        onClick={() => {
                          setRoutinePreview(routine);
                          moveToNextScreen('create-challenge-form');
                        }}
                        variant="black"
                        w="114px !important"
                        colorScheme="#fff"
                        h="38px"
                        backgroundColor="#29323B"
                        borderRadius="8px"
                        type="submit"
                        fontSize={{ base: '14px', md: '16px' }}
                        fontWeight="700"
                      >
                        <Text>Select</Text>
                      </Common.ImpaktButton>
                    </RoutineCard>
                  ))}
                </VStack>
              </VStack>
            )}
            {currentScreen === 'preview-routine' && activeTab === 'routine' && previewRouitine && (
              <VStack rowGap="24px" pl="0.5em" justifyContent="flex-start" alignItems="flex-start">
                <VStack w="full" id="exercise-card-item-s" justifyContent="space-between">
                  {previewRouitine.TimelineBlocks?.map((exercise) => (
                    <ChallengePreviewItemCard
                      key={exercise.id}
                      exerciseName={convertToPascalCase(exercise.Exercise?.name ?? '') ?? ''}
                      lengthOfExercise={{
                        m: convertMsToHM(exercise.Exercise?.averageTime ?? 0).m,
                        s: convertMsToHM(exercise.Exercise?.averageTime ?? 0).s,
                      }}
                      exerciseType={exercise.type}
                    />
                  ))}
                </VStack>
              </VStack>
            )}

            {currentScreen === 'create-challenge-form' &&
              activeTab === 'routine' &&
              previewRouitine && (
                <VStack mt="36px" rowGap="24px" id="create-challenge-form-container">
                  <Common.InputGroup
                    onChange={(e) => {
                      challengeCreateForm.setValue('assocName', e.target.value, {
                        shouldValidate: true,
                      });
                    }}
                    errorMsg={challengeCreateForm.errors.assocName?.message}
                    name="assocName"
                    label="Challenge Name"
                    placeholder="Best Challenge"
                    value={challengeCreateForm.getValues('assocName')}
                    whiteMode
                  />
                  <VStack w="full" alignItems="flex-start">
                    <FormLabel
                      mb="0 !important"
                      lineHeight="120%"
                      color="rgba(78, 96, 112, 1)"
                      textStyle="semiBold6"
                    >
                      Selected Routine:
                    </FormLabel>
                    <RoutineCard routine={previewRouitine}>
                      <Common.ImpaktButton
                        onClick={() => {
                          moveToNextScreen('preview-routine');
                        }}
                        variant="transparent"
                        w="114px !important"
                        backgroundColor="#EEF4F6"
                        colorScheme="#fff"
                        h="38px"
                        borderRadius="8px"
                        type="submit"
                        fontSize={{ base: '14px', md: '16px' }}
                        fontWeight="700"
                      >
                        <Text>Preview</Text>
                      </Common.ImpaktButton>
                      <Common.ImpaktButton
                        onClick={() => {
                          setRoutinePreview(null);
                          moveToNextScreen('create');
                        }}
                        variant="black"
                        w="114px !important"
                        colorScheme="#fff"
                        h="38px"
                        backgroundColor="#29323B"
                        borderRadius="8px"
                        type="submit"
                        fontSize={{ base: '14px', md: '16px' }}
                        fontWeight="700"
                      >
                        <Text>Replace</Text>
                      </Common.ImpaktButton>
                    </RoutineCard>
                  </VStack>
                  <VStack
                    w="full"
                    alignItems="flex-start"
                    justifyContent="flex-start"
                    id="duration-container"
                  >
                    <FormLabel
                      mb="0 !important"
                      lineHeight="120%"
                      color="rgba(78, 96, 112, 1)"
                      textStyle="semiBold6"
                    >
                      Duration (days):
                    </FormLabel>
                    <HStack
                      bgColor="#F5F8FA"
                      padding="16px 10px"
                      display="flex"
                      border="1px solid #D3E2F0"
                      borderRadius="12px"
                      maxH="60px"
                      justifyContent="space-between"
                    >
                      <Button
                        background="rgba(242, 121, 97, 0.1)"
                        padding="8px"
                        disabled={challengeCreateForm.watch('assocDuration') <= 1}
                        onClick={() => {
                          if (challengeCreateForm.getValues('assocDuration') !== 1) {
                            challengeCreateForm.setValue(
                              'assocDuration',
                              challengeCreateForm.getValues('assocDuration') - 1,
                              { shouldValidate: true },
                            );
                          }
                        }}
                      >
                        <Text fontWeight="500" fontSize="20px" color="#CC4C33">
                          -
                        </Text>
                      </Button>
                      <Input
                        id="assocDuration"
                        name="assocDuration"
                        value={challengeCreateForm.watch('assocDuration')}
                        _focus={{ border: 0 }}
                        style={{ border: 0, textAlign: 'center', maxWidth: '155px' }}
                      />
                      <Button
                        color="#CC4C33"
                        background="rgba(242, 121, 97, 0.1)"
                        padding="8px"
                        disabled={challengeCreateForm.watch('assocDuration') >= 30}
                        onClick={() => {
                          if (challengeCreateForm.getValues('assocDuration') !== 30) {
                            challengeCreateForm.setValue(
                              'assocDuration',
                              challengeCreateForm.getValues('assocDuration') + 1,
                              { shouldValidate: true },
                            );
                          }
                        }}
                      >
                        <Text fontWeight="500" fontSize="20px" color="#CC4C33">
                          +
                        </Text>
                      </Button>
                    </HStack>
                    <Box>
                      <InputErrorMessage
                        errorMsg={challengeCreateForm.errors.assocDuration?.message}
                      />
                    </Box>
                    <HStack>
                      {[1, 3, 7, 14, 30].map((value) => (
                        <Button
                          _focus={{ border: 0 }}
                          minW="48px"
                          padding="8px"
                          bgColor="#EEF4F6"
                          borderRadius="8px"
                          value={value}
                          type="button"
                          onClick={(e) => {
                            challengeCreateForm.setValue(
                              'assocDuration',
                              Number(e.currentTarget.value),
                              { shouldValidate: true },
                            );
                          }}
                        >
                          {value}
                        </Button>
                      ))}
                    </HStack>
                  </VStack>
                </VStack>
              )}
          </Box>
          {/* MODAL BODY CONTENT END HERE */}
        </ModalBody>

        <ModalFooter
          mb="0 !important"
          px="0 !important"
          pb="0 !important"
          justifyContent="flex-start"
        >
          {/* MODAL FOOTER START HERE */}
          {currentScreen === 'preview' && activeTab === 'routine' && previewChallenge && (
            <HStack w="full" justifyContent="space-between">
              <Box>
                <ChallengeCardMetaLabel
                  creatorName={member?.firstName ?? member?.username ?? ''}
                  times={getTimeDifference(
                    previewChallenge.validFrom,
                    previewChallenge.validUntil ?? '',
                  )}
                />
              </Box>
              <Box>
                <Common.ImpaktButton
                  onClick={() => {
                    // setActiveGroupChallenge(challenge);
                    setActiveChallenge(previewChallenge);
                    close();
                  }}
                  variant="black"
                  w="159px !important"
                  colorScheme="#fff"
                  h="64px"
                  backgroundColor="#29323B"
                  borderRadius="1em"
                  type="submit"
                  fontSize={{ base: '14px', md: '16px' }}
                  fontWeight="700"
                >
                  <Text>Select</Text>
                </Common.ImpaktButton>
              </Box>
            </HStack>
          )}

          {currentScreen === 'create' && activeTab === 'routine' && (
            <HStack
              padding="1em"
              w="full"
              justifyContent="space-between"
              background="rgba(242, 121, 97, 0.1)"
              borderRadius="16px"
            >
              <Box>
                <Text fontWeight="400" fontSize="18px" lineHeight="26px" color="#CC4C33">
                  Create your own routines in our app
                </Text>
              </Box>
              <Box>
                <Common.ImpaktButton
                  _hover={{ background: '' }}
                  _selected={{ background: '' }}
                  _focus={{ background: '' }}
                  _active={{ background: '' }}
                  background="linear-gradient(90deg, #F04153 0%, #F27961 100%);"
                >
                  Open App
                </Common.ImpaktButton>
              </Box>
            </HStack>
          )}

          {currentScreen === 'preview-routine' && activeTab === 'routine' && previewRouitine && (
            <HStack w="full" justifyContent="flex-end">
              <Box>
                <Common.ImpaktButton
                  id="select-routine-button"
                  onClick={() => {
                    // setActiveGroupChallenge(challenge);
                    // setAssocName(previewChallenge.challenge.name);
                    // setAssocId(previewChallenge.challenge.id);
                    moveToNextScreen('create-challenge-form');
                  }}
                  variant="black"
                  w="159px !important"
                  colorScheme="#fff"
                  h="64px"
                  backgroundColor="#29323B"
                  borderRadius="1em"
                  type="submit"
                  fontSize={{ base: '14px', md: '16px' }}
                  fontWeight="700"
                >
                  <Text>Select</Text>
                </Common.ImpaktButton>
              </Box>
            </HStack>
          )}

          {currentScreen === 'create-challenge-form' && activeTab === 'routine' && previewRouitine && (
            <HStack w="full" justifyContent="flex-end">
              <Box>
                <Common.ImpaktButton
                  as="form"
                  isLoading={createChallenge.isLoading}
                  isDisabled={createChallenge.isLoading}
                  _hover={{ background: '' }}
                  _selected={{ background: '' }}
                  _focus={{ background: '' }}
                  _active={{ background: '' }}
                  type="submit"
                  background="linear-gradient(90deg, #F04153 0%, #F27961 100%);"
                  padding="16px 48px"
                  h="64px"
                  borderRadius="16px"
                  onClick={() => {
                    handleSubmitCreateChallenge();
                  }}
                >
                  <Text fontWeight="600">Create</Text>
                </Common.ImpaktButton>
              </Box>
            </HStack>
          )}

          {/* MODAL FOOTER END HERE */}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ChallengeModal;
