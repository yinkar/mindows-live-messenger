import { createApp } from 'vue';
import { createStore } from 'vuex';

import './style.css';
import App from './App.vue';

const store = createStore({
    state () {
        return {
            mouseX: 0,
            mouseY: 0,
            isMouseDown: false,
        };
    },
    mutations: {
        setMousePosition(state, n) {
            state.mouseX = n.mouseX;
            state.mouseY = n.mouseY;
        },
        setMouseDown(state, n) {
            state.isMouseDown = n;
        }
    }
});

const app = createApp(App).use(store).mount('#app');
