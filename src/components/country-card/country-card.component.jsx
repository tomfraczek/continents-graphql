import React from 'react';

import {
    CountryCardContainer,
    LanguagesContainer
} from './country-card.styles';

const CountryCard = ({country}) => (
    <CountryCardContainer>
        <span>{country.emoji}</span>
        <span>{country.name}</span>
        <LanguagesContainer>
            {
                country.languages.slice(0,1).map(language => <span key={language.code}>{language.name}</span>)
            }
        </LanguagesContainer>
    </CountryCardContainer>
);

export default CountryCard;