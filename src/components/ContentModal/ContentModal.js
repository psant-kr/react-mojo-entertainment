import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';

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
    const [content, setContent] = useState();
    const [video, setVideo] = useState();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // data fetching from apis

    const fetchData = async () => {
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/${media_type}/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
        );
    };

    const fetchVideo = async () => {
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
        );
    };

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
                    <Box sx={style}>
                        <Typography id="transition-modal-title" variant="h6" component="h2">
                            Text in a modal
                        </Typography>
                        <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                        </Typography>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}