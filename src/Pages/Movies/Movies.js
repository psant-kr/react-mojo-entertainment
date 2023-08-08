import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CustomPagination from '../../components/Pagination/CustomPagination'
import SingleContent from '../../components/SingleContent/SingleContent'

const Movies = () => {
    const [page, setPage] = useState(1);
    const [content, setContent] = useState([]);
    const [numOfPages, setNumOfPages] = useState();

    const fetchMovies = async () => {
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`
        );
        console.log(data);
        setContent(data.results);
        setNumOfPages(data.total_pages);
    }

    useEffect(() => {
        fetchMovies();
    }, [page])

    return (
        <div>
            <span className='pageTitle'>Movies</span>
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
                            media_type='movie'
                            vote_average={c.vote_average}
                            adult={c.adult}
                        />
                    )
                }
            </div>
            <CustomPagination setPage={setPage} />
        </div>
    )
}

export default Movies