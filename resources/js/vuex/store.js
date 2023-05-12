
import Vuex from 'vuex';

import Categories from './modules/categories/categories';


Vue.use(Vuex)


export default store = new Vuex.Store({
    modules: {
        categories: Categories

    }
});

