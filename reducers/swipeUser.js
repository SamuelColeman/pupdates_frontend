export const swipeUser = (state = {}, action) => {
  switch (action.type) {
    case 'SET_SWIPE_USER':
      return action.swipeUser;
    default:
      return state
  }
}