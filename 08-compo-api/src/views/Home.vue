<template>
  <div class="home">
    <h1>Reactive vs Ref</h1>
    <p>{{ ironman }}</p>
    <p>{{ hulk }}</p>
    <button @click="changeIronman" type="button">Cambiar</button>
    <button @click="changeHulk" type="button">Cambiar</button>
    <p>Iron Man is alive {{ ironmanIsAlive }}</p>
    <p>Hulk is alive {{ hulkIsAlive }}</p>
    <button @click="changeStatus" >Cambiar status</button>
  </div>
</template>

<script>

import { ref, reactive } from 'vue'

export default {
  name: 'Home',
  setup(){
    const ironman = ref({ name: 'Tony', age: 50 })
    const hulk = reactive({ name: 'Hulk', age: 50 })

    const ironmanIsAlive = reactive(false)
    const hulkIsAlive = ref(true)

    const changeStatus = () => {
      hulkIsAlive.value = !hulkIsAlive.value
      // ironmanIsAlive = !ironmanIsAlive
    }

    return{
      ironman,
      hulk,
      changeIronman: () => {
        ironman.value.name = 'Tony Stark'
        ironman.value.age = 55
      },
      changeHulk: () => {
        hulk.name = 'Bruce Banner'
      	hulk.age = 54
      },
      ironmanIsAlive,
      hulkIsAlive,
      changeStatus
    }
  }
}
</script>
