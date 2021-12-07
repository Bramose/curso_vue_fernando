<template>
  <h1>Aprendiendo Slots</h1>
  <button @click="openModal">Abrir Modal</button>
  <modal v-if="isOpen" title="Hola Mundo" @on:close="closeModal">
      <!-- <h2>Titulo del moda</h2>
      <p>Officia Lorem culpa id consectetur reprehenderit laboris est.</p>
      <button>Salir</button> -->
      <template v-slot:footer>
        <button @click="closeModal">Salir</button>
      </template>
      <template v-slot:body>
        <p>Officia Lorem culpa id consectetur reprehenderit laboris est.</p>   
      </template>
      <template v-slot:header>
          <h2>Titulo del moda</h2>
      </template>
      <template v-slot:exposed="slotProps" hola="mundo">
        <h2>{{ slotProps }}</h2>
      </template>
  </modal>
</template>

<script>
import Modal from '../components/Modal.vue'
import useModal from '../composables/useModal'
export default {
    components: {
        Modal
    },
    setup(){
        return{
          ...useModal()
        }
    }
}
</script>

<style>

</style>