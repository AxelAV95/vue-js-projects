<template>
    <v-card class="mx-auto" max-width="600">
        <v-card-title>Detalle del producto</v-card-title>
        <v-card-text>
            <h2 class="display-1">ID: {{ $route.params.id }}</h2>
        </v-card-text>
        <v-tabs background-color="deep-purple accent-4" dark>
            <v-tab :to="`/producto/${$route.params.id}/descripcion`">
                Descripción
            </v-tab>
            <v-tab :to="`/producto/${$route.params.id}/reviews`">
                Reviews
            </v-tab>
        </v-tabs>

        <v-card-text>
            <router-view></router-view>
        </v-card-text>
    </v-card>
</template>
<script>
export default{
    name: 'ProductDetail',
    mounted() {
        console.log('ID del producto:', this.$route.params.id);
    }
}
</script>