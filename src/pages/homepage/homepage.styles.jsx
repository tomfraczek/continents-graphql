import styled from 'styled-components';

export const HomepageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 500px;

    a{
        color: #000;
        text-transform: uppercase;
        font-size: 2em;
        text-decoration: none;
        font-weight: bold;

        &:hover{
            text-decoration: underline;
        }
    }
`;
