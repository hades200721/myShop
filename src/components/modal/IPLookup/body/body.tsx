import {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ADD_IP} from '../../../../store/actions';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {RootState} from '../../../../store/store';
import {Icon, Text as StyledInstruction} from '../../../common';
import {StyledBody, StyledButton} from './style';
import {INSTRUCTION_TXT} from './constants';

export const Body = () => {
    const dispatch = useDispatch();
    const inLoadingProcess = useSelector<RootState, number>((state) => state.counter.loading);

    const onAddIpHandler = useCallback(() => {
         dispatch({
            type: ADD_IP,
            payload: false,
        });
    }, []);

    return (
        <StyledBody>
            <StyledInstruction text={INSTRUCTION_TXT} />
            <StyledButton disabled={inLoadingProcess > 0} label={'Add'} onClick={onAddIpHandler}>
                <Icon icon={faPlus} />
            </StyledButton>
        </StyledBody>
    );
}

