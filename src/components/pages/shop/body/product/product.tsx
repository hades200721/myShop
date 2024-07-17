import React, {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {Url} from './url';
import {Description} from "./description";
import {Image} from './image';
import {Title} from './title';
import {StyledProductContainer} from './style';
import {IProduct} from '../../../../../interface';
import {ADD_PRODUCT} from '../../../../../store/actions';

interface IProductProps {
    product: IProduct,
}

export const Product: React.FC<IProductProps> = ({product}) => {
    const dispatch = useDispatch();

    const onProductAddHandler = useCallback(() => {
        dispatch({
            type: ADD_PRODUCT,
            payload: product,
        });
    }, []);

    return (
        <StyledProductContainer onClick={onProductAddHandler}>
            <Image description={product.title} thumbnailUrl={product.thumbnail} />
            <Title title={product.title} />
            <Description title={product.description} />
            <Url url={product.title} />
        </StyledProductContainer>
    );
}
