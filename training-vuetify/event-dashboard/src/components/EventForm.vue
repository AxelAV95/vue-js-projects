<template>
    <v-container>
        <h1 class="text-h4 mb-5">Nuevo Evento</h1>

        <v-form ref="form" v-model="valid" lazy-validation>

            <v-text-field v-model="name" :counter="20" :rules="nameRules" label="Nombre del Evento" required outlined
                dense></v-text-field>
            <v-select v-model="category" :items="colors" :rules="categoryRules" label="Color de Etiqueta" required
                outlined dense></v-select>

            <v-menu v-model="menu" :close-on-content-click="false" transition="scale-transition" offset-y
                min-width="auto">
                <template v-slot:activator="{ on, attrs }">
                    <v-text-field v-model="date" label="Fecha del Evento" prepend-inner-icon="mdi-calendar" readonly
                        outlined dense v-bind="attrs" v-on="on"></v-text-field>
                </template>
                <v-date-picker v-model="date" @input="menu = false" color="primary"></v-date-picker>
            </v-menu>

            <v-btn :disabled="!valid" color="primary" class="mt-3" block @click="saveEvent">
                Guardar Evento
            </v-btn>

        </v-form>

        <v-card class="mt-5 pa-3 grey lighten-4" outlined>
            <code>{{ { name, category, date } }}</code>
        </v-card>

    </v-container>
</template>

<script>
export default {
    name: 'EventForm',
    data: () => ({
        // 1. Variable para controlar si TODO el formulario es válido
        valid: true,

        name: '',
        // 2. Reglas para el Nombre
        nameRules: [
            v => !!v || 'El nombre es requerido', // Chequea si existe valor
            v => (v && v.length <= 20) || 'El nombre debe tener menos de 20 caracteres',
        ],

        category: '',
        // 3. Reglas para el Color
        categoryRules: [
            v => !!v || 'El color es requerido',
        ],

        date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        menu: false,
        colors: ['indigo', 'orange', 'purple', 'teal']
    }),
    methods: {
        saveEvent() {
            // 4. VALIDACIÓN MANUAL AL GUARDAR
            // Accedemos al formulario usando la referencia 'form' y ejecutamos validate()
            if (this.$refs.form.validate()) {
                // Si validate() devuelve true, procedemos
                alert(`¡Éxito! Guardando evento: ${this.name}`);

                // Opcional: Resetear el formulario después de guardar
                // this.$refs.form.reset()
            } else {
                alert('El formulario tiene errores, corrígelos por favor.');
            }
        }
    }
}
</script>