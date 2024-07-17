import React, {useCallback} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {Cart} from './cart/cart';
import {Search} from './search';
import Logo from '../../assets/Framerlogo.svg';
import {StyledHeaderContainer, StyledHeaderContent, StyledLeftPart, StyledBtnGroup} from './style';
import {StyledButton} from '../pages/shop/body/style';
import {Icon} from '../common';


export const Header = () => {
    const navigate = useNavigate();

    const onLogoClickHandler = useCallback(() => {
        navigate('/');
    }, []);

    const onCartClickHandler = useCallback(() => {
        navigate('/cart');
    }, []);

    const onAccountClickHandler = useCallback(() => {
        navigate('/account');
    }, []);

    return (
        <StyledHeaderContainer>
            <StyledHeaderContent>
                <StyledLeftPart>
                        <Logo onClick={onLogoClickHandler} />
                        <Search />
                        <li>
                            <Link to="/lazy">Lazy</Link>
                        </li>
                        <li>
                            <Link to="/redirect">Redirect to Home</Link>
                        </li>
                        <li>
                            <Link to="/nothing-here">Nothing Here</Link>
                        </li>
                </StyledLeftPart>
                <StyledBtnGroup>
                    <Cart />
                    <StyledButton onClick={onAccountClickHandler} label={'account'}>
                        <Icon icon={faUser} size={"xl"} />
                    </StyledButton>
                </StyledBtnGroup>
            </StyledHeaderContent>
        </StyledHeaderContainer>
    );
}
