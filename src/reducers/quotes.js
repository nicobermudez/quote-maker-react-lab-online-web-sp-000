export default quotesReducer(state = [], action) => {

  let index;
  let quote;

  switch(action.type) {
    case 'ADD_QUOTE':
      return state.concat(action.quote)

    case 'REMOVE_QUOTE':
      return state.filter;(quote => quote.id !== action.quoteId)

    case 'UPVOTE_QUOTE':
      index = state.findIndex(quote => quoteId === action.quoteId);
      qupte = state[index]

    case 'DOWNVOTE_QUOTE':

    default:
      return state;
  }
}
