import React, { useEffect } from 'react'
import { Chip } from '@mui/material';
import axios from 'axios';
const Genres = ({
    type,
    selectedGenres,
    setSelectedGenres,
    genres,
    setGenres,
    setPage,
}) => {
    const handleAdd = (genre) => {
        setSelectedGenres([...selectedGenres, genre]);
        setGenres(genres.filter((g) => g.id !== genre.id));
        setPage(1)
    };

    const handleRemove = (genre) => {
        setSelectedGenres(
            selectedGenres.filter((selected) => selected.id !== genre.id)
        )
        setGenres([...genres, genre]);
        setPage(1);
    };


    const fetchGenres = async () => {
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
        );
        console.log(data)
        setGenres(data.genres)
    };

    useEffect(() => {
        fetchGenres();

        // on changing the page we want to unmount the genres component
        // unmount means we want to cancel the api key call.
        // return () => {
        //     setGenres({})
        // }
    }, []);

    return (
        <div style={{ padding: "8px 0" }}>
            {selectedGenres &&
                selectedGenres.map((genre) => (
                    <Chip
                        color='primary'
                        // sx={{
                        //     backgroundColor: 'white',
                        //     color: 'black',
                        //     ":hover": {
                        //         color: 'white'
                        //     }
                        // }}
                        label={genre.name}
                        style={{ margin: 2 }}
                        size='small'
                        key={genre.id}
                        clickable
                        onDelete={()=>handleRemove(genre)}
                    />
                ))
            }
            {genres &&
                genres.map((genre) => (
                    <Chip
                        sx={{
                            backgroundColor: 'white',
                            color: 'black',
                            ":hover": {
                                color: 'white'
                            }
                        }}
                        label={genre.name}
                        style={{ margin: 2 }}
                        size='small'
                        key={genre.id}
                        clickable
                        onClick={() => handleAdd(genre)}
                    />
                ))
            }
        </div>
    )
}

export default Genres