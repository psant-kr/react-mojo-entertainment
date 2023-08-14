import React, { useEffect, useState } from 'react'
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import {
    img_500,
    unavailable,
    unavailableLandscape
} from '../../config/config';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    // width: 400,
    // bgcolor: 'background.paper',
    // border: '2px solid #000',
    // boxShadow: 24,
    // p: 4,

    // my styles
    width: "90%",
    height: "80%",
    backgroundColor: "#39445a",
    border: '2px solid #282c34',
    borderRadius: 1,
    color: "white",
    // boxShadow: theme.shadows[5],
    // padding: theme.spacing(1, 1, 3),
};

export default function ContentModal({ children, media_type, id }) {
    const [content, setContent] = React.useState();
    const [video, setVideo] = useState();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // data fetching from apis

    const fetchData = async () => {
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/${media_type}/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
        );
        console.log(data)
        setContent(data);
    };

    const fetchVideo = async () => {
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
        );
        // console.log(data);
        setVideo(data.results[0]?.key);
    };

    useEffect(() => {
        fetchData();
        fetchVideo();
    }, []);


    return (
        <div>
            <Button className='media' onClick={handleOpen}>
                {children}
            </Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={open}>
                    {content &&
                        <Box sx={style}>
                            <div className='ContentModal'>
                                {/* <img
                                    className='Content_potrait'
                                    alt={content.name || content.title}
                                    src={content.poster_path
                                        ? `${img_500}/${content.poster_path}`
                                        : unavailable}
                                /> */}
                                <img
                                    className='ContentModal_landscape'
                                    alt={content.name || content.title}
                                    src={content.backdrop_path
                                        ? `${img_500}/${content.backdrop_path}`
                                        : unavailableLandscape}
                                />
                                <div className='ContentModal_about'>
                                    <span className='ContentModal_title'>
                                        {content.name || content.title}(
                                        {(
                                            content.first_air_date ||
                                            content.release_date ||
                                            "----"
                                        ).substring(0, 4)}
                                        )
                                    </span>
                                    {content.tagline && (
                                        <i className='tagline'>{content.tagline}</i>
                                    )}
                                    <span className='ContentModal__description'>
                                        {content.overview}
                                    </span>
                                    <div>

                                    </div>


                                </div>
                            </div>
                            {/* <Typography id="transition-modal-title" variant="h6" component="h2">
                            Text in a modal
                        </Typography>
                        <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                        </Typography> */}
                        </Box>
                    }
                </Fade>
            </Modal>
        </div>
    );
}