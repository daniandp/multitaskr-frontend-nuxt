export const state = () => ({
    items: {
        count: 0,
        results: []
    },

    type: {}
  })
  
  export const getters = { //getters
    items(state) {
      return state.items
      },
      
    type(state) {
        return state.type
      }  
  }
  
  export const mutations = { // commit
    items(state, data) {
          state.items = data;
          console.log(state.items, 'state.allTypes');
      },
      
    type(state, item) {
        state.type = item;
        console.log(state.type, 'state.type');
  } 
  }
  
  export const actions = { //dispatch
    async get({ commit }) {
          const response = await this.$axios.$get('https://pokeapi.co/api/v2/type')
          commit('items', response)
          console.log(response, 'response');
      },
      
    async find({ commit }, id) {
        const response = await this.$axios.$get('https://pokeapi.co/api/v2/type/' + id)
        commit('type', response)
        console.log(response, 'response del find');
  }  
  }