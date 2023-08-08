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
                alt={title}
            />
            <b className='title'>{title}</b>
            <span className='sub_Title'>
                <span className='subTitle'>{media_type === "tv" ? "TV Series" : "Movie"}</span>
                <span className='subTitle'>{date}</span>
            </span>

        </div>
    )
}

export default SingleContent