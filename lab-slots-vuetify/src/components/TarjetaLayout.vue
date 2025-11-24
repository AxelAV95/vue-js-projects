<template>
    <v-card class="mx-auto" max-width="400">
        <v-card-title class="blue white--text">
            <slot name="header">
                Título por defecto
            </slot>
        </v-card-title>
        <v-card-text class="pt-4">
            <slot>
            </slot>
        </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>
            <slot name="footer"></slot>
        </v-card-actions>
    </v-card>
</template>