import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../store/store';
import {IProduct} from '../../../../interface';
import {
    StyledFooterContainer,
    StyledSingleIp,
    StyledIndex,
} from './style';


export const Header = React.memo(() => {
    const products = useSelector<RootState, IProduct[]>((state) => state.products);

    return (
        <StyledFooterContainer>
            {products.map((product: IProduct, index: number) => (
                <StyledSingleIp key={index}>
                    <StyledIndex>{(index + 1)}</StyledIndex>
                </StyledSingleIp>
            ))}
        </StyledFooterContainer>
    );
});
