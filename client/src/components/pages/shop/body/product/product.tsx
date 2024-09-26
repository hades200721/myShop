import React, {BaseSyntheticEvent, useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {useLocation, useNavigate} from 'react-router-dom';
import {Cta} from './cta';
// import {Description} from './description';
import {Image} from './image';
import {Price} from './price';
import {Rating} from './rating';
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
    navigate(`/item/${productId}${search}`);
  }, [product]);

  const onCtaClickHandler = useCallback((e: BaseSyntheticEvent) => {
    dispatch({
      type: ADD_PRODUCT,
      payload: product,
    });
    e.stopPropagation();
  }, []);

  return (
    <StyledProductContainer onClick={() => onProductClickHandler(product.id)}>
      <Image description={product.title} thumbnailUrl={product.image} />
      <Price price={product.price} />
      <Title title={product.title} />
      {/*<Description title={product.description} />*/}
      <Rating {...product.rating} />
      <Cta onClick={onCtaClickHandler} />
    </StyledProductContainer>
  );
};
