<template>
  <b-container>
    <h1>Daniela Profile</h1>
    <b-button to="/users/k9kdk92kd-dodmo1m0f1-om12oemd1o2d/update" variant="success">
        Edit Profile
    </b-button>

    {{ $route.params.uid }}
  </b-container>
</template>

<script>
export default {
    middleware: 'authenticated',

    data() {
        return {
            user: {
                name: "Daniela"
            }
        }
    },

    watch: {

    },

    methods: {

    }
}
</script>
