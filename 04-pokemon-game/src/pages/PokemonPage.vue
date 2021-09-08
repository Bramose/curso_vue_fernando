<template> 
    <h1 v-if="!pokemon">Espere por favor...</h1>
    <div v-else>
        <h1>¿Quién es este pokémon?</h1>
        <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon" />
        <PokemonOptions 
            :pokemons="pokemonArr" 
            @selection="checkAnswer"
        />
        <template  v-if="showAnswer">
            <h2 class="fade-in" v-text="message"></h2>
            <button @click="newGame">Nuevo juego</button>
        </template>
    </div>
</template>

<script>
import PokemonOptions from "@/components/PokemonOptions"
import PokemonPicture from "@/components/PokemonPicture"

import getPokemonOptions from '@/helpers/getPokemonOptions.js'
// console.log(getPokemonOptions());
export default {
    name: 'Pokemon Pages',
    components: {
        PokemonOptions,
        PokemonPicture
    },
    data() {
        return {
            pokemonArr: [],
            pokemon: null,
            showPokemon: false,
            showAnswer: false,
            message: ''
        }
    }, 
    methods: {
        async mixPokemonArray() {
            this.pokemonArr = await getPokemonOptions()

            const rndInt = Math.floor( Math.random() * 4 )
            this.pokemon = this.pokemonArr[ rndInt ]
        },
        checkAnswer(pokemonId) {
            this.message = (pokemonId === this.pokemon.id) 
                            ? `Correcto, ${ this.pokemon.name }` 
                            : `Opps, era ${ this.pokemon.name }`
            this.showPokemon = true
            this.showAnswer = true
        },
        resetData() {
            this.showPokemon = false
            this.showAnswer = false
            this.pokemonArr = []
            this.pokemon = null
        },
        newGame() {
            this.resetData()
            this.mixPokemonArray();
        }
    },
    mounted() {
        this.mixPokemonArray();
    }
}
</script>
