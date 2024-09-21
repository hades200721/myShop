export interface IAction {
  type: string;
  payload: unknown;
}

interface filterI {
  id: string;
  value: string;
}

export interface IFilterChangeAction {
  type: string;
  payload: filterI;
}
