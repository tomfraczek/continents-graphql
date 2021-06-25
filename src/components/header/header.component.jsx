import React from 'react';
import { withRouter } from 'react-router';

import { ReactComponent as Earth } from './img/earth.svg';
import { HeaderComponent } from './header.styles';

const Header = ({history}) => (
    <HeaderComponent>
        <Earth onClick={() => history.push('/')} />
    </HeaderComponent>
);

export default withRouter(Header);