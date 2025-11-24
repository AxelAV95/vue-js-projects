<template>
  <v-app>
    <v-main class="pa-5">
      <MiAlerta> Esto es una alerta personalizada </MiAlerta>

      <MiAlerta>
        <h3>¡Atención!</h3>
        <p>Puedo inyectar HTML y otros componentes de Vuetify aquí</p>
        <v-btn small color="warning">Acción</v-btn>
      </MiAlerta>
      <MiAlerta />
     <TarjetaLayout> 
       <template v-slot:header> Perfil de usuario </template>
        <div class="text-center">
          <v-avatar size="100" class="mb-4">
            <img src="https://randomuser.me/api/portraits/women/82.jpg" alt="Avatar" />
          </v-avatar>
          <h3 class="mt-3">Dev Junior</h3>
        </div>

        <template v-slot:footer>
          <v-btn text color="red" outlined>Rechazar</v-btn>
          <v-btn depressed color="blue" dark>Mensaje</v-btn>

        </template>
       
      </TarjetaLayout> 

     <ListaUsuarios>
        <template v-slot:item="{ usuario }">

          <v-row>
            <v-col>
              <v-list-item-title class="red--text text-h6">
                {{ usuario.nombre }}
              </v-list-item-title>
            
            </v-col>

           
          </v-row>
        </template>
     </ListaUsuarios> 

     <ListaUsuarios>
        <template v-slot:item="{ usuario }">

          <v-row>
            <v-col>
              <v-list-item-title>
                {{ usuario.nombre }}
              </v-list-item-title>
              <v-list-item-subtitle>
                Experto {{ usuario.skill }}
              </v-list-item-subtitle>
            </v-col>

            <v-col cols="4" class="text-right">
              <v-chip
               small
               :color="usuario.role === 'Admin' ? 'purple' : 'grey'"
               dark
              >
                {{ usuario.role }}
              </v-chip>
            </v-col>
          </v-row>
        </template>
     </ListaUsuarios> 
    </v-main>
  </v-app>
</template>

<script>
import MiAlerta from "./components/MiAlerta.vue";
import TarjetaLayout from "./components/TarjetaLayout.vue";
import ListaUsuarios from "./components/ListaUsuarios.vue";

export default {
  name: "App",

  components: {
    MiAlerta,
    TarjetaLayout,
    ListaUsuarios
  },

  data: () => ({
    //
  }),
};
</script>
