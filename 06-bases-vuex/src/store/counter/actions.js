import getRandomInt from "../../helpers/getRandomInt"

export const incrementRandomInt = async ({ commit }) => {
    commit('setLoading')
    const randomInt = await getRandomInt()
    commit('incrementBy', randomInt)
    commit('setLoading')
}