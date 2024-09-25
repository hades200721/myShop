import {SortingProps} from '../components/pages/shop/sideBar/sorting/interface';

export interface IGlobal {
  filters: IFilters;
  sorting: SortingProps;
}

export interface IFilters {
  [key: string]: any;
}
