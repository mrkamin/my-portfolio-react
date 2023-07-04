import React from 'react';
import './testimonials.css';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';

// import Swiper core and required modules

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    id: 1,
    image: AVTR1,
    name: 'Mohammad Khalid',
    comment:
      "I had the pleasure of working with Mohammad Rafi Amin, an outstanding web developer who truly exceeded my expectations. His attention to detail, creativity, and ability to meet deadlines were exceptional. I highly recommend Mohammad Rafi Amin's services for anyone seeking a professional and reliable web developer.",
  },
  {
    id: 2,
    image: AVTR2,
    name: 'Shafiq Ramin',
    comment:
      'I am thrilled to share my experience working with Mohammad Rafi Amin as my web developer. His expertise and talent in web development are truly impressive. From start to finish, Mohammad Rafi Amin displayed a high level of professionalism, attention to detail, and exceptional technical skills. He transformed my vision into a visually stunning and highly functional website. I wholeheartedly recommend Mohammad Rafi Amin to anyone in need of top-notch web development services.',
  },
  {
    id: 3,
    image: AVTR3,
    name: 'John Blinkin',
    comment:
      "I had the pleasure of collaborating with Mohammad Rafi Amin on a web development project, and I am delighted with the results. Mohammad Rafi Amin's expertise and proficiency in web development are truly unmatched. From the very beginning, he exhibited a deep understanding of my requirements and translated them into a visually captivating and highly functional website. I wholeheartedly recommend Mohammad Rafi Amin for his exceptional skills and dedication to delivering outstanding web development solutions.",
  },
  {
    id: 4,
    image: AVTR4,
    name: 'Sara Alam',
    comment:
      "I had the pleasure of working with Mohammad Rafi Amin on a web development project, and I couldn't be more impressed. Mohammad Rafi Amin showcased remarkable expertise, creativity, and professionalism throughout the entire process. He took the time to understand my vision and transformed it into a visually stunning website that exceeded my expectations. I highly recommend Mohammad Rafi Amin for anyone in need of a top-notch web developer who delivers exceptional results.",
  },
];

const Testimonials = () => (
  <section id="testimonials">
    <h5>Review From Clients</h5>
    <h2>Testimonials</h2>
    <Swiper
      className="container testimonials__container"
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
    >
      {data.map(({
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
