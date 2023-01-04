import { VStack, FormLabel, HStack, Button, Input, Box, Text } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as React from 'react';
import { Day } from 'dayspan';
import { Common } from '@/components';
import { useForm } from '@/hooks';
import { InputErrorMessage } from '../../common';
import createChallengeYupScheme from '../../../lib/yup/schemas/createChallengeYupScheme';
import { usePersistedChallengeStore } from '../../../lib/zustand';
import { renderToast } from '../../../utils';
import { useChallengesControllerCreateOne } from '../../../lib/impakt-dev-api-client/react-query/challenges/challenges';
import { GetRoutineRes } from '../../../lib/impakt-dev-api-client/react-query/types/getRoutineRes';

interface CreateChallengeFormPropsI {
  previewRoutine: GetRoutineRes | null;
  cb?: () => void;
}
export const createChallengeFormName = 'create-challenge-form';

export const CreateChallengeForm: React.FC<CreateChallengeFormPropsI> = ({
  children,
  previewRoutine,
  cb,
}) => {
  const { availableGroupChallenges, setAvailableGroupChallenges } = usePersistedChallengeStore();
  const createChallenge = useChallengesControllerCreateOne();

  const handleSubmitCreateChallenge = async () => {
    if (!challengeCreateForm.isValid && !challengeCreateForm.isDirty) {
      await challengeCreateForm.trigger('challengeName');
      await challengeCreateForm.trigger('assocDuration');

      return;
    }
    if (!previewRoutine) return;

    const validFrom = Day.now();
    const validUntil = validFrom?.add('day', challengeCreateForm.getValues('assocDuration'));
    createChallenge.mutate(
      {
        data: {
          name: challengeCreateForm.getValues('challengeName'),
          routineId: previewRoutine.id,
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
              Routine: previewRoutine,
              likes: 0,
            },
            ...availableGroupChallenges,
          ]);
          challengeCreateForm.reset({ assocDuration: 1, challengeName: '' });
          if (cb) {
            cb();
          }
        },
        onError: (err) => {
          renderToast('error', err.response?.data.message ?? 'Something went wrong...', 'white');
        },
      },
    );
  };

  const challengeCreateForm = useForm({
    defaultValues: {
      challengeName: '',
      assocDuration: 1,
    },
    resolver: yupResolver(createChallengeYupScheme),
  });

  return (
    <VStack
      as="form"
      onSubmit={challengeCreateForm.handleSubmit(handleSubmitCreateChallenge)}
      mt="36px"
      rowGap="24px"
      id={createChallengeFormName}
    >
      <Common.InputGroup
        inputProps={{
          onChange: (e) => {
            challengeCreateForm.setValue('challengeName', e.target.value, {
              shouldValidate: true,
            });
          },
          name: 'challengeName',
          placeholder: 'Best Challenge',
          value: challengeCreateForm.getValues('challengeName'),
        }}
        inputLabelProps={{ label: 'Challenge Name' }}
        errorMsg={challengeCreateForm.errors.challengeName?.message}
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
        {children}
      </VStack>
      <VStack w="full" alignItems="flex-start" justifyContent="flex-start" id="duration-container">
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
          <InputErrorMessage errorMsg={challengeCreateForm.errors.assocDuration?.message} />
        </Box>
        <HStack>
          {[1, 3, 7, 14, 30].map((value) => (
            <Button
              _focus={{ border: 0 }}
              key={`button-${value}`}
              minW="48px"
              padding="8px"
              bgColor="#EEF4F6"
              borderRadius="8px"
              value={value}
              type="button"
              onClick={(e) => {
                challengeCreateForm.setValue('assocDuration', Number(e.currentTarget.value), {
                  shouldValidate: true,
                });
              }}
            >
              {value}
            </Button>
          ))}
        </HStack>
      </VStack>
    </VStack>
  );
};
