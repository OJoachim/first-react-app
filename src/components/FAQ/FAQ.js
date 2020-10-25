import React from 'react';
import Container from '../Container/Container';
import {dataFAQ} from '../../data/dataStore';
import PropTypes from 'prop-types';
import Hero from '../Hero/Hero';

const FAQ = () => (
  <Container>
    <Hero titleText={dataFAQ.title} imageSourceText={dataFAQ.image} />
    <p>{dataFAQ.text}</p>
  </Container>
);

FAQ.propTypes = {
  title: PropTypes.node.isRequired,
  image: PropTypes.string,
  text: PropTypes.string,
};

export default FAQ;