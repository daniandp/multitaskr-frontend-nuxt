<template>
  <b-container class="py-5">
        <h1>Pokemon's Abilitys</h1>
        <b-table :items="abilities.results"></b-table>
    </b-container>
</template>

<script>
import { mapGetters } from 'vuex';

export default {

    async fetch({store}) {
        await store.dispatch('abilities/get'); // Actions => del store de abilitys
    },
    
    computed: {
        ...mapGetters({
            abilities: 'abilities/items'
        })
    }
    
}

</script>