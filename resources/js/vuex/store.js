
import { createStore } from 'vuex'

import categories from './modules/categories/categories'





export default createStore ({
    modules: {
        categories: categories

    }
})

