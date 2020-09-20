import React from 'react';
import styles from './Hero.scss';
import PropTypes from 'prop-types';

const Hero = props => (
  <header className={styles.component}>
    <h2 className={styles.title}>{props.titleText}</h2>
    <img className={styles.image} src={props.imageSourceText} />
  </header>
);

Hero.propTypes = {
  titleText: PropTypes.node.isRequired,
  imageSourceText: PropTypes.node,
};

export default Hero;

/*dla komponentu funkcyjnego:
import React from 'react';
import styles from './MyComponent.scss';

const MyComponent = () => (
  <div>
    <h3>Hello world!</h3>
  </div>
);

export default MyComponent;
*/