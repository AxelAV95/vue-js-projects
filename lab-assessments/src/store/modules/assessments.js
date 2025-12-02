export default {
    namespaced: true, //esto es para que el modulo sea independiente
    state: {
        assessments: JSON.parse(localStorage.getItem('assessments')) || [],
        users: [
            { id: 1, name: 'Alice' },
            { id: 2, name: 'Bob' },
            { id: 3, name: 'Charlie' }
        ]
    },
    mutations:{ //esto sirve para modificar el estado de manera sincronica
        CREATE_ASSESSMENT(state, assessment) {
            assessment.id = Date.now(); // Generar un ID unico basado en la fecha actual
            assessment.assignedTo = null;
            state.assessments.push(assessment);
            this.commit('assessments/SAVE_TO_LOCAL');
        },
        DELETE_ASSESSMENT(state, id) {
            state.assessments = state.assessments.filter(assessment => assessment.id !== id);
            this.commit('assessments/SAVE_TO_LOCAL');
        },
        ASSIGN_USER(state, { assessmentId, userId }) {
            const index = state.assessments.findIndex(a => a.id === assessmentId);
            if(index !== -1){ //-1 porque no lo encontro
                const user = state.users.find(u => u.id === userId);
                const updated = { ...state.assessments[index], assignedTo: user || null };
                state.assessments.splice(index, 1, updated); //esto funciona (indice, cantidad a eliminar, elemento a agregar)
                this.commit('assessments/SAVE_TO_LOCAL');
            }
        },
        SAVE_TO_LOCAL(state){
            localStorage.setItem('assessments', JSON.stringify(state.assessments));
        }
    },

    actions:{ //esto sirve para modificar el estado de manera asincronica y se van a llamar en los componentes

        //el commit sirve para llamar a las mutaciones y se le pasa el nombre de la mutacion y el payload
        create({commit}, item) {commit('CREATE_ASSESSMENT', item)},
        delete({commit}, id) {commit('DELETE_ASSESSMENT', id)},
        assign({commit}, payload) {commit('ASSIGN_USER', payload)} 
    },
    getters:{ //los getters sirven para obtener datos del estado a como los necesitamos, por ejemplo filtrados o calculados
        allAssessments: state => state.assessments,
        allUsers: state => state.users
    }
}