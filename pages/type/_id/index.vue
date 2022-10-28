<template>
    <b-container class="py-5">
       <h1>Type: {{type.name}} - Id: {{type.id}}</h1>
       <span>{{type}}</span>
   </b-container>
 </template>
 
 <script>
   import { mapGetters } from 'vuex';
 
   export default {
   async fetch({store, params}) {
           await store.dispatch('type/find', params.id); // Actions del store de type
     },  
       
   computed: {
       ...mapGetters({
           type: 'type/type'
       })
   }
   
   }
 </script>