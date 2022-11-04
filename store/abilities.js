export const state = () => ({
    items: {
        count: 0,
        results: []
    }, 
    ability: {}
  })
  
  export const getters = {
    items(state) {
          return state.items;
      },
      
    ability(state) {
        return state.ability;
      }
  }
  
  export const mutations = {   
    items(state, data) {
        state.items = data;
      },

    ability(state, item) {
        state.ability = item;
      }, 
  }
  
export const actions = {
   
    //   const response =  await this.$axios.get('https://pokeapi.co/api/v2/ability')
    async get({ commit }) { // en el contexto se puede pedir commit(mutation), dispatch(actions) y getters(getters)
        // make request
        const response = await this.$axios.$get("https://pokeapi.co/api/v2/ability")
        commit('items', response)
        //console.log(response, 'QUESESTOOOOOO???????');
    },
    
    async find({ commit }, id) { // en el contexto se puede pedir commit(mutation), dispatch(actions) y getters(getters)
        // make request
        const response = await this.$axios.$get("https://pokeapi.co/api/v2/ability/" + id)
        commit('ability', response)
        console.log(response, 'ITEEEEEEEEM???????');
        console.log('FIIIIIIND?');
    },
    
    }