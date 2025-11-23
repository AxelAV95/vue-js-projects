<template>
  <v-container>
    <h1 class="text-h4 mb-5">Laboratorio de Directivas</h1>

    <v-row>
      <v-col cols="12" md="6">
        <v-card class="pa-5" outlined>
          <h3>1. Efecto Ripple (Nativo de Vuetify)</h3>
          <p class="mt-2">Haz clic en el cuadro azul:</p>
          
          <div 
            v-ripple 
            class="pa-10 elevation-2 blue white--text text-center rounded"
            style="cursor: pointer; user-select: none;"
          >
            ¡DALE CLICK AQUÍ! 🌊
          </div>
        </v-card>
      </v-col>

      <v-col cols="12" md="6">
        <v-card class="pa-5" outlined height="100%">
          <h3>2. Directiva Personalizada (v-resaltar)</h3>
          <p class="mt-2">Pasa el mouse por encima del texto de abajo:</p>
          
          <div 
            v-resaltar 
            class="text-h6 border pa-4 text-center rounded mt-5"
            style="border: 1px dashed #ccc;"
          >
            Soy un texto aburrido... ¡hasta que me tocas! ✨
          </div>
        </v-card>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
export default {
  name: 'PlaygroundLab', // ✅ Nombre compuesto para evitar error de ESLint
  
  // AQUÍ SE DEFINEN LAS DIRECTIVAS LOCALES
  directives: {
    resaltar: {
      // bind: Se ejecuta una vez cuando la directiva se une al elemento (Vue 2)
      bind(el) {
        el.style.transition = "all 0.3s";
        
        // Evento al entrar el mouse
        el.addEventListener('mouseenter', () => {
          el.style.backgroundColor = '#FFF9C4'; // Amarillo claro
          el.style.transform = 'scale(1.05)'; // Crece un poco
          el.style.cursor = 'help';
          el.style.boxShadow = '0px 5px 15px rgba(0,0,0,0.2)';
        });
        
        // Evento al salir el mouse
        el.addEventListener('mouseleave', () => {
          el.style.backgroundColor = 'transparent';
          el.style.transform = 'scale(1)';
          el.style.boxShadow = 'none';
          el.style.cursor = 'default';
        });
      }
    }
  }
}
</script>