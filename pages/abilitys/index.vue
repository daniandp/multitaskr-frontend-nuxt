<template>
  <b-container class="py-5">
        <h1>Pokemon's Abilitys</h1>
        <b-table :items="abilitys.results"></b-table>
    </b-container>
</template>

<script>
import { mapGetters } from 'vuex';

export default {

    async fetch({store}) {
        await store.dispatch('abilitys/get'); // Actions => del store de abilitys
    },
    
    computed: {
        ...mapGetters({
            abilitys: 'abilitys/allAbilitys'
        })
    }
    
}

</script>