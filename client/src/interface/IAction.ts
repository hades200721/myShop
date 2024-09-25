import {IProduct} from './IProduct';
import {SortingProps} from '../components/pages/shop/sideBar/sorting/interface';

export interface IAction {
  type: string;
  payload: unknown;
}

export interface IProductAction {
  type: string;
  payload: IProduct;
}

interface filterI {
  id: string;
  value: string;
}

export interface IFilterChangeAction {
  type: string;
  payload: filterI;
}

export interface ISortingChangeAction {
  type: string;
  payload: SortingProps;
}
