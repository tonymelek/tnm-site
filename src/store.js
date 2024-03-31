
import { createStore } from 'vuex'

export default createStore({
    state: () => ({
        someDataFromStore: 'Melek',
        // loggedInUser: null
    }),
    mutations: {
        setSomeData: (state, payload) => {
            state.someDataFromStore = payload;
        },
        // setSelectedForm: (state, payload) => {
        //     state.selectedForm = payload;
        // }
    },
    getters: {
        // getUser: ({ loggedInUser }) => loggedInUser,
        // getSelectedForm: ({ selectedForm }) => selectedForm
    }
})