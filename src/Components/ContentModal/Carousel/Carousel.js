import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import axios from 'axios';
import { useState, useEffect } from "react";
import 'react-alice-carousel/lib/alice-carousel.css';
import { noPicture, img_300 } from '../../config/config';
import "./Carousel.css";

const handleDragStart = (e) => e.preventDefault();

const Carousel = ({id, media_type}) => {
  const [credits, setCredits] = useState();

  const items = credits?.map((c)=>(
    <div className='CarouselItem'>
      <img
      src={c.profile_path ? `${img_300}/${c.profile_path}` : noPicture}
      alt={c?.name}
      onDragStart={handleDragStart}
      className='CarouselItem__img'
      />
      <b className="carouselitem__txt">{c?.name}</b>
    </div>
  ));

  const responsive = {
    0: {
      items: 3,
    },
    512: {
      items: 5,
    },
    1024: {
      items: 7,
    },
  };

  const fetchCredits = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    setCredits(data.cast);
  };

  useEffect(() => {
    fetchCredits();
    // eslint-disable-next-line

  }, []);

  return (
    <AliceCarousel autoPlay infinite disableDotsControls disableButtonsControls responsive={responsive} mouseTracking items={items} />
  );
}

export default Carousel;