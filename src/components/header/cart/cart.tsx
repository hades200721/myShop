import React, {useCallback} from 'react';
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import {RootState} from '../../../store/store';
import {Icon} from '../../common';
import {StyledButton, StyledNotification} from '../../pages/shop/body/style';
import {IProduct} from '../../../interface';


export const CartBtn = () => {
    const navigate = useNavigate();
    const cartProducts = useSelector<RootState, IProduct[]>((state) => state.cart);

    const onCartClickHandler = useCallback(() => {
        navigate('/cart');
    }, []);

    return (
        <>
            <StyledButton onClick={onCartClickHandler} label={'cart'}>
                <Icon icon={faCartShopping} size={"xl"} />
                {!!cartProducts.length && <StyledNotification>{cartProducts.length}</StyledNotification>}
            </StyledButton>
        </>
    );
}
