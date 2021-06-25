import React from 'react';

import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import Spinner from '../../components/spinner/spinner.component';
import ContinentsOverview from '../../components/continents-overview/continents-overview.component';

const GET_CONTINENTS = gql`
{
  continents{
    name
    code
  }
}
`;

const ContinentsContainer = () => (
  <Query query={GET_CONTINENTS}>
    {
      ({loading, error, data}) => {
        if(loading) return <Spinner />
        return <ContinentsOverview continents={data.continents} />
      }
    }
  </Query>
)

export default ContinentsContainer;