export const initialState = {
    basket: []
}

const reducer = (state, action) => {
  switch(action.type) {
    case "ADD_TO_CART":
    return {
        ...state,
        basket: [...state.basket, action.item]
    }
    case "REMOVE_FROM_CART":
    const updatedState = state.basket.filter((item) => item.id !== action.item.id);
    console.log(updatedState)
    return {basket: [...updatedState]}
    
  }
}

export default reducer;