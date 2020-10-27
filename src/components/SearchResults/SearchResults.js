import React from 'react';
import PropTypes from 'prop-types';
import Container from '../Container/Container.js';
import Column from '../Column/Column.js';

class SearchResults extends React.Component {
  
  static propTypes = {
    cards: PropTypes.array,
  }
  
  render () {
    const {cards} = this.props;
    return (
      <section>
        <Container>
          <Column
            title='Search results'
            icon='sun'
            cards={cards} />
        </Container>
      </section>
    );
  }
}

export default SearchResults;
