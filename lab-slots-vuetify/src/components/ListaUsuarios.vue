<template>

    <v-list two-line subheader>
        <v-subheader>
            Lista de usuarios (Hijo tiene los datos)
        </v-subheader>

        <v-list-item v-for="usuario in usuarios" :key="usuario.id">
            <v-list-item-content>
                <slot name="item" :usuario="usuario">
                    {{ usuario.nombre}} 
                </slot>
            </v-list-item-content>
        </v-list-item>
    </v-list>

</template>

<script>
export default {
    name: 'ListaUsuarios',

    data: () => ({
        usuarios: [
            { id: 1, nombre: 'Juan Pérez' , skill: 'JavaScript', role: 'Admin'},
            { id: 2, nombre: 'María Gómez' , skill: 'Python', role: 'User'},
            { id: 3, nombre: 'Carlos Rodríguez' , skill: 'Java',  role: 'User'},
            { id: 4, nombre: 'Ana Martínez' , skill: 'C#', role: 'User'},
            { id: 5, nombre: 'Luis Fernández' , skill: 'Ruby', role: 'User'},
        ],
    }),
};

</script>