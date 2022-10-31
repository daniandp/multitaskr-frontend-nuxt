<template>
    <b-container class="py-5">
          <h1>{{ability.name}}</h1>
      </b-container>
  </template>
  
  <script>
  import { mapGetters } from 'vuex';
  
  export default {
  
      async fetch({store, params}) {
          await store.dispatch('abilities/find', params.id); // Actions => del store de abilitys (find)
      },
      
      computed: {
          ...mapGetters({
              ability: 'abilities/ability'
          })
      }
      
  }
  
  </script>