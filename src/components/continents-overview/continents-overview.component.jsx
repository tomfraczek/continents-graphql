import React from 'react';

import CustomCard from '../custom-card/custom-card.component';

const ContinentsOverview = ({continents}) => (
    <>
        {
            continents.map(continent => <CustomCard key={continent.code} continent={continent} />)
        }
    </>
)

export default ContinentsOverview;