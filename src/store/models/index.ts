import { Models } from '@rematch/core';
import knowledgeBase from './knowledgeBase';

export interface RootModel extends Models<RootModel> {
  knowledgeBase: typeof knowledgeBase;
}
export const models: RootModel = { knowledgeBase };
