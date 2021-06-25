import React from 'react';
import { withRouter } from 'react-router-dom';

import {
    CardContainer,
    ContinentNameContainer,
} from './custom-card.styles';

const CustomCard = ({match, history, continent}) => (
    <CardContainer>
        <ContinentNameContainer onClick={() => history.push(`${match.path}/${continent.code}`)}>{continent.name}</ContinentNameContainer>
    </CardContainer>
)

export default withRouter(CustomCard);