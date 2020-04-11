const initState = {
  routes: []
}

const routesReducer = (state = initState, action) => {
  switch (action.type) {
    case 'GET_ROUTES': {
      return {
        ...state,
        routes: action.payload
      }
    }
    default:
      return state
  }
}

export default routesReducer