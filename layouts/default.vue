<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-container>
                <b-navbar-brand to="/">Daniela's Project</b-navbar-brand>

                <b-navbar-nav>
                    <b-nav-item to="/pokemons">
                        Pokemons
                    </b-nav-item>
                    <b-nav-item to="/abilitys">
                        Abilitys
                    </b-nav-item>
                </b-navbar-nav>
            </b-container>
        </b-navbar>

        <nuxt />
    </div>
</template>
