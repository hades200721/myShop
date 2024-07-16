import React, {useCallback} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {faCartShopping, faUser} from '@fortawesome/free-solid-svg-icons';
import {Search} from './search';
import {StyledHeaderContainer, StyledHeaderContent, StyledLeftPart, StyledBtnGroup} from './style';
import {StyledButton} from '../pages/shop/body/style';
import {Icon} from '../common';


export const Header = () => {
    const navigate = useNavigate();

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
                        <li>
                            <Link to="/">Home</Link>
                        </li>
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
                    <StyledButton onClick={onCartClickHandler}>
                        <Icon icon={faCartShopping}/>
                    </StyledButton>

                    <StyledButton onClick={onAccountClickHandler}>
                        <Icon icon={faUser}/>
                    </StyledButton>
                </StyledBtnGroup>
            </StyledHeaderContent>
        </StyledHeaderContainer>
    );
}
