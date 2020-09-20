import React from 'react';
import styles from './App.scss';
import List from '../List/List.js';

class App extends React.Component {
  render() {
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>My first React app</h1>
        <h2 className={styles.subtitle}>just a simple lists and columns</h2>
        <List title={['Things to do...', <sup key='1'>soon!</sup>]}
        image={"https://images.pexels.com/photos/3405485/pexels-photo-3405485.jpeg"}
        >
          <p>
            I'm planning on doing all these things in the future
          </p>
        </List>
      </main>
    );
  }
}

export default App;