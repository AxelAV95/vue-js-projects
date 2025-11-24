<template>
    <v-alert
        color="info"
        dark
        border="left"
        prominent
    >
        <slot>
            Texto por defecto
        </slot>
    </v-alert>
</template>

<script>
export default {
    name: 'MiAlerta',
};
</script>

