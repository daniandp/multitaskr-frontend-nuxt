export const state = () => ({
    items: {
        count: 0,
        results: []
    },
    pokemon: {}
});

export const getters = {
    items: (state) => state.items,
    pokemon: (state) => state.pokemon
};

export const mutations = {
    items(state, data) {
        state.items = data;
    },

    pokemon(state, item) {
        state.pokemon = item;
    },
};

export const actions = {
    async get({ commit }) {
        const res = await this.$axios.get("https://pokeapi.co/api/v2/pokemon")
        commit('items', res.data)
    },

    async find({ commit }, id) {
        const res = await this.$axios.get("https://pokeapi.co/api/v2/pokemon/" + id)
        commit('pokemon', res.data)
    },

    async create({ commit }, form) {
        const res = await this.$axios.post("https://pokeapi.co/api/v2/pokemon/create", form)
        commit('pokemon', res.data)
    },

    async update({ commit }, id, form) {
        const res = await this.$axios.put("https://pokeapi.co/api/v2/pokemon/" + id + "/update", form)
        commit('pokemon', res.data)
    },

    async delete({ commit }, id) {
        await this.$axios.delete("https://pokeapi.co/api/v2/pokemon/" + id + "/delete")
        commit('pokemon', {})
    },
};
