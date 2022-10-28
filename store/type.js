export const state = () => ({
    allTypes: {
        count: 0,
        results: []
    },

    type: {}
  })
  
  export const getters = { //getters
    allTypes(state) {
      return state.allTypes
      },
      
    type(state) {
        return state.type
      }  
  }
  
  export const mutations = { // commit
    allTypes(state, data) {
          state.allTypes = data;
          console.log(state.allTypes, 'state.allTypes');
      },
      
    type(state, item) {
        state.type = item;
        console.log(state.type, 'state.type');
  } 
  }
  
  export const actions = { //dispatch
    async get({ commit }) {
          const response = await this.$axios.$get('https://pokeapi.co/api/v2/type')
          commit('allTypes', response)
          console.log(response, 'response');
      },
      
    async find({ commit }, id) {
        const response = await this.$axios.$get('https://pokeapi.co/api/v2/type/' + id)
        commit('type', response)
        console.log(response, 'response del find');
  }  
  }