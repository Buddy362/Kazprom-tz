const initialState = {
    inputValue: []
  }
  
  export const inputReducer = (state = initialState, action) => {
    switch(action.type) {
      case 'SET_INPUT_VALUE':
        Object.assign(state.inputValue.push({
            id: action.payload.id,
            value: action.payload.value
        })) 
      
        
      default:
        return state
    }
  }