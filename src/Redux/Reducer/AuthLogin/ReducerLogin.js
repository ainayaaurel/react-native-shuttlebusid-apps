
const initialState = {
  isLogin: false,
  isLoading: false
}

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'IS_LOGIN': {
      return {
        ...state,
        isLogin: true,
        isLoading: true
      }
    }
    default:
      return state
  }
}

export default loginReducer