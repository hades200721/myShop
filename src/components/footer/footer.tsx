import React from 'react';
import {StyledFooterContainer, StyledFooterContent} from './style';

export const Footer = () => {
    return (
        <StyledFooterContainer>
            <StyledFooterContent>
                <div className="footer__service-wrap j-dropdown-footer">
                    <section className="footer__list-wrap footer__list-wrap--buyers">
                        <div className="footer__header-wrap j-dropdown-title">
                            <h2 className="footer__header">Покупателям</h2>
                            <button className="footer__btn-open" type="button">Открыть</button>
                        </div>
                    </section>
                </div>
            </StyledFooterContent>
        </StyledFooterContainer>
    );
}
