<template>
    <b-container class="py-5">
        <h1>Type: {{ type.name }}</h1>
        <b-jumbotron class="pt-4 mt-3">
            <p>{{ type }}</p>
        </b-jumbotron>
    </b-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    async fetch({ store, params }) {
        //_ valor/parámetro dinámico que se envía a los params del url
        await store.dispatch("types/find", params.id); // Actions del store de type
    },

    computed: {
        ...mapGetters({
            type: "types/type",
        }),
    },
};
</script>
