// export const myGetter = (state) => {
    // return state
// }

export const currentState = (state) => {
    return state.status
}

export const userState = (state) => {
    return state.user?.name || ''
}