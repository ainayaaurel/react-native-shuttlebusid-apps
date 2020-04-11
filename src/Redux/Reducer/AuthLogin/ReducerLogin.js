
const initialState = {
  sudahLogin: false,
  isLoading: false
}

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'IS_LOGIN': {
      return {
        ...state,
        sudahLogin: true,
        isLoading: true
      }
    }
    default:
      return state
  }
}

export default loginReducer