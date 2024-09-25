import {useCallback, useEffect, useMemo} from 'react';
import {useLoaderData} from 'react-router-dom';
import {Product} from './product';
import {SortingProps} from '../sideBar/sorting/interface';
import {StyledBody} from './style';
import {IFilters, IProduct} from '../../../../interface';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../store/store';
import {debounce} from 'underscore';

export const Body = () => {
  const data = useLoaderData() as IProduct[];

  const globalFilters = useSelector<RootState, IFilters>((state) => state.global.filters);
  const sorting = useSelector<RootState, SortingProps>((state) => state.global.sorting);

  const productsListToRenderCallback = useMemo(() => {
    return data.map((product: IProduct) => <Product key={product.id} product={product}></Product>);
  }, [data]);


  const debouncedChangeHandler = useCallback(
    debounce((value: string) => {
      const iValue = value.toLowerCase();
      const filteredData = data.filter(
        (product: IProduct) =>
          product.title.toLowerCase().includes(iValue) || product.description.toLowerCase().includes(iValue));
    }, 300),
    [data],
  );

  useEffect(() => {
    debouncedChangeHandler(globalFilters['searchQuery']);
  }, [globalFilters]);

  useEffect(() => {
    const {value} = sorting;
    const sortedData = (value === 'title') ?
      data.sort((a, b) => b[value].localeCompare(a[value])) :
      data.sort((a, b) => a[value] - b[value]);
  }, [data]);

  return (
    <StyledBody>
      {productsListToRenderCallback}
    </StyledBody>
  );
};

