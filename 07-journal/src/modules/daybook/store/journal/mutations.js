// export const myAction = (state) => {

// }
export const setEntries = (state, entries) => {
    state.entries = [...state.entries, ...entries]
    state.isLoading = false
}
export const updateEntry = (state, entry) => {
    const idx = state.entries.map( e => e.id ).indexOf(entry.id)
    state.entries[idx] = { ...entry }
}
export const addEntry = (state, entry) => {
    state.entries.unshift(entry)
    // state.entries = [ entry, ...state.entries ]
}
export const setLoading = (state) => {
    const status = !state.isLoading
    state.isLoading = status
}
export const deleteEntry = (state, entryId) => {
    state.entries = state.entries.filter(entry => entry.id !== entryId)
}