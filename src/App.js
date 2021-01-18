import React from 'react';
import styled from 'styled-components';
import { useEffect, useState } from 'react';

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

const Title = styled.h1`
    font-size: 3.5em; 
    font-weight: 500;
    color: #ff8f00;
`;

const List = styled.ul`
    margin: 1em 0em;
    width: 100%;
`;

const Link = styled.li`
    margin: 1.3em auto;
    border: solid 2.5px #ff8f00;
    background: #212121;
    text-align: center;
    a{
        color: #ff8f00;
        font-size: 1.5em; 
        display: block;
        padding: 0.75em 0em;
    }
    :hover{
        background: #ff8f00;
        a{color: #212121;}
    }
    :active{
        background: #484848;
        a{color: #ff8f00;}
    }
`;

export default function App() {
    const [data, setData] = useState({});
    const url = "http://phosphorus.alwaysdata.net/v1/users/";
    const user = "6004940f8812576fb0a3508d";

    useEffect(() => {
        (async () => {
            let response = await fetch(url + user);
            let json = await response.json();
            setData(json);
        })();
    }, [])

    return (
        <Container>
            <Title>{data?.name}</Title>
            {data.links?
                <List>
                    {Object.keys(data.links).map(key => <Link key={key}> <a href={data.links[key]}> {key} </a> </Link>)}
                </List>
            : ""}
        </Container>
    );
}
