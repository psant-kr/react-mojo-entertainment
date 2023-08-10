import React, { useState } from 'react'
import { Button, TextField, ThemeProvider, createTheme } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

const Search = () => {
    const [type, setType] = useState(0);

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
                <div style={{display:'flex',margin:"20px 0"}}>
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
            </ThemeProvider>
        </div>
    )
}

export default Search