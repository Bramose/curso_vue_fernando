<template>
  <h1>About Page</h1>
  <hr>
  <h2>{{ name }}</h2>
  <button @click="onChange">
    Cambiar nombre
  </button>
</template>

<script>
export default {

  data() {
    return {
      name: 'Sergio'
    }
  },

  methods: {
    onChange() {
      this.name = 'Julieta'
      // console.log('Se cambiara el nombre a ', this.name)
    }
  },

  beforeCreate(){
    // Para ejecutar algun tipo de validacion
    console.log("beforeCreate")
  },
  created(){
    this.name = 'Juan'
    console.log("created")
    // Peticiones HTTP
  },
  beforeMount(){
    console.log("beforeMount")
  },
  mounted(){
    console.log("mounted")
  },
  beforeUpdate(){
    console.log("beforeUpdate")
  },
  updated(){
    console.log("updated")
  },
  activated(){
    console.log("activated")
  },
  deactivated(){
    console.log("deactivated")
  },
  beforeUnmount(){
    console.log("beforeUnmount")
  },
  unmounted(){
    console.log("unmounted")
  },
  errorCaptured(){
    console.log("errorCaptured")
  },
  renderTracked(){
    console.log("renderTracked")
  },
  renderTriggered(){
    console.log("renderTriggered")
  },
}
</script>
