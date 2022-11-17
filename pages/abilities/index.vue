<template>
    <b-container class="py-5">
        <h1>Pokemon's Abilitys</h1>
        <Pagination :count="abilities.count" />
        <b-table :items="abilities.results"></b-table>
    </b-container>
</template>

<script>
import { mapGetters } from "vuex";
import Pagination from "@/components/Pagination.vue";

export default {
    components: {
        Pagination,
    },

    async fetch({ store }) {
        await store.dispatch("abilities/get"); // Actions => del store de abilities
    },

    computed: {
        ...mapGetters({
            abilities: "abilities/items",
        }),
    },

    watch: {
        "$route.query": {
            deep: true,
            async handler() {
                await this.$store.dispatch("abilities/get", this.$route.query);
            },
        },
    },
};
</script>
