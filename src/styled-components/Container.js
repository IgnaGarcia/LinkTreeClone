import styled from 'styled-components';

const Container = styled.div`
    width: 90%;
    @media (min-width: 767px){
        width: 75%;
    }
    @media (min-width: 1023px){
        width: 55%;
    }
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export default Container;