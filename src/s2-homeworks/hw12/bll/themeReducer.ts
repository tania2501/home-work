

const initState = {
  themeId: 1,
}


export const themeReducer = (state = initState, action: { type: 'SET_THEME_ID', id: number }): { themeId: number } => { // fix any
  switch (action.type) {
    // дописать
    case 'SET_THEME_ID': {
      const newState = { ...state };
      if (newState.themeId) {
        newState.themeId = action.id
      }
      return newState
    }
    default:
      return state
  }
}

export const changeThemeId = (id: number): { type: 'SET_THEME_ID', id: number } => ({ type: 'SET_THEME_ID', id }) // fix any
