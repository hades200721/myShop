import React from 'react';
import {StyledHeaderContainer, StyledHeaderContent} from './style';

export const Footer = () => {
    return (
        <StyledHeaderContainer>
            <StyledHeaderContent>
                <div className="footer__service-wrap j-dropdown-footer">
                    <section className="footer__list-wrap footer__list-wrap--buyers">
                        <div className="footer__header-wrap j-dropdown-title">
                            <h2 className="footer__header">Покупателям</h2>
                            <button className="footer__btn-open" type="button">Открыть</button>
                        </div>
                        <ul className="footer__list footer__list--dropdown">
                            <li className="footer__item j-wba-footer-item" data-wba-footer-name="Questions"><a
                                rel="nofollow" href="/services/voprosy-i-otvety">Вопросы и ответы</a></li>
                            <li className="footer__item j-wba-footer-item dropdown" data-wba-footer-name="Legal">
                                <div className="dropdown__item">
                                    <input className="dropdown__item-checkbox hide" id="hd-1" type="checkbox"/>
                                    <label htmlFor="hd-1">Юридическая информация</label>
                                    <div className="dropdown__item-content">
                                        <div className="footer__item"><a rel="nofollow"
                                                                         href="/services/pravila-prodazhi">Правила
                                            продажи</a></div>
                                        <div className="footer__item footer__item-trading"><a rel="nofollow"
                                                                                              href="/services/pravila-polzovaniya-torgovoy-ploshchadkoy">Правила
                                            пользования торговой площадкой</a></div>
                                        <div className="footer__item footer__item-policy"><a rel="nofollow"
                                                                                             href="/services/politika-obrabotki-personalnyh-dannyh">Политика
                                            обработки персональных данных</a></div>
                                    </div>
                                </div>
                            </li>

                        </ul>
                    </section>
                </div>
            </StyledHeaderContent>
        </StyledHeaderContainer>
    );
}
