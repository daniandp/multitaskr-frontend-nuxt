export const state = () => ({ // state, colección de variables globales para acceder a ellas en toda la app
    items: {
        count: 0,
        results: []
    },

    type: {}
})

export const getters = { // getters, acceso a las variables
    items(state) {
        return state.items
    },

    type(state) {
        return state.type
    }
}

export const mutations = { // commit, sobreescribir las variables
    items(state, data) {
        state.items = data;
    },

    type(state, item) {
        state.type = item;
    }
}

export const actions = { // dispatch
    async get({ commit }, form) { // el commit le hace mutación a la variable
        const response = await this.$axios.$get('https://pokeapi.co/api/v2/type',{
            params: form,
        })
        commit('items', response);
    },

    async find({ commit }, id) { // el commit le hace mutación a la variable
        const response = await this.$axios.$get('https://pokeapi.co/api/v2/type/' + id)
        commit('type', response);
    }
}