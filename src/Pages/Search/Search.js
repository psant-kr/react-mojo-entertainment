import React, { useEffect, useState } from 'react'
import { Button, Tab, Tabs, TextField, ThemeProvider, createTheme } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';
import CustomPagination from '../../components/Pagination/CustomPagination'
import SingleContent from '../../components/SingleContent/SingleContent'

const Search = () => {
    const [type, setType] = useState(0);
    const [page, setPage] = useState(1);
    const [searchText, setSearchText] = useState("");
    const [content, setContent] = useState();
    const [numOfPages, setNumOfPages] = useState();

    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
            primary: {
                main: "#FFF"
            },
        },
    });

    const fetchSearch = async () => {
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}
             ?api_key=${process.env.REACT_APP_API_KEY}
            &language=en-US&query=${searchText}
            &page=${page}&include_adult=false`
        );
        console.log(data);
        setContent(data.results);
        setNumOfPages(data.total_pages);
    };

    useEffect(() => {
        window.scroll(0, 0);
        fetchSearch();
        // eslint-disable-next-line
    }, [type, page]);


    return (
        <div>
            <ThemeProvider theme={darkTheme}>
                <div style={{ display: 'flex', margin: "20px 0" }}>
                    <TextField
                        style={{ flex: 1 }}
                        className='searchBox'
                        label="Search"
                        variant="filled"
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <Button
                        variant="contained"
                        style={{ marginLeft: 12 }}
                        onClick={fetchSearch}
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

            <div className='trending'>
                {
                    content && content.map((c) =>
                        <SingleContent
                            key={c.id}
                            id={c.id}
                            poster={c.poster_path}
                            title={c.title || c.name}
                            date={c.release_date || c.first_air_date}
                            // media_type={c.media_type}
                            media_type={type ? "tv" : "movie"}
                            vote_average={c.vote_average}
                            adult={c.adult}
                        />
                    )
                }
                {
                    searchText &&
                    !content &&
                    (type ? <h2>No Series Found</h2> : <h2>No Movies Found</h2>)
                }
            </div>

            {numOfPages > 1 && (
                <CustomPagination setPage={setPage} numOfPages={numOfPages} />
            )}

        </div>
    )
}

export default Search