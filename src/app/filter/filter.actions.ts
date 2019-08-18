import { Action } from '@ngrx/store';

export const SET_FILTER = '[FILTER] Set Filter';

export type validFilters = 'all' | 'completed' | 'pending';

export class SetFilterAction implements Action {
  readonly type = SET_FILTER;
  constructor(public filter: validFilters) { }
}

export type FilterActions = SetFilterAction;
