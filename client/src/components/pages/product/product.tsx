import React, {useEffect} from 'react';
import {useLoaderData, useLocation} from 'react-router-dom';
import {fetchProduct} from '../../../api/product';
import {Product as SingleProduct} from '../shop/body/product';
import {StyledLayout} from './style';
import {IProduct} from '../../../interface';

export const Product = () => {
  const data = useLoaderData() as IProduct;
  const location = useLocation();

  useEffect(() => {
    console.log(`11111111111111 ${location.search}`);
  }, [location.search]);

  return (
    <StyledLayout>
      <SingleProduct product={data} />
    </StyledLayout>
  );
};

export async function productLoader({params}) {
  const {id} = params;
  return await fetchProduct(Number(id)).then((response) => {
    return response;
  }).catch((response) => {
    return response;
  });
}

