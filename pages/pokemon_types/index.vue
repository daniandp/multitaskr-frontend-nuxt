<template>
    <b-container class="py-5">
        <h1>Pokemon's Type</h1>
        <Pagination :count="types.count" />
        <b-table class="text-center" :items="types.results" :fields="fields">
            <template #cell(index)="data">
                {{ data.index + 1 }}
            </template>
            <template #cell(name)="data">
                <nuxt-link :to="'/pokemon_types/' + (data.index + 1)">
                    {{ data.item.name }}
                </nuxt-link>
            </template>
        </b-table>
    </b-container>
</template>

<script>
import { mapGetters } from "vuex";
import Pagination from "@/components/Pagination.vue";

export default {
    async fetch({ store }) {
        await store.dispatch("types/get"); // Actions del store de type
    },

    components: {
        Pagination,
    },

    data() {
        return {
            fields: ["index", { key: "name", label: "Pokemon's Type" }, "url"],
        };
    },

    watch: {
        "$route.query": {
            deep: true,
            async handler() {
                await this.$store.dispatch("types/get", this.$route.query);
            },
        },
    },

    computed: {
        // variables que devuelven un resultado, valor o un cálculo
        ...mapGetters({
            // acceso a las variables globales
            types: "types/items",
        }),
    },
};
</script>
