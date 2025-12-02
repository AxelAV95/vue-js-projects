<template>
  <v-container>
    <div class="text-center mb-5">
      <h1>Gestión de assessments</h1>
      <p class="grey--text">Crea y asigna nuevas evaluaciones</p>
    </div>

    <v-row justify="center" class="mb-5">
      <v-col cols="12">
        <AssessmentWizard />
      </v-col>
    </v-row>
    
    <v-divider class="my-5"></v-divider>

    <v-row>
      <v-col cols="12">
        <AssessmentList />
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
import AssessmentWizard from '@/components/Assessments/AssessmentWizard.vue';
import AssessmentList from '@/components/Assessments/AssessmentList.vue'; // <--- Importar

export default {
  name: 'HomeView',
  components: {
    AssessmentWizard,
    AssessmentList // <--- Registrar
  }
};
</script>