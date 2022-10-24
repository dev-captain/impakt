/**
 * Generated by orval v6.10.2 🍺
 * Do not edit manually.
 * Impakt API
 * OpenAPI spec version: 1.0.0
 */
import { rest } from 'msw';
import { faker } from '@faker-js/faker';

export const getXpHistoryControllerV1GetHistoryByUserIdMock = () => ({
  count: faker.datatype.number({ min: undefined, max: undefined }),
  value: faker.datatype.number({ min: undefined, max: undefined }),
  data: Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(
    () => ({
      purpose: faker.helpers.arrayElement([
        'Transfer',
        'ChallengeReward',
        'ChallengeCreatorReward',
        'TimelineBlock',
        'Referral',
        'SignUp',
        'AdminReward',
        'DailyReward',
      ]),
      timestamp: `${faker.date.past().toISOString().split('.')[0]}Z`,
      value: faker.datatype.number({ min: undefined, max: undefined }),
    }),
  ),
});

export const getXpMSW = () => [
  rest.get('*/api/v1/xp/history/:userId', (_req, res, ctx) => {
    return res(
      ctx.delay(1000),
      ctx.status(200, 'Mocked status'),
      ctx.json(getXpHistoryControllerV1GetHistoryByUserIdMock()),
    );
  }),
];
