import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const storeData = {
    state: {
        listTodo: [
            { id: 1, title: "task 1", completed: false },
            { id: 2, title: "task 2", completed: false },
            { id: 3, title: "task 3", completed: false },
          ],
    }
}

const store = new Vuex.Store(storeData)

export default store