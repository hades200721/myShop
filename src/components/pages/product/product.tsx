import React from 'react';
import {useLoaderData} from 'react-router-dom';
import {fetchProduct} from '../../../api/product';
import {Product as SingleProduct} from '../shop/body/product';
import {StyledLayout} from './style';
import {IProduct} from '../../../interface';

export const Product = () => {
  const data = useLoaderData() as IProduct;

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

