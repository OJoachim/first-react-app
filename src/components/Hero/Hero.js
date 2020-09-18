import React from 'react';
import styles from './Hero.scss';

class Hero extends React.Component {
  render() {
    return (
      <header className={styles.component}>
        <h2 className={styles.title}>"Things to do"</h2>
        <img className={styles.image} src="https://images.pexels.com/photos/3405485/pexels-photo-3405485.jpeg" />
      </header>
    );
  }
}

export default Hero;
