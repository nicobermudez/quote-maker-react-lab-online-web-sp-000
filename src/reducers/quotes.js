export default quotesReducer(state = [], action) => {

  let index;
  let quote;

  switch(action.type) {
    case 'ADD_QUOTE':
      return state.concat(action.quote)

    case 'REMOVE_QUOTE':
      idx = state.indexOf(action.id);
      return [...state.slice(0, idx), ...state.slice(idx+1)];

    case 'UPVOTE_QUOTE':


    case 'DOWNVOTE_QUOTE':

    default:
      return state;
  }
}
