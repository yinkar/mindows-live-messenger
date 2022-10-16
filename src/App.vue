<script setup>
import { ref } from 'vue';
import Login from './components/Login.vue';
import { useStore } from 'vuex';

const panel = ref(null);

const store = useStore();

document.addEventListener('mousemove', mouse => {
    store.commit('setMousePosition', {
        mouseX: mouse.x,
        mouseY: mouse.y,
    });
});

document.addEventListener('touchmove', touch => {
    store.commit('setMousePosition', {
        mouseX: touch.touches[0].clientX,
        mouseY: touch.touches[0].clientY,
    });
});

['mouseup', 'touchend', 'touchcancel'].forEach(eventName => {
    document.addEventListener(eventName, () => {
        store.commit('setMouseDown', false);
    });
});

</script>

<template>
    <div id="workspace">
        <Login ref="panel" />
    </div>
</template>

<style>
@font-face {
    font-family: 'Ubuntu';
    src: local('Ubuntu'),
        url('./fonts/Ubuntu/Ubuntu-Regular.ttf') format('truetype');
}

#workspace {
    margin: 0;
    padding: 0;
    background-color: #004e98;
    width: 100vw;
    height: 100vh;
    background-image: url('./assets/bliss.jpg');
    background-size: cover;
}

*:not(input), *:not(textarea) {
    user-select: none;
}
</style>
