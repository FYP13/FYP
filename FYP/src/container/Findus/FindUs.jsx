import React from 'react';
import { SubHeading } from '../../components';

const FindUs = () => (
  <div className="app__bg justify section__padding " id="contact">
    <div className="app__wrapper_info justify ">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Find Us</h1>
      <div className="app__wrapper-content justify">
        <p className="p__opensans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores cupiditate ad rem aliquam? Ea expedita quos atque, hic non maxime!</p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Opening Hours</p>
        <p className="p__opensans">Mon - Fri: 10:00 am - 02:00 am</p>
        <p className="p__opensans">Sat - Sun: 10:00 am - 03:00 am</p>
      </div>
      <button type="button" className="custom__button" style={{ marginTop: '2rem' }}>Visit Us</button>
    </div>

    <div className="app__wrapper_img">
    </div>
  </div>
);

export default FindUs;
