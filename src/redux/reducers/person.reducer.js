const selectPerson = (state = [], action) => {
    if(action.type === 'SELECT_PERSON') {
        return action.payload;
    }
    return state;
  }
export default selectPerson;