<template>
  <v-container>
    <h2 class="mb-4">Evaluaciones activas</h2>

    <v-alert
      v-if="filteredAssessments.length === 0"
      type="info"
      text
      border="left"
    >
      No hay assessments creados. ¡Usa el asistente de arriba para crear uno!
    </v-alert>

    <v-switch v-model="showAssignedOnly" label="Mostrar solo asignados" ></v-switch>
    <v-scale-transition group>
      <div v-for="assessment in filteredAssessments" :key="assessment.id">
        <AssessmentItem :assessment="assessment" />
      </div>
    </v-scale-transition>

  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
import AssessmentItem from './AssessmentItem.vue';

export default {
  name: 'AssessmentList',
  data() {
    return {
      showAssignedOnly: false
    };
  },
  components: { AssessmentItem },
  computed: {
    // Mapeamos el getter para obtener el array reactivo
    ...mapGetters('assessments', { assessments: 'allAssessments' }),

    filteredAssessments() {
        if(!this.showAssignedOnly) {
          return this.assessments;
        }
        return this.assessments.filter(a => a.assignedTo !== null);
    }
  }
};
</script>