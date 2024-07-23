import React, {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {useLocation, useNavigate} from 'react-router-dom';
import {Cta} from './cta';
import {Description} from './description';
import {Image} from './image';
import {Price} from './price';
import {Title} from './title';
import {StyledProductContainer} from './style';
import {IProduct} from '../../../../../interface';
import {ADD_PRODUCT} from '../../../../../store/actions';

interface IProductProps {
  key?: number;
  product: IProduct,
}

export const Product: React.FC<IProductProps> = ({product}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {search} = useLocation();


  const onProductClickHandler = useCallback((productId: number) => {
    navigate(`/product/${productId}${search}`);
  }, [product]);

  const onCtaClickHandler = useCallback(() => {
    dispatch({
      type: ADD_PRODUCT,
      payload: product,
    });
  }, []);

  return (
    <StyledProductContainer onClick={() => onProductClickHandler(product.id)}>
      <Image description={product.title} thumbnailUrl={product.thumbnail} />
      <Price price={product.price} />
      <Title title={product.title} />
      <Description title={product.description} />
      <Cta onClick={onCtaClickHandler} />
    </StyledProductContainer>
  );
};
