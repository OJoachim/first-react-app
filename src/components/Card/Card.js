import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

class Card extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
  }
  
  render () {
    const {title} = this.props;
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>
          {ReactHtmlParser(this.props.title)}
        </h3>
      </section>
    );
  }
}

export default Card;
