import React from 'react';
import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import Themes from './styled-components/Themes';
import Title from './styled-components/Title';
import Link from './styled-components/Link';
import Container from './styled-components/Container';
import List from './styled-components/List';
import Body from './styled-components/Body';


export default function App() {
    const [data, setData] = useState({});
    const [theme, setTheme] = useState(1);
    const [themeLoaded, setThemeLoaded] = useState(false)

    const url = "http://phosphorus.alwaysdata.net/v1/users/";
    const user = "6004940f8812576fb0a3508d";

    useEffect(() => {
        (async () => {
            let response = await fetch(url + user);
            let json = await response.json();
            setData(json);
            setTheme(1);//data.theme
            setThemeLoaded(true);
        })();
    }, [])

    return (
        themeLoaded?
            <ThemeProvider theme={Themes[theme]}>
                <Body>
                    <Container>
                        <Title>{data?.name}</Title>
                        {data.links?
                            <List>
                                {Object.keys(data.links).map(key => <Link key={key}> <a href={data.links[key]}> {key} </a> </Link>)}
                            </List>
                        : ""}
                    </Container>
                </Body>
            </ThemeProvider>
        : ""
    );
}
