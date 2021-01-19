import styled from 'styled-components';

const Title = styled.h1`
    font-size: 3.5em; 
    font-weight: 500;
    margin-bottom: .5em;
    color: ${props => props.theme.colorSecondary};
`;

export default Title;