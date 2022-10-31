<template>
     <b-container class="py-5">
        <h1>Pokemon's Type</h1>
      <b-table :items="types.results"></b-table>
    </b-container>
  </template>
  
  <script>
    import { mapGetters } from 'vuex';
  
    export default {
    async fetch({store}) {
            await store.dispatch('types/get'); // Actions del store de type 
      },  
        
    computed: {
        ...mapGetters({
            types: 'types/items'
        })
    }
    
    }
  </script>