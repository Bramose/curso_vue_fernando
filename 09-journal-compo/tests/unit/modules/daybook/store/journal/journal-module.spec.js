import { createStore } from "vuex"
import journal from '@/modules/daybook/store/journal'
import { journalState } from "../../../../mock-data/test-journal-state"
import authApi from '@/api/authApi'

const createVuexStore = ( initialState ) => 
    createStore({
        modules: {
            journal: {
                ...journal,
                state: { ...initialState }
            }
        }
    })

describe('Vuex - Pruevas en el Journal Module', () => {
    beforeAll(async() => {
        const { data } = await authApi.post(':signInWithPassword', {
            email: 'test@test.com',
            password: '123456',
            returnSecureToken: true
        })
        localStorage.setItem('idToken', data.idToken)
    })

    test('este es el estaod inicial, debe de tener este state', () => {
        const store = createVuexStore(journalState)
        const { isLoading, entries } = store.state.journal
        
        expect(isLoading).toBeFalsy()
        expect(entries).toEqual( journalState.entries )
    })

    // Mutations
    test('mutation: setEntries', () => {
        const store = createVuexStore({ isLoading: true, entries: [] })
        const stateJornal = store.state.journal
        store.commit('journal/setEntries', journalState.entries)
        expect(stateJornal.entries.length).toBe(2)
        store.commit('journal/setEntries', journalState.entries)
        expect(stateJornal.entries.length).toBe(4)
        expect(stateJornal.isLoading.length).toBeFalsy()
    })
    test('mutation: updateEntry', () => {
        const store = createVuexStore(journalState)
        const updateEntry = {
            id: '-Mo_yYK5OIgZpA5e8Y0J',
            date : 1637019683822,
            picture : "https://res.cloudinary.com/bramose/image/upload/v1637108545/imeh989yorf6asfqu4lj.jpg",
            text : "Hola desde la prueba"
        }
        const stateEntries = store.state.journal.entries
        store.commit('journal/updateEntry', updateEntry)
        expect(stateEntries.length).toBe(2)
        expect(stateEntries.find( entry => entry.id === updateEntry.id ) ).toEqual(updateEntry)
    })
    test('mutation: addEntry, deleteEntry', async() => {
        const store = createVuexStore(journalState)
        const addEntry = { id: "ABC-123", text: "Hola mundo desde test" }
        
        store.commit('journal/addEntry', addEntry)

        expect(store.state.journal.entries.length).toBe(3)
        expect(store.state.journal.entries.find(entry => entry.id === addEntry.id)).toEqual(addEntry)
        
        await store.commit('journal/deleteEntry', addEntry.id)
        expect(store.state.journal.entries.length).toBe(2)
        expect(store.state.journal.entries.find( entry => entry.id === addEntry.id )).toBeFalsy()
    })
    //Getters
    test('getters: getEntriesByTerm, getEntryById', () => {
        const store = createVuexStore(journalState)
        const [ entry1, entry2, entry3 ] = journalState.entries
        expect( store.getters['journal/getEntriesByTerm']('').length ).toBe(2)
        expect( store.getters['journal/getEntriesByTerm']('Como ando').length ).toBe(1)
        expect( store.getters['journal/getEntriesByTerm']('Como ando') ).toEqual([ entry2 ])
        expect( store.getters['journal/getEntryById']('-Mo_yYK5OIgZpA5e8Y0J') ).toEqual(entry1)
    })
    //Actions
    test('actions: loadEntries', async() => {
        const store = createVuexStore({ isLoading: true, entries: [] })
        await store.dispatch('journal/loadEntries')
        expect(store.state.journal.entries.length).toBe(6)
    })
    test('actions: updateEntry', async() => {
        const store = createVuexStore(journalState)
        const updatedEntry = {
            id: '-Mo_yYK5OIgZpA5e8Y0J',
            date : 1637019683822,
            picture : "https://res.cloudinary.com/bramose/image/upload/v1637108545/imeh989yorf6asfqu4lj.jpg",
            text : "Que voy hacer hoy desde test\n"
        }
        await store.dispatch('journal/updateEntry', updatedEntry)
        expect(store.state.journal.entries.length).toBe(2)
        expect(store.state.journal.entries.find( entry => entry.id === updatedEntry.id )).toEqual(updatedEntry)
    })
    test('actions: createEntry, deleteËntry', async() => {
        const store = createVuexStore(journalState)
        const newEntry = {
            data: 1637019683822,
            text: 'Nueva entrada desde test'
        }
        const id = await store.dispatch('journal/addEntry', newEntry)
        expect(typeof id).toBe('string')
        expect(store.state.journal.entries.find(entry => entry.id === id)).toEqual({ id, ...newEntry })
        await store.dispatch('journal/deleteEntry', id)
        expect(store.state.journal.entries.find(entry => entry.id === id)).toBeFalsy()
    })
})