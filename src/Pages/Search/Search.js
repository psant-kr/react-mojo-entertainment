import React, { useState } from 'react'
import { Button, Tab, Tabs, TextField, ThemeProvider, createTheme } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

const Search = () => {
    const [type, setType] = useState(0);
    const [page, setPage] = useState(1);

    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
            primary: {
                main: "#FFF"
            },
        },
    });

    return (
        <div>
            <ThemeProvider theme={darkTheme}>
                <div style={{ display: 'flex', margin: "20px 0" }}>
                    <TextField
                        style={{ flex: 1 }}
                        className='searchBox'
                        label="Search"
                        variant="filled"
                    // onChange={(e)=>setSearchText(e.target.value)}
                    />
                    <Button
                        variant="contained"
                        style={{ marginLeft: 12 }}
                    >
                        <SearchIcon />
                    </Button>
                </div>

                <Tabs
                    value={type}
                    textColor="primary"
                    indicatorColor="primary"
                    onChange={(event, newValue) => {
                        setPage(1);
                        setType(newValue);
                    }}
                    style={{ paddingBottom: 5 }}
                >
                    <Tab
                        label="Search Movies"
                        style={{
                            width: "50%",
                            textTransform: "capitalize",
                            fontSize: "16px"
                        }}
                    />
                    <Tab
                        label="Search TV Series"
                        style={{
                            width: "50%",
                            textTransform: "capitalize",
                            fontSize: "16px"
                        }}
                    />

                </Tabs>

            </ThemeProvider>
        </div>
    )
}

export default Search