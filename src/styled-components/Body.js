import styled from 'styled-components';

const Body = styled.div`
    background-color: ${props => props.theme.colorPrimary};
    padding: 0em 2em;
    display: block;
    margin: 0;
    min-height: 100vh;
`;

export default Body;