import React from 'react'
import { img_300, unavailable } from '../../config/config'
import './SingleContent.css'
import { Badge } from '@mui/material'
import ContentModal from '../ContentModal/ContentModal'

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

        // <div className='media'>
        //     <Badge
        //         anchorOrigin={{
        //             vertical: 'top',
        //             horizontal: 'right',
        //         }}
        //         badgeContent={`IMDb ${vote_average.toFixed(1)}`}
        //         color={vote_average > 6 ? "primary" : "secondary"} />
        //     <img
        //         className='poster'
        //         src={poster ? `${img_300}/${poster}` : unavailable}
        //         alt={title}
        //     />
        //     <b className='title'>{title}</b>
        //     <span className='sub_Title'>
        //         <span className='subTitle'>{media_type === "tv" ? "TV Series" : "Movie"}</span>
        //         <span className='subTitle'>{date}</span>
        //     </span>

        // </div>

        // working on creating content modal
        <ContentModal  media_type={media_type} id={id} >
            <Badge
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                badgeContent={`IMDb ${vote_average.toFixed(1)}`}
                color={vote_average > 6 ? "primary" : "secondary"} />
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

        </ContentModal>
    )
}

export default SingleContent