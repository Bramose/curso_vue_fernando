import { computed, ref } from 'vue'
import { useStore } from 'vuex'

const useTodos = () => {
    const store = useStore()
    const currentTab = ref('all')
    const inputText = ref('')

    const onSubmitTodo = (text) => {
        store.commit('createTodo', text)
        inputText.value = ''
    }

    return {
        currentTab,
        inputText,
        // Computed
        pending: computed(() => store.getters['pendingTodos']),
        all: computed(() => store.getters['allTodos']),
        completed: computed(() => store.getters['completedTodos']),
        getTodosByTab: computed( () => store.getters['getTodosByTab'](currentTab.value) ),
        // Methods
        toggleTodo: (id) => store.commit('toggleTodo', id),
        onSubmitTodo
    }
}

export default useTodos