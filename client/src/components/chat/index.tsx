import {useCallback, useState} from 'react';
import {Messenger} from './messenger/messenger';
import {LoginForm} from './login/login';
import {StyledChatContainer} from './style';

export const Chat = () => {
  const [token, setToken] = useState(localStorage.getItem('authToken'));
  const onSetToken = useCallback(tokenToSet => {
    localStorage.setItem('authToken', tokenToSet);
    setToken(tokenToSet);
  }, []);

  const onLogoutHandler = useCallback(() => {
    localStorage.removeItem('authToken');
    setToken(undefined);
  }, []);
  return (
    <StyledChatContainer>
      {token ?
        <Messenger token={token} onLogoutHandler={onLogoutHandler} />:
        <LoginForm setToken={onSetToken} />
      }
    </StyledChatContainer>
  );
};
