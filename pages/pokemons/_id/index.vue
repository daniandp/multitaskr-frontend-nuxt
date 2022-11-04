<template>
    <b-container class="py-5">
        <h1>Pokemon's name: {{ pokemon.name }}</h1>
        <b-jumbotron class="pt-4 mt-3">
            <p>{{ pokemon }}</p>
        </b-jumbotron>
    </b-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    async fetch({ store, params }) {
        await store.dispatch("pokemons/find", params.id); // Actions
    },

    computed: {
        ...mapGetters({
            pokemon: "pokemons/pokemon",
        }),
    },
};
</script>
