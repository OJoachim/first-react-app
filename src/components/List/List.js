import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import Column from '../Column/Column.js';


class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    image: PropTypes.node,
    children: PropTypes.node.isRequired,
  }
  
  static defaultProps = {
    children: <p>I can do all the things...</p>,
  }
  
  render() {
    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title} imageSourceText={this.props.image} />
        <div className={styles.description}>
          {this.props.children}
        </div>
        <div className={styles.columns}>
          <Column title={['- ', <span key='1'>one</span>, ' -']}>
          </Column>
          <Column title={['- ', <span key='2'>two</span>, ' -']}>
          </Column>
          <Column title={['- ', <span key='3'>three</span>, ' -']}>
          </Column>
        </div>
      </section>
      
    );
  }
}

export default List;
/*
if there was not in App.js between <List></List>
<p>I'm planning on doing all these things in the future</p>
there appears default :
<p>I can do all the things...</p>
*/