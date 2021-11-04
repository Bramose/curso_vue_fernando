import { createStore } from "vuex"
import getRandomInt from "../helpers/getRandomInt"

export default createStore({
    state: {
        count: 1,
        lastMutation: 'none',
        isLoading: false,
        lastRandomInt: 0
    },

    mutations: {
        increment( state ) {
            state.count++,
            state.lastMutation = 'increment'
        },
        incrementBy( state, val ) {
            state.count+= val,
            state.lastMutation = 'incrementBy ' + val,
            state.lastRandomInt = val
        },
        setLoading(state) {
            const status = !state.isLoading
            state.isLoading = status
            state.lastMutation = 'setLoading ' + status
        }
    },

    actions: {
        async incrementRandomInt({ commit }) {
            commit('setLoading')
            const randomInt = await getRandomInt()
            commit('incrementBy', randomInt)
            commit('setLoading')
        }
    },

    getters: {
        squareCount(state) {
            return state.count * state.count
        }
    }
})