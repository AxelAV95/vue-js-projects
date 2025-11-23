import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: '#009688', // Teal (Color Principal)
        secondary: '#FF9800', // Orange (Color Secundario)
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
      },
      dark: {
        primary: '#80CBC4', // Un Teal más claro para modo oscuro
        secondary: '#FFCC80',
      }
    },
  },
});