import {useMemo} from 'react';
import {useSelector} from 'react-redux';
import {useLoaderData} from 'react-router-dom';
import {Product} from './product';
import {isKeyOf} from '../../../../utils/global';
import {SortingProps} from '../sideBar/sorting/interface';
import {StyledBody} from './style';
import {IFilters, IProduct} from '../../../../interface';
import {RootState} from '../../../../store/store';

const filterDataByFilter = (filteredData: Array<IProduct>, filterKey: string, filterValue: any) => {
  switch (filterKey) {
    case 'range': {
      const min = filterValue.min ?? Number.MIN_SAFE_INTEGER;
      const max = filterValue.max ?? Number.MAX_SAFE_INTEGER;
      return filteredData.filter((item: IProduct) => item.price >= min && item.price <= max);
    }
    default:
      return filteredData.filter((item: IProduct) => filterValue.includes(item[filterKey as keyof IProduct]));
  }
}

const sortData = (value: 'title' | 'price' | 'id', data: Array<IProduct>) => {
  return (value === 'title') ?
    data.sort((a, b) => b[value].localeCompare(a[value])) :
    data.sort((a, b) => a[value] - b[value]);
}

export const Body = () => {
  const data = useLoaderData() as IProduct[];

  const globalFilters = useSelector<RootState, IFilters>((state) => state.global.filters);
  const sorting = useSelector<RootState, SortingProps>((state) => state.global.sorting);

  const productsListToRenderCallback = useMemo(() => {
    const filterKeys = Object.keys(globalFilters);
    let filteredData = [...data];
    filterKeys.forEach((filterKey: string) => {
      if (isKeyOf(filterKey, data[0])) {
        filteredData = filterDataByFilter(filteredData, filterKey, globalFilters[filterKey])
      }
    });
    const sortedFilteredData = sortData(sorting.value, filteredData);
    return sortedFilteredData.map((product: IProduct) => <Product key={product.id} product={product}></Product>);
  }, [data, globalFilters, sorting]);

  return (
    <StyledBody>
      {productsListToRenderCallback}
    </StyledBody>
  );
};

