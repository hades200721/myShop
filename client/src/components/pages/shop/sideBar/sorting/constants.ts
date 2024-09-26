import {SortingProps} from './interface';

export const SORT_TITLE = 'Sort';


export const SORTING_OPTIONS: Array<SortingProps> = [
  { value: 'price', label: 'Price' },
  { value: 'title', label: 'Name' },
  { value: 'id', label: 'Popularity' }
];

export const SORTING_DEFAULT_VALUE = SORTING_OPTIONS[0];
