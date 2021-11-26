<template>
    <h1 v-if="!pokemon && !errorMessage">Buscando...</h1>
    <h1 v-else-if="errorMessage">{{ errorMessage }}</h1>
    <template v-else>
        <h3>{{ pokemon.name }}</h3>
        <img :src="pokemon.sprites.front_default" alt="">
        <br>
        <router-link :to="{ name: 'pokemon-search' }">Regresar</router-link>
    </template>
</template>

<script>
import { watch } from 'vue';
import { useRoute, onBeforeRouteLeave } from 'vue-router'
import usePokemon from '../composables/usePokemon';

export default {
    setup(){
        const route = useRoute()
        const { errorMessage, isLoading, pokemon, searchPokemon} = usePokemon(route.params.id)

        watch(
            ()=>route.params.id,
            (/*value, preValue*/) => searchPokemon(route.params.id)
        )

        onBeforeRouteLeave(() => {
            const answer = window.confirm('¿Está seguro que desea salir?')
            if(!answer) return false // false, bloque la salida
        })

        return {
            errorMessage,
            isLoading,
            pokemon
        }
        // console.log()
    }
}
</script>

<style>

</style>