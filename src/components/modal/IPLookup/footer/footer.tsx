import React, {ChangeEvent, useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../../store/store';
import {AdditionalDataBuilder} from './additionalData/builder';
import {fetchIpAddress} from '../../../../api/ip';
import {IIP} from '../../../../interface';
import {
    LOADING_INCREASE,
    LOADING_DECREASE,
    UPDATE_IP_OBJECT,
    TIMER_INCREASE,
} from '../../../../store/actions';
import {checkIpAddress} from '../../../../utils/ip';
import {
    StyledFooterContainer,
    StyledSingleIp,
    StyledIndex,
    StyledInput,
} from './style';


export const Footer = React.memo(() => {
    const dispatch = useDispatch();
    const IPs = useSelector<RootState, IIP[]>((state) => state.ips);

    const updateStore = useCallback((index: number, propsToSet: object) => {
        dispatch({
            type: UPDATE_IP_OBJECT,
            payload: {
                index,
                ipToUpdate: {
                    ...IPs[index],
                    ...propsToSet,
                }
            },
        });
    }, [IPs, dispatch]);

    const onIPChangeHandler = useCallback((event: ChangeEvent<HTMLInputElement>, index: number) => {
        const ip = event?.target?.value;
        updateStore(index, {isValidIP: !!ip.length && checkIpAddress(ip), ip});
    }, [updateStore]);

    // TS2345: Argument of type FocusEvent<HTMLInputElement, Element> is not assignable to parameter of type FocusEventHandler<HTMLInputElement>
    const onBlurHandler = useCallback(async (target: HTMLInputElement, index: number) => {
        if (!IPs[index].isValidIP) {
            return true;
        }
        const ipAddress = target?.value;
        updateStore(index, {isLoading: true});
        dispatch({
            type: LOADING_INCREASE,
            payload: {},
        });
        await fetchIpAddress(ipAddress).then((response) => {
            updateStore(index, {data: response, isLoading: false});
            dispatch({
                type: TIMER_INCREASE,
                payload: {},
            });
        }).catch((errorCode: string) => {
            console.error(errorCode);
            updateStore(index, {isError: true, isLoading: false});
        }).finally(() => {
            dispatch({
                type: LOADING_DECREASE,
                payload: {},
            });
        });
    }, [IPs, dispatch, updateStore]);

    return (
        <StyledFooterContainer>
            {IPs.map((ip: IIP, index: number) => (
                <StyledSingleIp key={index}>
                    <StyledIndex>{(index + 1)}</StyledIndex>
                    <StyledInput
                        inValid={!ip.isValidIP && !!ip.ip.length}
                        placeholder={'IP (192.168.0.1)'}
                        value={ip.ip}
                        onBlur={e => onBlurHandler(e.target, index)}
                        onChange={e => onIPChangeHandler(e, index)}
                    />
                    {AdditionalDataBuilder.render(ip)}
                </StyledSingleIp>
            ))}
        </StyledFooterContainer>
    );
});
