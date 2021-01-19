import styled from 'styled-components';

const Container = styled.div`
    width: 80%;
    padding: 4em 0 2em 0;
    margin: 0 auto;
    @media (min-width: 425px){
        width: 65%;
    }
    @media (min-width: 767px){
        width: 55%;
    }
    @media (min-width: 1023px){
        width: 45%;
        max-width: 500px;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export default Container;