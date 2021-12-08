// export const myGetter = (state) => {
    // return state
// }
export const getEntriesByTerm = (state) => (term = '') => {
    if(term.length === 0) return state.entries
    return state.entries.filter(entry => entry.text.toLowerCase().includes(term.toLocaleLowerCase()))
}
export const getEntryById = (state) => (id = '') => {
    // No se recominda hacer de esta manera por que se pasa el valor por referencia y en el state
    // return state.entries.find(entry => entry.id === id)
    const entry = state.entries.find(entry => entry.id === id)
    if (!entry) return
    return {...entry}
}