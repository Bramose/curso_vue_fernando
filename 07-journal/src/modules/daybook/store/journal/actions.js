import journalApi from '@/api/journalApi'

export const loadEntries = async ({ commit }) => {
    const { data } = await journalApi.get('/entries.json')
    const entries = []
    if (!data) {
        commit('setEntries', entries)
        return
    }
    for (let id of Object.keys(data)) {
        entries.push({
            id,
            ...data[id]
        })
    }
    commit('setEntries', entries)
}
export const updateEntry = async ({ commit }, entry) => {
    const { id, ...dataToSave } = entry
    const { data } = await journalApi.put(`/entries/${id}.json`, dataToSave)
    commit('updateEntry', { id, ...data })
}
export const addEntry = async ({ commit }, entry) => {
    const dataToInsert = { ...entry }
    const { data } = await journalApi.post(`/entries.json`, dataToInsert)
    dataToInsert.id = data.name
    commit('addEntry', dataToInsert)
    return data.name
}
export const deleteEntry = async ({ commit }, entryId) => {
    const { data } = await journalApi.delete(`/entries/${entryId}.json`)
    commit('deleteEntry', entryId)
    return data
}