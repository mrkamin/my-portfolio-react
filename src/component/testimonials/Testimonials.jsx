import React from 'react';
import './testimonials.css';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { avatardata } from '../../Data';

// import Swiper core and required modules

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => (
  <section id="testimonials">
    <h5>Review From Clients</h5>
    <h2>Recommendations</h2>
    <Swiper
      className="container testimonials__container"
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
    >
      {avatardata.map(({
        id, image, name, comment,
      }) => (
        <SwiperSlide key={id} className="testimoial">
          <div className="client__avatar">
            <img src={image} alt={name} />
          </div>
          <h5 className="client__name">{name}</h5>
          <small className="client__review">{comment}</small>
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
);

export default Testimonials;
