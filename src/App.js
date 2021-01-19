import React from 'react';
import { useEffect, useState } from 'react';

import Title from './styled-components/Title';
import Link from './styled-components/Link';
import Container from './styled-components/Container';
import List from './styled-components/List';

export default function App() {
    const [data, setData] = useState({});
    const url = "http://phosphorus.alwaysdata.net/v1/users/";
    const user = "6004940f8812576fb0a3508d";
    const theme = 3;

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
