// vue.config.js

const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  // *** NUEVA CONFIGURACIÓN AQUÍ ***
  devServer: {
    port: 9000, // <--- Especifica el puerto que quieres (ej: 9000)
    // host: '0.0.0.0', // Opcional: Si quieres que sea accesible desde la red local
  },
  // *****************************

  transpileDependencies: [
    'vuetify'
  ]
})