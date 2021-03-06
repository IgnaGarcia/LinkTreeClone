import styled from 'styled-components';

const Link = styled.li`
    margin: 1.3em auto;
    width: 100%;
    border: solid 2.5px ${props => props.theme.colorSecondary};
    background: ${props => props.theme.colorPrimary};
    text-align: center;
    a{
        color: ${props => props.theme.colorSecondary};
        font-size: 1.5em; 
        display: block;
        padding: 0.75em 0em;
    }
    :hover{
        background: ${props => props.theme.colorSecondary};
        a{color: ${props => props.theme.colorPrimary};}
    }
    :active{
        background: ${props => props.theme.colorPrimary};
        a{color: ${props => props.theme.colorSecondary};}
    }
`;

export default Link;