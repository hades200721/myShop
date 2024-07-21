import {useCallback} from 'react';
import {useNavigate} from 'react-router-dom';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {CartBtn} from './cart/cart';
import {Search} from './search';
import {StyledHeaderContainer, StyledHeaderContent, StyledTitle} from './style';
import {StyledButton} from '../pages/shop/body/style';
import {Icon} from '../common';
import {APP_NAME} from '../../constants';


export const Header = () => {
  const navigate = useNavigate();

  const onLogoClickHandler = useCallback(() => {
    navigate('/');
  }, []);

  const onAccountClickHandler = useCallback(() => {
    navigate('/account');
  }, []);

  return (
    <StyledHeaderContainer>
      <StyledHeaderContent>
        <StyledTitle onClick={onLogoClickHandler}>{APP_NAME}</StyledTitle>
        <Search />
        <CartBtn />
        <StyledButton onClick={onAccountClickHandler} label={'account'}>
          <Icon icon={faUser} size={'xl'} />
        </StyledButton>
      </StyledHeaderContent>
    </StyledHeaderContainer>
  );
};
