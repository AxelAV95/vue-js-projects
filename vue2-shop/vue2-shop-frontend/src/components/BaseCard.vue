<template>
  <v-card>
    <v-card-title>
      <slot name="title">Default title</slot>
    </v-card-title>
    <v-card-text>
      <slot>
        Default content
      </slot>
    </v-card-text>
    <v-card-actions>
      <slot name="actions"></slot>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "BaseCard"
};
</script>
