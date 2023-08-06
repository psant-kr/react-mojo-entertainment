import React from 'react'
import { img_300, unavailable } from '../../config/config'
import './SingleContent.css'

const SingleContent = ({
    id,
    poster,
    title,
    date,
    media_type,
    vote_average,
    adult
}) => {
    return (
        <div className='media'>
            <img
                className='poster'
                src={poster ? `${img_300}/${poster}` : unavailable}
                alt={title} />
            <b className='title'>{title}</b>
            <span className='subtitle'>{media_type === "tv" ? "TV Series" : "Movie"}</span>
            <span className='subTitle'></span>
        </div>
    )
}

export default SingleContent