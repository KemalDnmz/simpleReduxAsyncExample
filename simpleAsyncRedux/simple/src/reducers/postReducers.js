import { allTypes } from "../actionTypes";

const initialState = {
  status:"",
  posts:[]
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case allTypes.actionType.FETCH_DATA_PENDING:
    return {
      ...state,
      status:"Loading",
    }
    case allTypes.actionType.FETCH_DATA_SUCCESS:
    return {
      ...state,
      status:"",
      posts: action.payload
      
    }
  
    case allTypes.actionType.FETCH_DATA_ERROR:
      return {
        ...state,
        status:"",
        posts: action.payload
        
      }
    default:
      return state;
  }
};
