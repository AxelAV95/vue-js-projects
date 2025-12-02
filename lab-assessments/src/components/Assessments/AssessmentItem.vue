<template>
  <v-card class="mb-3" outlined>
    <v-list-item three-line> 
      <v-list-item-content>
        <div class="overline mb-2"> 
          <v-chip 
            small 
            :color="assessment.type === 'normal' ? 'blue lighten-4' : 'purple lighten-4'"
            class="mr-2"
          >
            {{ assessment.type }}
          </v-chip>
          {{ new Date(assessment.id).toLocaleDateString() }}
        </div>
        
        <v-list-item-title class="headline mb-1">
          {{ assessment.title }}
        </v-list-item-title>
        
        <v-list-item-subtitle>
          {{ assessment.description || 'Sin descripción' }}
        </v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar tile size="80" color="grey lighten-4">
        <v-layout column align-center justify-center fill-height>
          <span class="caption grey--text">Asignado a:</span>
          <div v-if="assessment.assignedTo" class="font-weight-bold text-center">
            {{ assessment.assignedTo.name }}
          </div>
          <div v-else class="caption text-center red--text">
            Nadie
          </div>
        </v-layout>
      </v-list-item-avatar>
    </v-list-item>

    <v-divider></v-divider>

    <v-card-actions>
      <v-select
        :items="users"
        item-text="name"
        item-value="id"
        label="Asignar a..."
        dense
        hide-details
        outlined
        class="ma-2"
        style="max-width: 200px"
        @change="handleAssign"
        :value="assessment.assignedTo ? assessment.assignedTo.id : null"
      ></v-select>

      <v-spacer></v-spacer>

      <v-btn color="error" text @click="handleDelete">
        <v-icon left>mdi-delete</v-icon>
        Eliminar
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'AssessmentItem',
  props: {
    assessment: {
      type: Object,
      required: true
    }
  },
  computed: {
    // Traemos la lista de usuarios del Store para llenar el select
    ...mapGetters('assessments', { users: 'allUsers' })
  },
  methods: {
    ...mapActions('assessments', ['delete', 'assign']),

    handleDelete() {
      if (confirm('¿Estás seguro de borrar este assessment?')) {
        this.delete(this.assessment.id);
      }
    },
    handleAssign(userId) {
      // El v-select devuelve el ID del usuario seleccionado
      this.assign({ 
        assessmentId: this.assessment.id, 
        userId: userId 
      });
    }
  }
};
</script>