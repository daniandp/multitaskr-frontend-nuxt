<template>
    <b-container class="py-5">
        <h1>{{ pokemon.name }}</h1>

        <pre>{{ pokemon }}</pre>
    </b-container>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    async fetch({store, params}) {
        await store.dispatch('pokemons/find', params.id); // Actions
    },

    computed: {
        ...mapGetters({
            pokemon: 'pokemons/pokemon'
        })
    }
};
</script>
