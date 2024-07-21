import {useCallback, useEffect, useMemo, useState} from 'react';
import {useLoaderData} from 'react-router-dom';
import {Product} from './product';
import {StyledBody} from './style';
import {IFilters, IProduct} from '../../../../interface';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../store/store';
import {debounce} from 'underscore';

export const Body = () => {
    const data = useLoaderData() as IProduct[];
    const globalFilters = useSelector<RootState, IFilters>((state) => state.global.filters);

    const [productsListToRender, setProductsListToRender] = useState(<></>);

    const productsListToRenderCallback = useCallback(data => {
        const productToR = data.map((product: IProduct) => <Product key={product.id} product={product}></Product>);
        setProductsListToRender(productToR);
    }, []);


    const debouncedChangeHandler = useCallback(
      debounce((value) => {
          const iValue = value.toLowerCase();
          const filteredData = data.filter(
            (product: IProduct) =>
              product.title.toLowerCase().includes(iValue) || product.description.toLowerCase().includes(iValue));
          console.log(`run search on: ${value}`);
          productsListToRenderCallback(filteredData);
      }, 300),
      [data]
    );

    useEffect(() => {
        debouncedChangeHandler(globalFilters.searchQuery);
    }, [globalFilters]);

    return (
        <StyledBody>
            {productsListToRender}
        </StyledBody>
    );
}

