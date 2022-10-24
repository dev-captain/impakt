/**
 * Generated by orval v6.10.2 🍺
 * Do not edit manually.
 * Impakt API
 * OpenAPI spec version: 1.0.0
 */
import { rest } from 'msw';
import { faker } from '@faker-js/faker';

export const getTimelineBlockSessionsControllerGetTimeBlockSessionsMock = () =>
  Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({
    id: faker.datatype.number({ min: undefined, max: undefined }),
    createdAt: `${faker.date.past().toISOString().split('.')[0]}Z`,
    updatedAt: `${faker.date.past().toISOString().split('.')[0]}Z`,
    completedAt: faker.helpers.arrayElement([
      faker.helpers.arrayElement([`${faker.date.past().toISOString().split('.')[0]}Z`, null]),
      undefined,
    ]),
    status: faker.helpers.arrayElement(['InProgress', 'Success', 'Failed', 'Skipped']),
    type: faker.helpers.arrayElement(['Rest', 'HoldPose', 'HIIT', 'Blitz', 'Rhythm']),
    communityId: faker.datatype.number({ min: undefined, max: undefined }),
    exerciseId: faker.datatype.number({ min: undefined, max: undefined }),
    routineId: faker.datatype.number({ min: undefined, max: undefined }),
    timelineBlockId: faker.datatype.number({ min: undefined, max: undefined }),
    userCount: faker.helpers.arrayElement([
      faker.datatype.number({ min: undefined, max: undefined }),
      null,
    ]),
    userTime: faker.helpers.arrayElement([
      faker.datatype.number({ min: undefined, max: undefined }),
      null,
    ]),
    xp: faker.datatype.number({ min: undefined, max: undefined }),
    godl: faker.datatype.number({ min: undefined, max: undefined }),
    userScore: faker.datatype.number({ min: undefined, max: undefined }),
    coin: faker.datatype.number({ min: undefined, max: undefined }),
  }));

export const getTimelineBlockSessionsControllerCreateMock = () => ({
  id: faker.datatype.number({ min: undefined, max: undefined }),
  createdAt: `${faker.date.past().toISOString().split('.')[0]}Z`,
  updatedAt: `${faker.date.past().toISOString().split('.')[0]}Z`,
  completedAt: faker.helpers.arrayElement([
    faker.helpers.arrayElement([`${faker.date.past().toISOString().split('.')[0]}Z`, null]),
    undefined,
  ]),
  status: faker.helpers.arrayElement(['InProgress', 'Success', 'Failed', 'Skipped']),
  type: faker.helpers.arrayElement(['Rest', 'HoldPose', 'HIIT', 'Blitz', 'Rhythm']),
  communityId: faker.datatype.number({ min: undefined, max: undefined }),
  exerciseId: faker.datatype.number({ min: undefined, max: undefined }),
  routineId: faker.datatype.number({ min: undefined, max: undefined }),
  timelineBlockId: faker.datatype.number({ min: undefined, max: undefined }),
  userCount: faker.helpers.arrayElement([
    faker.datatype.number({ min: undefined, max: undefined }),
    null,
  ]),
  userTime: faker.helpers.arrayElement([
    faker.datatype.number({ min: undefined, max: undefined }),
    null,
  ]),
  xp: faker.datatype.number({ min: undefined, max: undefined }),
  godl: faker.datatype.number({ min: undefined, max: undefined }),
  userScore: faker.datatype.number({ min: undefined, max: undefined }),
  coin: faker.datatype.number({ min: undefined, max: undefined }),
});

export const getTimelineBlockSessionsControllerPatchOneMock = () => ({
  id: faker.datatype.number({ min: undefined, max: undefined }),
  createdAt: `${faker.date.past().toISOString().split('.')[0]}Z`,
  updatedAt: `${faker.date.past().toISOString().split('.')[0]}Z`,
  completedAt: faker.helpers.arrayElement([
    faker.helpers.arrayElement([`${faker.date.past().toISOString().split('.')[0]}Z`, null]),
    undefined,
  ]),
  status: faker.helpers.arrayElement(['InProgress', 'Success', 'Failed', 'Skipped']),
  type: faker.helpers.arrayElement(['Rest', 'HoldPose', 'HIIT', 'Blitz', 'Rhythm']),
  communityId: faker.datatype.number({ min: undefined, max: undefined }),
  exerciseId: faker.datatype.number({ min: undefined, max: undefined }),
  routineId: faker.datatype.number({ min: undefined, max: undefined }),
  timelineBlockId: faker.datatype.number({ min: undefined, max: undefined }),
  userCount: faker.helpers.arrayElement([
    faker.datatype.number({ min: undefined, max: undefined }),
    null,
  ]),
  userTime: faker.helpers.arrayElement([
    faker.datatype.number({ min: undefined, max: undefined }),
    null,
  ]),
  xp: faker.datatype.number({ min: undefined, max: undefined }),
  godl: faker.datatype.number({ min: undefined, max: undefined }),
  userScore: faker.datatype.number({ min: undefined, max: undefined }),
  coin: faker.datatype.number({ min: undefined, max: undefined }),
});

export const getTimelineBlocksSessionsMSW = () => [
  rest.get('*/api/v1/fitness/timeline-block-sessions', (_req, res, ctx) => {
    return res(
      ctx.delay(1000),
      ctx.status(200, 'Mocked status'),
      ctx.json(getTimelineBlockSessionsControllerGetTimeBlockSessionsMock()),
    );
  }),
  rest.post('*/api/v1/fitness/timeline-block-sessions', (_req, res, ctx) => {
    return res(
      ctx.delay(1000),
      ctx.status(200, 'Mocked status'),
      ctx.json(getTimelineBlockSessionsControllerCreateMock()),
    );
  }),
  rest.patch('*/api/v1/fitness/timeline-block-sessions/:id', (_req, res, ctx) => {
    return res(
      ctx.delay(1000),
      ctx.status(200, 'Mocked status'),
      ctx.json(getTimelineBlockSessionsControllerPatchOneMock()),
    );
  }),
];
