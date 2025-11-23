// src/router/index.js
import Vue from "vue";
import VueRouter from "vue-router";

// 1. Importamos tus componentes existentes
import DashboardHome from "../components/DashboardHome.vue";
import EventForm from "../components/EventForm.vue";
import PlaygroundLab from "../components/PlaygroundLab.vue";
import EventDetails from "../components/EventDetails.vue";
import SettingsView from "../components/SettingsView.vue";
import SettingsProfile from "../components/SettingsProfile.vue";
import SettingsNotifications from "../components/SettingsNotifications.vue";

// 2. Activamos el plugin
Vue.use(VueRouter);

// 3. Definimos el mapa de rutas
const routes = [
  {
    path: "/",
    name: "Home",
    component: DashboardHome,
  },
  {
    path: "/create",
    name: "CreateEvent",
    component: EventForm,
  },
  {
    path: "/lab",
    name: "Playground",
    component: PlaygroundLab,
  },
  {
    path: "/event/:id", // :id es el parámetro variable
    name: "EventDetails",
    component: EventDetails,
    props: true, // Pasa el :id como prop al componente
  },
  // RUTA ANIDADA
  {
    path: "/settings",
    component: SettingsView,
    // children: Array de rutas que se renderizan DENTRO de Settings.vue
    children: [
      {
        path: "profile", // OJO: No poner '/' al inicio. Se concatena auto (/settings/profile)
        name: "SettingsProfile",
        component: SettingsProfile,
      },
      {
        path: "notifications",
        name: "SettingsNotifications",
        component: SettingsNotifications,
      },
    ],
  },
];

// 4. Exportamos la instancia configurada
export default new VueRouter({
  mode: "history", // Quita el '#' de la URL
  base: process.env.BASE_URL,
  routes,
});
