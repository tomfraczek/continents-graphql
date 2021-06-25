import React from 'react';
import { withRouter } from 'react-router-dom';

import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import Spinner from '../../components/spinner/spinner.component';
import ContinentOverview from '../../components/continent-overview/continent-overview.component';

const GET_CONTINENT = gql`
        query continent($code: ID!){
            continent(code: $code){
                name
                code
                countries{
                    name
                    emoji
                    code
                    languages{
                        name
                        code
                    }
                }
            }
        }
`;

const Continent = ({ match }) => (
    <Query 
        query={GET_CONTINENT} 
        variables={{code: match.params.code}}    
    >
    {
      ({loading, error, data}) => {
        if(loading) return <Spinner />
        return <ContinentOverview continent={data.continent} />
      }
    }
  </Query>
)

export default withRouter(Continent);