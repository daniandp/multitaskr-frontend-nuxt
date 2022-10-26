<template>
    <b-container class="py-5">
        <h1>Pokemons</h1>

        <b-table :items="pokemons.results"></b-table>

    </b-container>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    async fetch({store}) {
        await store.dispatch('pokemons/get'); // Actions

        // store.getters['pokemons/getCounter']; // Getters
        // store.commit('pokemons/increment'); // Mutatation
    },

    computed: {
        ...mapGetters({
            pokemons: 'pokemons/items'
        })
    }
};
</script>
