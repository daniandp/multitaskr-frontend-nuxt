export const state = () => ({
    allAbilitys: {
        count: 0,
        results: []
    }, 
    ability: {}
  })
  
  export const getters = {
    allAbilitys(state) {
          return state.allAbilitys;
      },
      
    ability(state) {
        return state.ability;
      }
  }
  
  export const mutations = {   
    allAbilitys(state, allData) {
        state.allAbilitys = allData;
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
        commit('allAbilitys', response)
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