<template>
    <b-container class="py-5">
        <h1>Pokemon's Type</h1>
        <b-row align-h="end">
            <b-col>
                <b-form-input
                    v-model="search"
                    type="search"
                    placeholder="Search pokemon's type..."
                ></b-form-input>
            </b-col>
            <b-col cols="3">
                <b-form-select
                    v-model="form.limit"
                    :options="options"
                ></b-form-select>
            </b-col>
            <b-col cols="2" class="mb-3">
                <b-button-group class="w-25">
                    <b-button
                        @click="onSearch(-1)"
                        variant="info"
                        :disabled="is_previous_disabled"
                    >
                        Previous
                    </b-button>
                    <b-button
                        @click="onSearch()"
                        variant="info"
                        :disabled="is_next_disabled"
                    >
                        Next
                    </b-button>
                </b-button-group>
            </b-col>
        </b-row>
        <b-table class="text-center" :items="types.results" :fields="fields">
            <template #cell(index)="data">
                {{ data.index + 1 + form.offset }}
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
import debounce from "lodash.debounce";

export default {
    async fetch({ store }) {
        await store.dispatch("types/get"); // Actions del store de type
    },

    data() {
        return {
            options: [
                { value: null, text: "Limit", disabled: true },
                { value: 10, text: "10" },
                { value: 20, text: "20" },
            ],

            search: "",
            form: {
                offset: 0,
                limit: 10,
                search: "",
            },

            fields: ["index", { key: "name", label: "Pokemon's Type" }, "url"],
        };
    },

    watch: {
        form: {
            deep: true,
            async handler() {
                await this.$store.dispatch("types/get", this.form);
            },
        },

        search: debounce(async function () {
            this.form.search = this.search;
            console.log("funciona el debounce");
        }, 2000),
    },

    computed: {
        // variables que devuelven un resultado, valor o un cálculo
        ...mapGetters({
            // acceso a las variables globales
            types: "types/items",
        }),

        is_previous_disabled() {
            return this.form.offset <= 0;
        },

        is_next_disabled() {
            return this.form.offset + this.form.limit >= this.types.count;
        },
    },

    methods: {
        onSearch(pagination = 1) {
            if (pagination > 0) {
                this.form.offset += this.form.limit;
            } else {
                this.form.offset -= this.form.limit;
            }
        },
    },
};
</script>
