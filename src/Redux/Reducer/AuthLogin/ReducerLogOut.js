const initialState = {
  sudahLogin: false,
  isLoading: false,
  isLogout: false
}

const logOutReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'IS_LOGOUT': {
      return {
        ...state,
        sudahLogin: false,
        isLogout: true,
        isLoading: true
      }
    }
    default:
      return state
  }
}

export default logOutReducer