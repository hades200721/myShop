import React, {useCallback} from 'react';
import {useDispatch} from 'react-redux';
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
        <div onClick={onProductAddHandler}>{product.title}</div>
    );
}
