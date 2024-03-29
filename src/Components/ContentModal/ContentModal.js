import * as React from 'react';
import { useState, useEffect } from "react";
import axios from 'axios';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import { img_500, unavailable } from "../config/config";
import YouTubeIcon from '@mui/icons-material/YouTube';
import './ContentModal.css';
import Carousel from "./Carousel/Carousel";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "90%",
  height: "80%",
  backgroundColor: "#39445a",
  border: "1px solid #282c34",
  borderRadius: 2,
  color: "white",
  boxShadow: '10px',
  padding: "3px 2px 2px 4px",
};

export default function ContentModal({children, media_type, id}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [content, setContent] = useState();
  const [video, setVideo] = useState();

  const fetchData = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    setContent(data);
  };
  const fetchVideo = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );

    setVideo(data.results[0]?.key);
  };
  useEffect(() => {
    fetchData();
    fetchVideo();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="media" onClick={handleOpen}>
          {children}
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          {content && ( <Box sx={style}>
            <div className='ContentModal'>
              <img alt={content.name || content.title} 
              className="ContentModal__portrait" src={content.poster_path?`${img_500}/${content.poster_path}`:unavailable} />
            <img alt={content.name || content.title} 
              className="ContentModal__landscape" src={content.backdrop_path?`${img_500}/${content.backdrop_path}`:unavailable} />
              <div className="ContentModal__about">
                <span className="ContentModal__title">
                  {content.name || content.title} (
                    {(
                      content.first_air_date || content.release_date || "-----"
                    ).substring(0,4)}
                  )
                </span>
                {content.tagline && (
                  <i className="tagline">{content.tagline}</i>
                )}
                <span className="ContentModal__description">
                  {/* {content.overview} */}
                  <iframe frameBorder={0} width={"100%"} height={"100%"} allow={"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"} allowFullScreen src={`https://www.youtube.com/embed/${video}`} title="Trailer"></iframe>
                </span>
                <div>
                  <Carousel media_type={media_type} id={id} />
                </div>
                {/* <Button
                  variant="contained"
                  startIcon={<YouTubeIcon />}
                  color="secondary"
                  target="__blank"
                  href={`https://www.youtube.com/watch?v=${video}`}
                >
                  Watch the Trailer
                </Button> */}
              </div>
            </div>
          </Box>
          )}
        </Fade>
      </Modal>
    </>
  );
}