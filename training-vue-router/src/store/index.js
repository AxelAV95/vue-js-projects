// src/store/index.js
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  // 1. STATE: Aquí va la data (Es como el 'data' de un componente, pero global)
  state: {
    // Generamos 12 eventos ficticios usando Array.from y map
    events: Array.from({ length: 12 }, (_, i) => ({
      id: i + 1,
      name: `Evento #${i + 1}`,
      date: `2025-11-${(i % 30) + 1}`, // Fechas variadas
      description:
        "Descripción generada automáticamente para pruebas de paginación.",
      color: ["indigo", "orange", "purple", "teal", "red", "blue"][i % 6], // Colores rotativos
    })),
  },
  // 2. MUTATIONS: Métodos para cambiar la data (Lo veremos en el Lab 02)
  mutations: {
    ADD_EVENT(state, eventPayload) {
      state.events.push(eventPayload);
    },
    SET_EVENTS(state, eventsPayload) {
      state.events = eventsPayload;
    },
  },
  // 3. ACTIONS: Lógica asíncrona (API calls)
  actions: {
    fetchEvents({ commit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const eventsFromAPI = [
            {
              id: 1,
              name: "Taller de Vuex (Global)",
              date: "22 Nov 2025",
              description: "Aprendiendo a manejar el estado globalmente.",
              color: "indigo",
            },
            {
              id: 2,
              name: "Lanzamiento de Producto",
              date: "05 Dic 2025",
              description: "Presentación oficial de la nueva línea.",
              color: "orange",
            },
            {
              id: 3,
              name: "Fiesta de Fin de Año",
              date: "31 Dic 2025",
              description: "Celebración con el equipo.",
              color: "purple",
            },
          ];

          commit("SET_EVENTS", eventsFromAPI);
          resolve();
        }, 2000);
      });
    },
  },
  // 4. GETTERS: Como las computed properties, pero globales
  getters: {},
});
