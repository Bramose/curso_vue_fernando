<template>
  <h1>Lista de tarea de thanos</h1>
  <!-- <h4>Tareas: {{ $store.state.todos.length }}</h4> -->
  <h4>Pendientes: {{ pending.length }}</h4>
  <hr>
  <button 
    :class="{ 'active': currentTab === 'all' }"
    @click="currentTab ='all'"
  >
    Todos
  </button>
  <button 
    :class="{ 'active': currentTab === 'pending' }"
    @click="currentTab ='pending'"
  >
    Pendientes</button>
  <button 
    :class="{ 'active': currentTab === 'completed' }"
    @click="currentTab ='completed'"
  >
    Completados</button>
  <div>
    <ul>
      <li 
        v-for="{id, text, completed} in getTodosByTab" 
        :key="id" 
        :class="{ 'completed': completed } " 
        @dblclick="toggleTodo(id)"
      >
        {{ text }}
      </li>
    </ul>
  </div>
  <button @click="openModal">Crear Todo</button>
  <!-- Modal -->
  <modal v-if="isOpen" @on:close="closeModal">
    <template v-slot:header>
      <h4>Nueva tarea</h4>
    </template>
    <template v-slot:body>
      <form @submit.prevent="onSubmitTodo(inputText); isOpen=false">
        <input type="text" v-model="inputText" placeholder="Escribe el nuevo todo...">
        <br>
        <span>Da enter para agregar</span>
      </form>
    </template>
    <template v-slot:footer>
      <button @click="closeModal">Cerrar</button>  
    </template>
  </modal>
  <!-- Formulario
    submit.prevent
    createTodo -->

</template>

<script>
import useTodos from '../composables/useTodos'
import Modal from '../components/Modal.vue'
import useModal from '../composables/useModal'
export default {
  components: {
    Modal
  },
  setup(){

    const { currentTab, inputText, pending, all, completed, getTodosByTab, toggleTodo, onSubmitTodo } = useTodos()
    const { isOpen, openModal, closeModal } = useModal()

    return{
      currentTab, 
      inputText, 
      pending, 
      all, 
      completed, 
      getTodosByTab, 
      toggleTodo, 
      onSubmitTodo,
      isOpen, 
      openModal, 
      closeModal
    }
  }
}
</script>

<style scoped>
  div {
    display: flex;
    justify-content: center;
    text-align: center;
  }

  ul {
    width: 300px;
    text-align: left;
  }

  li {
    cursor: pointer;
  }

  .active {
    background-color: #2c3e50;
    color: white;
  }

  .completed {
    text-decoration: line-through;
  }
</style>