const familyTree = (state = [], action) => {
    if(action.type === 'SET_FAMILY_TREE') {
        return action.payload;
    }
    return state;
  }

  export default familyTree