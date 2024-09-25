import {useEffect} from 'react';
import {LoaderFunctionArgs, useLoaderData, useLocation} from 'react-router-dom';
import {fetchProduct} from '../../../api/product';
import {Product as SingleProduct} from '../shop/body/product';
import {StyledLayout} from './style';
import {IProduct} from '../../../interface';

export const Item = () => {
  const data = useLoaderData() as IProduct;
  const location = useLocation();

  useEffect(() => {
  }, [location.search]);

  return (
    <StyledLayout>
      <SingleProduct product={data} />
    </StyledLayout>
  );
};

export async function productLoader(args: LoaderFunctionArgs<any>) {
  const {id} = args.params;
  return await fetchProduct(Number(id)).then((response) => {
    return response;
  }).catch((response) => {
    return response;
  });
}

