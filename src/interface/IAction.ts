import {IIP} from './IIP';

export interface IAction {
  type: string;
  payload: unknown;
}

export interface IIPAction {
  type: string;
  payload: {
    index: number;
    ipToUpdate: IIP;
  };
}
