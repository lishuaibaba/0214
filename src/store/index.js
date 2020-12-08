import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import menu from './modules/menu.js'
import role from './modules/role.js'
import manger from './modules/manger.js'
import cate from './modules/cate.js'
import specs from './modules/specs.js'
export default new Vuex.Store({
    modules:{
        menu,
        role,
        manger,
        cate,
        specs
    }
})