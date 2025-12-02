<template>
  <v-card class="mx-auto mt-5" max-width="600" elevation="4">
    <v-card-title class="primary white--text">
      Nuevo Assessment
      <v-spacer></v-spacer>
      <span class="caption">Paso {{ step }} de 3</span>
    </v-card-title>

    <v-card-text class="pa-0">
      <v-window v-model="step">
        
        <v-window-item :value="1">
          <v-container class="pa-6 text-center">
            <h3 class="mb-4">¿Qué tipo de evaluación deseas crear?</h3>
            <v-row>
              <v-col cols="6">
                <v-card 
                  :color="form.type === 'normal' ? 'blue lighten-4' : 'grey lighten-4'"
                  class="cursor-pointer pa-4"
                  @click="form.type = 'normal'"
                  hover
                >
                  <v-icon size="48" color="blue">mdi-file-document-outline</v-icon>
                  <div class="mt-2 font-weight-bold">Normal</div>
                  <div class="caption">Una evaluación simple</div>
                </v-card>
              </v-col>
              
              <v-col cols="6">
                <v-card 
                  :color="form.type === 'serie' ? 'purple lighten-4' : 'grey lighten-4'"
                  class="cursor-pointer pa-4"
                  @click="form.type = 'serie'"
                  hover
                >
                  <v-icon size="48" color="purple">mdi-layers-outline</v-icon>
                  <div class="mt-2 font-weight-bold">Serie</div>
                  <div class="caption">Múltiples evaluaciones</div>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-window-item>

        <v-window-item :value="2">
          <v-container class="pa-6">
            <h3 class="mb-4">Detalles del Assessment</h3>
            <v-text-field
              v-model="form.title"
              label="Título de la evaluación"
              outlined
              dense
            ></v-text-field>
            <v-textarea
              v-model="form.description"
              label="Instrucciones o descripción"
              outlined
              rows="3"
            ></v-textarea>
          </v-container>
        </v-window-item>

        <v-window-item :value="3">
          <v-container class="pa-6 text-center">
            <v-icon size="64" color="success" class="mb-3">mdi-check-circle-outline</v-icon>
            <h3>¡Todo listo!</h3>
            <p class="grey--text">Revisa los datos antes de guardar.</p>
            
            <v-list dense class="text-left grey lighten-4 rounded">
              <v-list-item>
                <v-list-item-content>Tipo:</v-list-item-content>
                <v-list-item-content class="font-weight-bold align-end">
                  {{ form.type === 'normal' ? 'Normal' : 'Serie' }}
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>Título:</v-list-item-content>
                <v-list-item-content class="font-weight-bold align-end">
                  {{ form.title }}
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-container>
        </v-window-item>

      </v-window>
    </v-card-text>

    <v-divider></v-divider>

    <v-card-actions class="pa-4">
      <v-btn text @click="back" :disabled="step === 1">
        Atrás
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn 
        color="primary" 
        @click="next"
        :disabled="!isValidStep"
      >
        {{ step === 3 ? 'Crear Assessment' : 'Siguiente' }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'AssessmentWizard',
  data() {
    return {
      step: 1,
      form: {
        type: '',     // 'normal' o 'serie'
        title: '',
        description: ''
      }
    };
  },
  computed: {
    // Validación simple para habilitar el botón "Siguiente"
    isValidStep() {
      if (this.step === 1) return this.form.type !== '';
      if (this.step === 2) return this.form.title.length > 3; // Mínimo 3 letras
      return true;
    }
  },
  methods: {
    ...mapActions('assessments', ['create']), // Mapeamos la acción de Vuex

    back() {
      if (this.step > 1) this.step--;
    },
    next() {
      if (this.step < 3) {
        this.step++;
      } else {
        this.finish();
      }
    },
    async finish() {
      // Enviamos el formulario a Vuex
      // Usamos spread {...} para enviar una copia y no la referencia reactiva
      await this.create({ ...this.form });
      
      // Resetear el formulario y volver al inicio
      this.step = 1;
      this.form = { type: '', title: '', description: '' };
      
      alert('Assessment creado con éxito'); // Feedback temporal
    }
  }
};
</script>