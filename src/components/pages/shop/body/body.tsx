import {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ADD_PRODUCT} from '../../../../store/actions';
import {StyledBody, StyledButton} from './style';
import {IProduct} from "../../../../interface";

const RANDOM_PRODUCT: IProduct = {
    description: 'what ever goes here',
    title: 'EasyFeed automatic feeder for fish',
    price: 24,
    productId: 1111,
    thumbnail: '',
}

export const Body = () => {
    const dispatch = useDispatch();

    const onProductAddHandler = useCallback(() => {
         dispatch({
            type: ADD_PRODUCT,
            payload: RANDOM_PRODUCT,
        });
    }, []);

    return (
        <StyledBody>
            <StyledButton label={'Add random product hardcoded'} onClick={onProductAddHandler} />
        </StyledBody>
    );
}

