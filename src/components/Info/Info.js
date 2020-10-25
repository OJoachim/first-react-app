import React from 'react';
import Container from '../Container/Container';
import {dataInfo} from '../../data/dataStore';
import PropTypes from 'prop-types';
import Hero from '../Hero/Hero';

const Info = () => (
  <Container>
    <Hero titleText={dataInfo.title} imageSourceText={dataInfo.image} />
    <p>{dataInfo.text}</p>
  </Container>
);

Info.propTypes = {
  title: PropTypes.node.isRequired,
  image: PropTypes.string,
  text: PropTypes.string,
};

export default Info;