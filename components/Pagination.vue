<template>
    <div>
        <b-row class="mb-3" align-h="end">
            <b-col>
                <b-form-input
                    v-model="search"
                    type="search"
                    placeholder="Search pokemon..."
                ></b-form-input>
            </b-col>
            <b-col cols="3">
                <b-form-select
                    v-model="form.limit"
                    :options="options"
                ></b-form-select>
            </b-col>
            <b-col cols="2">
                <b-button-group>
                    <b-button
                        @click="onSearch(-1)"
                        :disabled="is_previous_disabled"
                        variant="info"
                    >
                        Previous
                    </b-button>
                    <b-button
                        @click="onSearch()"
                        :disabled="is_next_disabled"
                        variant="info"
                    >
                        Next
                    </b-button>
                </b-button-group>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import debounce from "lodash.debounce";

export default {
    props: ['count'],

    data() {
        console.log(this.$route.query, 'this.route');
        return {
            options: [
                { value: null, text: "Limit" },
                { value: 20, text: "20" },
                { value: 40, text: "40" },
                { value: 80, text: "80" },
                { value: 160, text: "160" },
            ],

            search: this.$route.query.search,
            form: {
                ...{
                    offset: 0,
                    limit: 20,
                    search: "",
                },
                ...this.$route.query,
            },

        };
    },

    watch: {
        form: {
            deep: true,
            async handler() {
                this.$router.push({query: this.form})
                //await this.$store.dispatch("pokemons/get", this.form);
                //console.log("funciona el handler");
            },
        },

        search: debounce(async function () {
            console.log("funciona el search");
            this.form.search = this.search;
        }, 2000),
    },

    computed: {
        is_previous_disabled() {
            return this.form.offset <= 0;
        },

        is_next_disabled() {
            return this.form.offset + this.form.limit >= this.count;
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


    

}


</script>