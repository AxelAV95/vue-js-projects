import Vue from 'vue';
import Vuex from 'vuex';
import assessments from './modules/assessments'; //se importa el modulo de assessments

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        
    },
    mutations:{},
    actions:{},
    getters:{},
    modules: {
        assessments
    }

})