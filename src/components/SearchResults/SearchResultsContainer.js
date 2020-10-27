import {connect} from 'react-redux';
import SearchResults from './SearchResults';
import {getCardsForSearchResults} from '../../redux/cardsRedux';
import {createActionAddCard} from '../../redux/cardsRedux';
import {createAction_changeSearchString} from '../../redux/searchStringRedux.js';

const mapStateToProps = (state, props) => ({
  const searchString = props.match.params.searchString;
  const filteredCards = state.cards.filter(card => card.searchString == searchString);
  const cardParams = filteredCards[0] || {};
  
  return {
    ...cardParams,
    cards: getCardsForSearchResults(state, searchString),
  }
});

const mapDispatchToProps = (dispatch, searchString) => ({
  
  changeSearchString: (newSearchString) =>
    dispatch(createAction_changeSearchString(newSearchString)),
});

{/*    
  
 
});

*/}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);