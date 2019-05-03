export default quotesReducer(state = [], action) => {
  switch(action.type) {
    case 'ADD_QUOTE':
      return [...state, action.quote]
    case 'REMOVE_QUOTE':
    case 'UPVOTE_QUOTE':
    case 'DOWNVOTE_QUOTE':
    default:
      return state;
  }
}
