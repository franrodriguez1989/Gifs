import { useReducer } from "react"
import { useLocation } from "wouter"

const ACTIONS = {
  UPDATE_KEYWORD: "update_keyword",
  UPDATE_RAITING: "update_raiting",
  UPDATE_LOCATION: "update_location",
  UPDATE_TIMES: "update_times",
}
const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.UPDATE_KEYWORD:
      return {
        ...state,
        keyword: action.payload,
      }
    case ACTIONS.UPDATE_RAITING:
      return {
        ...state,
        raiting: action.payload,
      }
    case ACTIONS.UPDATE_TIMES:
      return {
        ...state,
        times: state.times + action.payload,
      }
    default:
      return state
  }
}
//Otra forma de hacerlo sin switch
/* const ACTIONS_REDUCERS = {
    [ACTIONS.UPDATE_KEYWORD]: (state, action) => ({
    ...state, 
    keyword: action.payload,
    times: state.times + 1
    }),
    [ACTIONS.UPDATE_RAITING]: (state, action) => ({
    ...state, 
    raiting: action.payload,
    times: state.times + 1
    })
    }
    
    const reducer = (state, action) => {
    const actionReducer = ACTIONS_REDUCERS[action.type]
    return actionReducer ? actionReducer (state, action) : state
    } */
export default function useForm({
  initialKeyword,
  initialRaiting,
  initialTimes,
}) {
  const initialState = {
    keyword: initialKeyword,
    raiting: initialRaiting,
    times: initialTimes,
  }

  const [state, dispatch] = useReducer(reducer, initialState)
  const { keyword, times, raiting } = state

  const updateRaiting = (raiting) =>
    dispatch({ type: ACTIONS.UPDATE_RAITING, payload: raiting })

  const updateKeyword = (keyword) =>
    dispatch({ type: ACTIONS.UPDATE_KEYWORD, payload: keyword })

  const pushLocation = useLocation()[1]
  const updateLocation = () => {
    dispatch({ type: ACTIONS.UPDATE_TIMES, payload: 1 })
    pushLocation(`/search/${keyword}/${raiting}`)
  }

  return {
    keyword,
    times,
    raiting,
    updateKeyword,
    updateRaiting,
    updateLocation,
  }
}
