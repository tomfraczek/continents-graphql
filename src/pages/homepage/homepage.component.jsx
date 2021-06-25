import React from 'react';
import { Link } from 'react-router-dom';

import {
    HomepageContainer,
} from './homepage.styles';

const Homepage = () => (
    <HomepageContainer>
        <Link to='/continents'>go to the list of continents</Link>
    </HomepageContainer>
);

export default Homepage;