import React, {memo, useState, useEffect, useCallback} from 'react';
import io from 'socket.io-client';
import {jwtDecode} from 'jwt-decode';
import {StyledHeaderContainer, StyledBodyContainer, StyledFooterContainer} from './style';

export const Messenger = memo(({token, onLogoutHandler}) => {
    const [messages, setMessages] = useState([]);
    const [usersNumber, setUsersNumber] = useState(0);
    const [input, setInput] = useState('');
    const [socket, setSocket] = useState(null);
    const [userName, setUserName] = useState(undefined);

    useEffect(() => {
        console.log('socket ' + socket);
        console.log('token ' + token);

        try {
            const decoded = jwtDecode(token);
            setUserName(decoded.username);
        } catch (err) {
            console.error('Error decoding token:', err);
            setUserName(undefined);
        }

        const socketInstance = io('http://localhost:3000', {
            transports: ['websocket'],
            auth: {
                token: `Bearer ${token}`,
            },
        });

        socketInstance.on('connect', () => {
            const helloMessage = `Hello ${userName}!`;
            setMessages((prevMessages) => [...prevMessages, helloMessage]);
        });
        socketInstance.on('usersOnline', (usersNumberToSet) => {
            setUsersNumber(usersNumberToSet);
        });
        socketInstance.on('messageToClient', (userName, message) => {
            const newMessageToSet = `${userName}: ${message}`;
            setMessages((prevMessages) => [...prevMessages, newMessageToSet]);
        });

        setSocket(socketInstance);

        return () => {
            socketInstance.disconnect();
        };
    }, [token, userName]);

    const sendMessage = useCallback(() => {
        if (socket) {
            socket.emit('messageToServer', input);
            setInput('');
        }
    }, [input, socket]);

    const onChangeHandler = useCallback((e) => {
        setInput(e.target.value)
    }, []);

    const onKeyUpHandler = useCallback((e) => {
        if (e.key === 'Enter' && sendMessage()) {
            sendMessage();
        }
    }, [sendMessage]);

    return (
        <>
            <StyledHeaderContainer>
                <span>Users online: {usersNumber}</span>
                <button onClick={onLogoutHandler}>Logout</button>
            </StyledHeaderContainer>

            <StyledBodyContainer>
                {messages.map((msg, index) => (
                    <div key={index}>{msg}</div>
                ))}
            </StyledBodyContainer>
            <StyledFooterContainer>
                <input
                    value={input}
                    onChange={onChangeHandler}
                    onKeyUp={onKeyUpHandler}
                />
                <button onClick={sendMessage}>Send</button>
            </StyledFooterContainer>
        </>
    );
});
