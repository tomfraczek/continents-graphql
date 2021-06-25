import React from 'react';

import CountryCard from '../country-card/country-card.component';
import GoBackButton from '../go-back-button/go-back-button.component';

import {
    ContinentContainer,
    CountriesContainer,
    ContinentNameContainer,
    ContinentHeaderContainer,
} from './continent-overview.styles';

const ContinentOverview = ({continent}) => (
    
    <ContinentContainer>
        <ContinentHeaderContainer>
            <GoBackButton />
            <ContinentNameContainer>{continent.name}</ContinentNameContainer>
        </ContinentHeaderContainer>
        <CountriesContainer>
            {
                continent.countries.map(country => <CountryCard key={country.code} country={country} />)
            }
        </CountriesContainer>
    </ContinentContainer>
)

export default ContinentOverview;