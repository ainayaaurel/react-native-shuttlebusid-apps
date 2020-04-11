const initialState = {
  schedules: []
}

const schedulesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_SCHEDULES': {
      return {
        ...state,
        schedules: action.payload
      }
    }
    default:
      return state
  }
}
export default schedulesReducer