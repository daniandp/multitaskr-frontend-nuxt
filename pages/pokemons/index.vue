<template>
    <b-container class="py-5">
        <h1>Pokemons</h1>
        <Pagination :count="pokemons.count"/>
        <b-table class="text-center" :items="pokemons.results" :fields="fields">
            <template #cell(index)="data">
                {{ data.index + 1  }}
            </template>
            <template #cell(url)="data">
                <nuxt-link :to="'/pokemons/' + (data.index + 1)">
                    {{ data.item.url }}
                </nuxt-link>
            </template>
        </b-table>
    </b-container>
</template>

<script>
import { mapGetters } from "vuex";
import Pagination from "@/components/Pagination.vue";

export default {
    async fetch({ store, route }) {
        await store.dispatch("pokemons/get", route.query); // Actions
    },

    components: {
        Pagination,
        //"pagination-element": Pagination
    },

    data() {
        return {
            fields: ["index", { key: "name", label: "Pokemon's Name" }, "url"],
        };
    },

    watch: {
        '$route.query': {
            deep: true,
            async handler() {
                await this.$store.dispatch("pokemons/get", this.$route.query);
                console.log("funciona el handler");
            },
        },
    },

    computed: {
        ...mapGetters({
            pokemons: "pokemons/items",
        }),
    },

};
</script>
