import React, { useState } from 'react'
import { TextField, createTheme } from '@mui/material'

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
            <TextField
                style={{ flex: 1 }}
                className='searchBox'
                label="Search"
                variant="filled"
            // onChange={(e)=>setSearchText(e.target.value)}
            />
        </div>
    )
}

export default Search