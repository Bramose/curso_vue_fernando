<template>
  <div class="about">
    <h1>This is an {{ title }} page</h1>
    <button @click='changeTitle' type='button'>Cambiar titulo</button>
  </div>
</template>
<script>
  import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, onErrorCaptured, onRenderTracked, onRenderTriggered, onActivated, onDeactivated } from 'vue'

export default {
  name: 'about',
  setup() {

    const title = ref('About')
    const changeTitle = () => {
      title.value = 'New About'
    }

    onBeforeMount(() => {
      console.log('onBeforeMount')
    })
    onMounted(() => {
      console.log('onMounted')
    })
    onBeforeUpdate(() => {
      console.log('onBeforeUpdate')
    })
    onUpdated(() => {
      console.log('onUpdated')
    })
    onBeforeUnmount(() => {
      console.log('onBeforeUnmount')
    })
    onUnmounted(() => {
      console.log('onUnmounted')
    })
    onErrorCaptured(() => {
      console.log('onErrorCaptured')
    })
    onRenderTracked(() => {
      console.log('onRenderTracked')
    })
    onRenderTriggered(() => {
      console.log('onRenderTriggered')
    })
    onActivated(() => {
      console.log('onActivated')
    })
    onDeactivated(() => {
      console.log("onDeactivated")
    })

    return{
      title,
      changeTitle
    }
  }
}
</script>
